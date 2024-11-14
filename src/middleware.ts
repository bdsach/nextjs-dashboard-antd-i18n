import { NextResponse } from "next/server";
import { createI18nMiddleware } from 'next-international/middleware'
import type { NextRequest } from "next/server";
 
const defaultLocale = 'en';
const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'th'],
  defaultLocale
})

export function middleware(request: NextRequest) {

  if (request.nextUrl.pathname === '/' || request.nextUrl.pathname === '/en' || request.nextUrl.pathname === '/th') {
    return NextResponse.redirect(new URL(`/${defaultLocale}/dashboard`, request.url))
  }

  return I18nMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)']
}
