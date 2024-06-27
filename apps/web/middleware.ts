import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/about') {
    return NextResponse.redirect(new URL('/about/dept', request.url))
  }

  if (request.nextUrl.pathname === '/member') {
    return NextResponse.redirect(new URL('/member/professor', request.url))
  }

  if (request.nextUrl.pathname === '/research') {
    return NextResponse.redirect(new URL('/research/lab', request.url))
  }

  if (request.nextUrl.pathname === '/board') {
    return NextResponse.redirect(new URL('/board/notice', request.url))
  }
}

export const config = {
  matcher: ['/about', '/member', '/research', '/board/:path*'],
}
