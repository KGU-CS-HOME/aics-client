import { Link } from 'next-view-transitions'

import { Button } from '@ui/components/ui/button'
import KGULogo from '~/assets/svgs/kgu_logo.svg'

function SiteHeader() {
  return (
    <header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-14 max-w-screen-2xl items-center md:h-20">
        <Link href="/" className="mr-6 flex items-center">
          <KGULogo className="mr-2 w-12 md:w-16" />
          <span className="text-sm font-extrabold md:text-base">
            팀프로젝트실 예약 시스템
          </span>
        </Link>
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
