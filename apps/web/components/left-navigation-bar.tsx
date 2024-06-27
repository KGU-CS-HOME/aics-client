'use client'

import { usePathname } from 'next/navigation'
import { Link } from 'next-view-transitions'

import { cn } from '@aics/ui/lib/utils'
import { buttonVariants } from '@aics/ui/components/ui/button'
import { Separator } from '@aics/ui/components/ui/separator'
import { PAGES } from '../constants/pages'
import { PATHMAP, pathmapKey } from '../constants/pathmap'

function LeftNavigationBar() {
  const pathname = usePathname()

  const page = PAGES.find((page) => pathname.startsWith(page.base))

  return (
    <div className="sticky top-32 flex w-full flex-col gap-2">
      <h2 className="scroll-m-20 text-2xl font-bold tracking-tight transition-colors">
        {PATHMAP[page?.id as pathmapKey]}
      </h2>
      <Separator className="my-2" />
      {page?.subpath.map((subpath) => (
        <Link
          key={`subpath-${subpath.id}`}
          href={`${page.base}${subpath.url}`}
          className={cn(
            buttonVariants({
              variant: 'link',
              size: 'lg',
            }),
            'justify-start px-0 text-lg',
          )}
        >
          {subpath.title}
        </Link>
      ))}
    </div>
  )
}

export { LeftNavigationBar }
