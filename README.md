# @finsel-dgi/pasby-next

A Next.js package for seamless integration with [pasby eID authentication](https://www.pasby.africa). This package provides both server and client-side utilities to implement pasby's OAuth-based electronic identification in your Next.js applications.

[![npm version](https://img.shields.io/npm/v/@finsel-dgi/pasby-next.svg)](https://www.npmjs.com/package/@finsel-dgi/pasby-next)

## Features

- Secure OAuth-based authentication with PKCE
- Cross-device authentication support
- Customizable UI components (`LoginButton`, `PasbyButton`, branding)
- **Runtime `PasbyRuntimeConfig` injection** (multi-tenant hubs, secret managers)
- **`createPasbyHandler`** for per-request credentials and tenant scoping
- Type-safe server exports (`PasbyHandlerRequest`, `ResolvePasbyContext`, …)

## Installation

```bash
npm install @finsel-dgi/pasby-next
```

## Requirements

- Next.js 14+ (15+ recommended)
- React 18+
- Node.js 18+

---

## Environment setup (single-tenant / defaults)

For a **single Pasby app** and **process.env–driven** config, use the default **`handler`** (see [Quick start](#quick-start)). Set:

| Variable | Purpose |
|----------|---------|
| `PASBY_CLIENT_SECRET` | App secret (`x-access-secret` on login) |
| `PASBY_CONSUMER_KEY` | Organisation API key (`x-api-key` on login) |
| `PASBY_CLIENT_ID` | App id (eID resource body) |
| `SECRET_GEN` | Symmetric key for JWE around PKCE verifier + access token **cookies** |
| `PASBY_LOGIN_REDIRECT` | Fallback path after handshake if `state` cookie is missing |
| `PASBY_LOGOUT_REDIRECT` | Target after `/api/eid/logout` (default `/`) |

`handler` internally uses **`pasbyConfigFromEnv()`** to build [`PasbyRuntimeConfig`](#pasbyruntimeconfig).

---

## `PasbyRuntimeConfig`

All server flows (login, handshake token swap, cookie encrypt/decrypt, eID resource) accept an optional **`PasbyRuntimeConfig`** so you can load secrets from **Infisical**, **Vault**, per-tenant DB rows, etc.

```typescript
type PasbyRuntimeConfig = {
  secret: string;           // PASBY_CLIENT_SECRET
  apikey: string;         // PASBY_CONSUMER_KEY
  appid: string;          // PASBY_CLIENT_ID
  gen: string;            // SECRET_GEN (cookie JWE)
  loginReturnPath: string;
  logoutReturnPath: string;
};
```

- **`gen`** must be the **same** for login → handshake → `getEID` on a given browser session (same cookies).
- Your app may split concerns: e.g. **tenant** supplies `secret` / `apikey` / `appid`, **host** supplies `gen` + redirects (see turnkey hubs).

**Helpers / constants** (from `@finsel-dgi/pasby-next/server`):

- `pasbyConfigFromEnv()` — builds `PasbyRuntimeConfig` from `process.env` (same keys as above).
- `PASBY_TENANT_COOKIE` — name of the httpOnly cookie (`pasby_tenant`) used to remember which tenant started login when using `createPasbyHandler` with `tenantId` on `LoginButton`.

---

## `createPasbyHandler` (multi-tenant / injected config)

Use when **credentials or crypto key vary per tenant** or are not in `process.env`.

```typescript
import {
  createPasbyHandler,
  PASBY_TENANT_COOKIE,
  pasbyConfigFromEnv,
} from "@finsel-dgi/pasby-next/server";
import type { ResolvePasbyContext } from "@finsel-dgi/pasby-next/server";
import { NextRequest } from "next/server";

const resolveContext: ResolvePasbyContext = async (req, phase) => {
  if (phase === "login") {
    const tenantId = req.nextUrl.searchParams.get("tenant")?.trim();
    if (!tenantId) return null;
    const config = await loadPasbyRuntimeConfigForTenant(tenantId); // your Infisical / DB
    if (!config) return null;
    return { config, tenantId };
  }
  if (phase === "handshake") {
    const tenantId = req.cookies.get(PASBY_TENANT_COOKIE)?.value?.trim();
    if (!tenantId) return null;
    const config = await loadPasbyRuntimeConfigForTenant(tenantId);
    if (!config) return null;
    return { config, tenantId };
  }
  if (phase === "logout") {
    const tenantId = req.cookies.get(PASBY_TENANT_COOKIE)?.value?.trim();
    if (tenantId) {
      const config = await loadPasbyRuntimeConfigForTenant(tenantId);
      if (config) return { config };
    }
    return { config: pasbyConfigFromEnv() }; // or a minimal `{ ..., logoutReturnPath: "/" }`
  }
  return null;
};

const pasbyGet = createPasbyHandler(
  {
    claims: ["naming.given", "naming.family", "contact.email"],
    action: "login",
    payload: "Sign-in request",
  },
  "/error",
  resolveContext,
);

export async function GET(
  request: NextRequest,
  ctx: { params: Promise<{ auth: string }> },
) {
  const params = await ctx.params;
  return pasbyGet(request, { params });
}
```

### `ResolvePasbyContext` phases

| Phase | When | Typical job |
|--------|------|-------------|
| `login` | `GET /api/eid/login` | Read `?tenant=`, load `PasbyRuntimeConfig`, return `{ config, tenantId }`. SDK sets **`PASBY_TENANT_COOKIE`** (httpOnly, ~10m). |
| `handshake` | `GET /api/eid/handshake` | Read `PASBY_TENANT_COOKIE`, load same tenant `config`, run token swap + set session cookies. Cookie cleared after success. |
| `logout` | `GET /api/eid/logout` | Load `config` for logout redirect; clear Pasby cookies. |

### `PasbyHandlerRequest`

The handler accepts **`PasbyHandlerRequest`** (narrow `nextUrl` + `cookies`) instead of tying types to a specific **Next.js** copy, so the host app and the package can use different `next` installs without type clashes.

---

## Quick start

### 1. API route (`app/api/eid/[auth]/route.ts`)

**Single-tenant** — default `handler` returns an async route function:

```typescript
import { handler } from "@finsel-dgi/pasby-next/server";
import { NextRequest } from "next/server";

const pasbyHandler = handler(
  {
    claims: ["naming.given", "naming.family", "contact.email"],
    action: "signup",
    payload: "User registration request",
  },
  "/error-fallback-path",
);

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ auth: string }> },
) {
  const resolvedParams = await params;
  return pasbyHandler(request, { params: resolvedParams });
}
```

**Multi-tenant** — use `createPasbyHandler` as in the section above.

**OAuth callback URL** in the Pasby console must match:

`https://<your-host>/api/eid/handshake`

---

### 2. `LoginButton`

```tsx
"use client";

import { LoginButton } from "@finsel-dgi/pasby-next";

export function AuthComponent() {
  return (
    <LoginButton
      variant="dark"
      action="identify"
      fallbackPath="/dashboard"
    />
  );
}
```

| Prop | Description |
|------|-------------|
| `fallbackPath` | Post-handshake path (or full path+query). **URL-encoded** by the button when calling `/api/eid/login`. |
| `tenantId` | **Required** for `createPasbyHandler` flows: sent as `?tenant=` so login can resolve `PasbyRuntimeConfig`. |
| `variant` | `original` \| `light` \| `dark` \| `darktext` |
| `action` | `login` \| `identify` |

The button calls:

`GET /api/eid/login?redirect=false&tenant=<optional>&state=<encodeURIComponent(fallbackPath)>`

---

### 3. `state`, nested query strings, and redirects

If `fallbackPath` contains **another** query string (e.g. `/session/eid?redirect_url=<encoded-inner-url>`), the **inner** URL should stay **percent-encoded** inside `redirect_url` so `&` does not break the outer query.

The login handler stores `state` in a cookie and redirects to `origin + state` after handshake. **Do not apply `decodeURIComponent` to the entire `state` string after the framework has already decoded the query parameter once** — that would decode `%26` inside `redirect_url` into `&` and split the URL (fixed in **v1.1+**).

---

### 4. `getEID` (server)

```typescript
import { getEID } from "@finsel-dgi/pasby-next/server";
import { cookies } from "next/headers";

const cookieStore = await cookies();

// Same PasbyRuntimeConfig.gen / appid as used for login + handshake for this session
const eid = await getEID(cookieStore, pasbyRuntimeConfig);

// Single-tenant: omit second arg — uses pasbyConfigFromEnv()
const eidDefault = await getEID(cookieStore);
```

---

## Server exports (`@finsel-dgi/pasby-next/server`)

| Export | Kind | Notes |
|--------|------|--------|
| `handler` | default | Env-based `createPasbyHandler` with fixed `resolveContext` |
| `createPasbyHandler` | function | Multi-tenant / injected config |
| `getEID` | function | `(cookies, pasby?: PasbyRuntimeConfig)` |
| `pasbyConfigFromEnv` | function | `PasbyRuntimeConfig` from env |
| `PASBY_TENANT_COOKIE` | const | Cookie name string |
| `PasbyRuntimeConfig` | type | |
| `PasbyHandlerRequest` | type | Request shape for handlers |
| `PasbyHandlerContext` | type | `{ config, tenantId? }` from resolver |
| `ResolvePasbyContext` | type | `(req, phase) => Promise<PasbyHandlerContext | null>` |

---

## Next.js: linked package / monorepo

If you install this package via `file:` or workspace link, add **`transpilePackages: ["@finsel-dgi/pasby-next"]`** in `next.config` so the App Router compiles it correctly.

---

## User data shape

`getEID` resolves a `User` (from `@finsel-dgi/pasby-react`). See Pasby docs for the full claim map; common fields include `national`, `country`, and nested `claims.contact`, `claims.naming`, etc.

---

## End user session

Navigate to **`/api/eid/logout`** (e.g. `router.push`). Configure **`logoutReturnPath`** on `PasbyRuntimeConfig` (or `PASBY_LOGOUT_REDIRECT` in env for the default handler).

---

## Further reading

- [Pasby documentation](https://docs.pasby.africa)
- [Button customization](https://docs.pasby.africa/buttons)

## License

MIT © Finsel DGI
