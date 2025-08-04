import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { COOKIE_KEYS } from './lib/cookie';
import { privateRoutes, publicRoutes } from './utils/const';

export function middleware(request: NextRequest) {
  const token = request.cookies.get(COOKIE_KEYS.ACCESS_TOKEN);
  const { pathname } = new URL(request.url);

  const isPublic = publicRoutes.includes(pathname);
  const isPrivate = privateRoutes.includes(pathname);

  if (isPrivate && !token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (isPublic) {
    return NextResponse.next();
  }

  if (isPrivate && token) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|images|favicon-96x96.png|.well-known|favicon.ico).*)',
  ],
};
