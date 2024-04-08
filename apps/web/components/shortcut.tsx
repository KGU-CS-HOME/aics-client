import Link from 'next/link'

import { cn } from '@repo/ui/lib/utils'
import { Card, CardHeader, CardTitle } from '@repo/ui/components/ui/card'
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
      <Card
        className={cn(
          'hover:bg-secondary w-80 rounded-none shadow-none transition',
          className,
        )}
      >
        <CardHeader>
          <CardTitle className="py-2 text-center">{children}</CardTitle>
        </CardHeader>
      </Card>
    </Link>
  )
}

function Shortcut() {
  return (
    <Carousel opts={{ dragFree: true }} className="flex flex-col gap-2">
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
