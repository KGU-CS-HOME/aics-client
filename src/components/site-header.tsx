'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons'
import { MainNav } from '@/components/main-nav'

export function SiteHeader() {
  const [scrolling, setScrolling] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) setScrolling(2)
      else if (window.scrollY > 80) setScrolling(1)
      else if (window.scrollY < 10) setScrolling(0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className="container sticky top-0 z-50 flex justify-center px-2">
      <div
        className={cn(
          'w-full transition-all',
          scrolling && 'px-2 pt-4 lg:px-4 lg:pt-8',
        )}
      >
        <div
          className={cn(
            'flex justify-between rounded-lg bg-white p-6 transition-all',
            scrolling && 'p-4',
            scrolling === 2 && 'shadow-xs border',
          )}
        >
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Icons.logo className="h-10 w-10" />
            <span className="font-bold">AI컴퓨터공학부</span>
          </Link>
          <nav className="flex-1">
            <MainNav />
          </nav>
        </div>
      </div>
    </header>
  )
}
