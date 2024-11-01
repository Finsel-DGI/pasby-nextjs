# @finsel-dgi/pasby-next

A Next.js package for seamless integration with [pasby eID authentication](https://www.pasby.africa). This package provides both server and client-side utilities to implement pasby's OAuth-based electronic identification in your Next.js applications.

[![npm version](https://img.shields.io/npm/v/@finsel-dgi/pasby-next.svg)](https://www.npmjs.com/package/@finsel-dgi/pasby-next)
<!-- [![License](https://img.shields.io/npm/l/@finsel-dgi/pasby-next.svg)](https://github.com/Finsel-DGI/pasby-nextjs/blob/main/LICENSE) -->

## Features

- 🔐 Secure OAuth-based authentication
- 📱 Cross-device authentication support
- 🎨 Customizable UI components
- 🔄 Automatic session management
- 📦 Type-safe API

## Installation

```bash
npm install @finsel-dgi/pasby-next
# or
yarn add @finsel-dgi/pasby-next
# or
pnpm add @finsel-dgi/pasby-next
```

## Requirements

- Next.js 13.4 or higher
- React 18 or higher
- Node.js 16 or higher

## Environment Setup

Create a `.env.local` file in your project root and add the following variables:

```env
PASBY_CLIENT_SECRET=<App secret>
PASBY_CONSUMER_KEY=<organisations api key>
PASBY_CLIENT_ID=<App id>
PASBY_LOGIN_REDIRECT=<fallback path after authentication e.g /dashboard>
SECRET_GEN=<generated random 16 string>
```

## Quick Start

### 1. Setup API Route

Create a new API route at `app/api/eid/[auth]/route.ts`:

```typescript
import { handler } from "@finsel-dgi/pasby-next/server";
import { cookies } from "next/headers";

export const GET = handler({
  claims: ["naming.given", "naming.family", "contact.email"], // Add required claims
  action: 'signup', // login | signup | link
  payload: "User registration request" // describe action intent
}, (key, value, exp) => {
  cookies().set(key, value, { 
    secure: true, 
    sameSite: true, 
    maxAge: (exp) 
  });
}, async (key) => {
  return cookies().get(key)?.value;
});
```

### 2. Add Authentication Button

In your client component:

```tsx
"use client"

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

Available button variants:
- `original` - Red background with white text
- `dark` - Dark background with white text
- `light` - White background with red text
- `darktext` - White background with black text

### 3. Access User Data

In your server component:

```typescript
import { getEID } from "@finsel-dgi/pasby-next/server";
import { cookies } from "next/headers";

export async function UserProfile() {
  const cookieStore = cookies();
  const eid = await getEID(cookieStore);

  if (!eid) {
    return <div>Not authenticated</div>;
  }

  return (
    <div>
      <h1>Welcome, {eid.claims.contact.email}</h1>
      {/* Access other user data as needed */}
    </div>
  );
}
```

## User Data Structure

The `getEID` function returns a user object with the following structure:

```typescript
interface User {
  national: string;
  country: string;
  claims: {
    contact: {
      email: string;
      phone: string;
      emailVerified: boolean;
      phoneVerified: boolean;
    };
    address: {
      country: string;
      city: string;
      countryCode: string;
      formatted: string;
      postCode: string;
      place: string;
    };
    bio: {
      birthdate: string;
      gender: string;
      birthplace: string;
      birthnumber: number;
      maritalStatus: string;
      age: number;
    };
    nationality: {
      pep: boolean;
      nationalities: string[];
      residence: string;
      primary: string;
    };
  };
}
```

## Documentation

For detailed documentation and advanced usage, visit:
- [pasby Documentation](https://docs.pasby.africa)
- [Button Customization](https://docs.pasby.africa/buttons)

## License

MIT © [Finsel DGI]()