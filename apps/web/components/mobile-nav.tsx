'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { LinkProps } from 'next/link'
import { Link } from 'next-view-transitions'
import { TextAlignJustifyIcon } from '@radix-ui/react-icons'

import { cn } from '@repo/ui/lib/utils'
import { Button } from '@repo/ui/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@repo/ui/components/ui/sheet'
import { ScrollArea } from '@repo/ui/components/ui/scroll-area'
import KGULogo from '../assets/svgs/kgu_logo.svg'

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: {
  href: string
  onOpenChange?: React.Dispatch<React.SetStateAction<boolean>>
  className?: string
  children?: React.ReactNode
  props?: LinkProps
}) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}

function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <TextAlignJustifyIcon className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          <KGULogo className="mr-2 w-16" />
          <span className="font-extrabold">AI컴퓨터공학부</span>
        </MobileLink>
        <ScrollArea className="mt-8 h-[calc(100vh-8rem)]">
          <div className="flex flex-col space-y-2">
            <div className="flex flex-col space-y-3">
              <h4 className="font-medium">소개</h4>
              <MobileLink
                href="/about/dept"
                onOpenChange={setOpen}
                className="text-muted-foreground"
              >
                학부 소개
              </MobileLink>
              <MobileLink
                href="/about/curriculum"
                onOpenChange={setOpen}
                className="text-muted-foreground"
              >
                교육과정
              </MobileLink>
              <MobileLink
                href="/about/history"
                onOpenChange={setOpen}
                className="text-muted-foreground"
              >
                연혁
              </MobileLink>
              <MobileLink
                href="/about/contact"
                onOpenChange={setOpen}
                className="text-muted-foreground"
              >
                찾아오시는 길
              </MobileLink>
              <MobileLink
                href="/about/club"
                onOpenChange={setOpen}
                className="text-muted-foreground"
              >
                동아리
              </MobileLink>
            </div>
            <div className="flex flex-col space-y-3 pt-6">
              <h4 className="font-medium">구성원</h4>
              <MobileLink
                href="/member/professor"
                onOpenChange={setOpen}
                className="text-muted-foreground"
              >
                교수진 소개
              </MobileLink>
            </div>
            <div className="flex flex-col space-y-3 pt-6">
              <h4 className="font-medium">연구</h4>
              <MobileLink
                href="/research/lab"
                onOpenChange={setOpen}
                className="text-muted-foreground"
              >
                연구실 소개
              </MobileLink>
            </div>
            <div className="flex flex-col space-y-3 pt-6">
              <h4 className="font-medium">게시판</h4>
              <MobileLink
                href="/board/notice"
                onOpenChange={setOpen}
                className="text-muted-foreground"
              >
                공지 사항
              </MobileLink>
              <MobileLink
                href="/board/news"
                onOpenChange={setOpen}
                className="text-muted-foreground"
              >
                학부 소식
              </MobileLink>
            </div>
            <div className="flex flex-col space-y-3 pt-6">
              <h4 className="font-medium">서비스</h4>
              <MobileLink
                href="/"
                onOpenChange={setOpen}
                className="text-muted-foreground"
              >
                졸업논문 신청
              </MobileLink>
              <MobileLink
                href="/"
                onOpenChange={setOpen}
                className="text-muted-foreground"
              >
                팀프로젝트실 예약
              </MobileLink>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

export { MobileNav }
