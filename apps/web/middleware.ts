import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/about') {
    return NextResponse.redirect(new URL('/about/dept', request.url))
  }

  if (request.nextUrl.pathname === '/board') {
    return NextResponse.redirect(new URL('/board/notice', request.url))
  }
}

export const config = {
  matcher: ['/about', '/board/:path*'],
}
