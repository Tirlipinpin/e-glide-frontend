import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const cookieName = 'lng'
const fallbackLng = 'en'

const languages = ['en', 'fr']

// This function can be marked `async` if using `await` inside
export function middleware (request: NextRequest) {
  let lng
  if (request.cookies.has(cookieName)) {
    lng = request.cookies.get(cookieName)?.value
  }
  if (!lng) {
    lng = fallbackLng
  }

  // Redirect if lng in path is not supported
  if (
    !languages.some(loc => request.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !request.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(new URL(`/${lng}${request.nextUrl.pathname}${request.nextUrl.search}`, request.url))
  }

  if (request.headers.has('referer')) {
    const refererUrl = new URL(request.headers.get('referer')!)
    const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
    const response = NextResponse.next()
    if (lngInReferer) {
      response.cookies.set(cookieName, lngInReferer)
    }
    return response
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/((?!api|_next/static|.*\\..*|_next/image|assets|favicon.ico|sw.js).*)']
}
