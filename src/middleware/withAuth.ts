import { NextRequest, NextResponse } from 'next/server';
import { getCookie } from 'cookies-next';
import { SESSION_KEY } from '../lib/base';

export function withAuth(req: NextRequest) {
  const token = getCookie(SESSION_KEY, { req });
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}
