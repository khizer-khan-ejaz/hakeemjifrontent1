import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {


  console.log("inside the middleware file")

  const adminCookie = request.cookies.get('access-token')?.value
  const { pathname } = request.nextUrl

  // Allow access to /admin/login and /admin/register without restriction
  if (pathname.startsWith('/admin/login') || pathname.startsWith('/admin/register')) {
    return NextResponse.next()
  }

  // Restrict access to all other /admin/* routes if the "admin" cookie is missing

  if (!adminCookie) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*', // Matches all /admin routes
}
