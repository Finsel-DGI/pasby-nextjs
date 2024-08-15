import { NextRequest, NextResponse } from 'next/server';
import { getCookie } from 'cookies-next';

export function withAuth(req: NextRequest) {
  const token = getCookie('access_token', { req });

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}
