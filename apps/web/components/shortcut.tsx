import { Link } from 'next-view-transitions'

import { cn } from '@repo/ui/lib/utils'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@repo/ui/components/ui/carousel'
import { buttonVariants } from '@repo/ui/components/ui/button'

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
    <Link
      href={href}
      target="_blank"
      className={cn(
        buttonVariants({ variant: 'secondary' }),
        'w-40 rounded-lg py-10 md:w-80',
      )}
    >
      <h4
        className={cn(
          'text-base font-semibold leading-none tracking-tight',
          className,
        )}
      >
        {children}
      </h4>
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
