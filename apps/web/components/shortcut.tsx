import Link from 'next/link'

import { cn } from '@repo/ui/lib/utils'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@repo/ui/components/ui/carousel'

function ShortcutLink({
  className,
  children,
  href,
}: {
  className?: string
  children: React.ReactNode
  href: string
}) {
  return (
    <Link href={href} target="_blank">
      <div
        className={cn(
          'hover:bg-primary hover:text-primary-foreground text-muted-foreground bg-muted rounded-xl py-8 transition lg:w-80',
          className,
        )}
      >
        <h4 className="text-center font-semibold leading-none tracking-tight">
          {children}
        </h4>
      </div>
    </Link>
  )
}

function Shortcut() {
  return (
    <Carousel opts={{ dragFree: true }}>
      <CarouselContent>
        <CarouselItem className="basis-auto">
          <ShortcutLink href="https://www.kyonggi.ac.kr/" className="">
            경기대학교
          </ShortcutLink>
        </CarouselItem>
        <CarouselItem className="basis-auto">
          <ShortcutLink href="https://library.kyonggi.ac.kr/" className="">
            경기대학교 도서관
          </ShortcutLink>
        </CarouselItem>
        <CarouselItem className="basis-auto">
          <ShortcutLink
            href="https://kutis.kyonggi.ac.kr/webkutis/"
            className=""
          >
            경기대학교 KUTIS
          </ShortcutLink>
        </CarouselItem>
        <CarouselItem className="basis-auto">
          <ShortcutLink href="https://lms.kyonggi.ac.kr/" className="">
            경기대학교 LMS
          </ShortcutLink>
        </CarouselItem>
        <CarouselItem className="basis-auto">
          <ShortcutLink href="https://swuniv.kyonggi.ac.kr/" className="">
            경기대학교 SW중심대학
          </ShortcutLink>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}

export { Shortcut }
