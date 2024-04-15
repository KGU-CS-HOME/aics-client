'use client'

import { usePathname } from 'next/navigation'
import { Link } from 'next-view-transitions'

import { cn } from '@repo/ui/lib/utils'
import { Button } from '@repo/ui/components/ui/button'
import KGULogo from '../assets/svgs/kgu_logo.svg'

function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-14 max-w-screen-2xl items-center md:h-20">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center">
            <KGULogo className="mr-2 w-16" />
            <span className="font-extrabold">AI컴퓨터공학부</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link
              href="/about"
              className={cn(
                'hover:text-foreground/80 transition-colors',
                pathname.startsWith('/about')
                  ? 'text-foreground'
                  : 'text-foreground/60',
              )}
            >
              소개
            </Link>
            <Link
              href="/member"
              className={cn(
                'hover:text-foreground/80 transition-colors',
                pathname.startsWith('/member')
                  ? 'text-foreground'
                  : 'text-foreground/60',
              )}
            >
              구성원
            </Link>
            <Link
              href="/research"
              className={cn(
                'hover:text-foreground/80 transition-colors',
                pathname.startsWith('/research')
                  ? 'text-foreground'
                  : 'text-foreground/60',
              )}
            >
              연구
            </Link>
            <Link
              href="/board"
              className={cn(
                'hover:text-foreground/80 transition-colors',
                pathname.startsWith('/board')
                  ? 'text-foreground'
                  : 'text-foreground/60',
              )}
            >
              게시판
            </Link>
            <Link
              href="#"
              className="text-foreground/60 hover:text-foreground/80 transition-colors"
            >
              서비스
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild>
            <Link href="/signin">로그인</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

export { SiteHeader }
