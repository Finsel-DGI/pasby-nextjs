# Changelog

All notable changes to `@finsel-dgi/pasby-next` are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.1] - 2026-04-05

### Changed

- **Pasby handler errors:** clearer messages when `resolveContext` returns null for **login** / **handshake**; **development** logs include `origin`, query param keys, and (for handshake) whether `pasby_tenant` / PKCE cookies exist. Top-level catch logs `[pasby-next] eid/{phase} error: …`.

## [1.2.0] - 2026-04-05

### Added

- **`PasbyHandlerContext.login`** — optional **`PasbyLoginOverride`** (`claims`, `action`, `payload`) merged over the static options passed to **`createPasbyHandler`** during the **login** phase (per-tenant / per-request Pasby identification params).
- **`filterPasbyIdentificationClaims`**, **`PASBY_IDENTIFICATION_CLAIMS`**, **`PASBY_IDENTIFICATION_ACTIONS`**, **`PasbyIdentificationAction`**, **`AuthenticationParams`** (re-exported from `./server`) — helpers and types to validate tenant-stored claim keys and type hub defaults.

## [1.1.0] - 2026-04-05

### Added

- **`PasbyRuntimeConfig`** and **`pasbyConfigFromEnv()`** — inject Pasby credentials and cookie-encryption settings per request instead of only `process.env`.
- **`createPasbyHandler(authOptions, errorFallbackPath, resolveContext)`** — multi-tenant and secret-manager flows via **`ResolvePasbyContext`** (`login` | `handshake` | `logout`).
- **`PasbyHandlerContext`**, **`PasbyHandlerRequest`**, **`ResolvePasbyContext`** — exported types for integrators; request shape avoids coupling to a specific `next` package instance.
- **`PASBY_TENANT_COOKIE`** — stable httpOnly cookie name used with `tenantId` on login so handshake can reload the same tenant config.
- **`LoginButton`**: optional **`tenantId`** prop (sent as `?tenant=` on `/api/eid/login`); **`state`** and **`tenant`** query values are built with **`encodeURIComponent`**.
- **`getEID(cookieStore, pasby?)`** — optional second argument passes **`PasbyRuntimeConfig`** so cookie JWE and eID resource use the same **`gen`** / **`appid`** as login (required when `gen` is not global env-only).
- **`Flow.login`**, **`Flow.tokenSwap`**, **`Flow.eidResource`** — accept optional trailing **`PasbyRuntimeConfig`**; default remains env via **`pasbyConfigFromEnv()`**.
- **`encrypt` / `decrypt`** — optional explicit **`gen`** argument (defaults to env).
- README: multi-tenant setup, `state` / nested `redirect_url` guidance, server export table, **`transpilePackages`** note for monorepo / `file:` installs.
- **`CHANGELOG.md`** (this file).

### Fixed

- **Post-handshake redirect**: removed an extra **`decodeURIComponent` on the full `state` string** after the framework had already decoded the query value once. Decoding the whole string decoded `%26` inside nested `redirect_url` values into `&`, breaking the outer query string in browsers.

### Changed

- **Default `handler`** is implemented as **`createPasbyHandler`** with a fixed resolver that always uses **`pasbyConfigFromEnv()`** (backward compatible for single-tenant apps).
- **`./server` package export**: `types` field now points to **`./dist/server/index.d.ts`** (was an incorrect nested path).
- **TypeScript**: **`skipLibCheck`: true** in `tsconfig.json` to avoid upstream `next` type noise during `tsc`.

### Removed

- **`"type": "module"`** from `package.json` — emitted JS uses CommonJS-style `require` from `tsc`; marking the package as ESM broke resolution under some Next.js / Node setups. Consumers using **`transpilePackages`** remain supported.

## [1.0.6] and earlier

- Single **`handler(options, errorFallbackPath)`** API, env-only config via **`src/server/config.ts`**, **`LoginButton`** without **`tenantId`**, **`getEID(cookieStore)`** with one argument only. See git history or npm for prior release notes.

[Unreleased]: https://github.com/Finsel-DGI/pasby-nextjs/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/Finsel-DGI/pasby-nextjs/compare/v1.0.6...v1.1.0
