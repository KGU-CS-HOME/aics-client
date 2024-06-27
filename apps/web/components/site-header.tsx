import { Link } from 'next-view-transitions'

import { Button } from '@aics/ui/components/ui/button'
import { MainNav } from '~/components/main-nav'
import { MobileNav } from '~/components/mobile-nav'

function SiteHeader() {
  return (
    <header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-14 max-w-screen-2xl items-center md:h-20">
        <MainNav />
        <MobileNav />
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
