import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { COOKIE_KEYS } from './lib/cookie';
import { ROUTES } from './lib/routes';

export function middleware(request: NextRequest) {
  const token = request.cookies.get(COOKIE_KEYS.ACCESS_TOKEN);
  const { pathname } = new URL(request.url);

  if (pathname === ROUTES.AUTHENTICATION && token) {
    return NextResponse.redirect(new URL(ROUTES.LANDING_PAGE, request.url));
  }

  if (pathname === ROUTES.PROFILE && !token) {
    return NextResponse.redirect(new URL(ROUTES.AUTHENTICATION, request.url));
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
