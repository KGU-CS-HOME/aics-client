'use client'

import { forwardRef } from 'react'
import type NextLink from 'next/link'
import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'

import { cn } from '@aics/ui/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@aics/ui/components/ui/navigation-menu'
import KGULogo from '../assets/svgs/kgu_logo.svg'

const ListItem = forwardRef<
  React.ElementRef<typeof NextLink>,
  React.ComponentPropsWithoutRef<typeof NextLink>
>(({ className, title, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none rounded-md px-3 py-4 leading-none no-underline outline-none transition-colors',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'

function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center">
        <KGULogo className="mr-2 w-16" />
        <span className="font-extrabold">AI컴퓨터공학부</span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                'data-[state=open]:text-foreground/80 bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent',
                pathname.startsWith('/about')
                  ? 'text-foreground'
                  : 'text-foreground/60',
              )}
            >
              소개
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-4">
                  <NavigationMenuLink asChild>
                    <Link
                      className="from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
                      href="/about/dept"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        학부 소개
                      </div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        경기대학교 AI컴퓨터공학부를 소개해요.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/about/curriculum" title="교육과정" />
                <ListItem href="/about/history" title="연혁" />
                <ListItem href="/about/contact" title="찾아오시는 길" />
                <ListItem href="/about/club" title="동아리" />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                'data-[state=open]:text-foreground/80 bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent',
                pathname.startsWith('/member')
                  ? 'text-foreground'
                  : 'text-foreground/60',
              )}
            >
              구성원
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-3 p-4">
                <ListItem href="/member/professor" title="교수진 소개" />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                'data-[state=open]:text-foreground/80 bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent',
                pathname.startsWith('/research')
                  ? 'text-foreground'
                  : 'text-foreground/60',
              )}
            >
              연구
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-3 p-4">
                <ListItem href="/research/lab" title="연구실 소개" />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                'data-[state=open]:text-foreground/80 bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent',
                pathname.startsWith('/board')
                  ? 'text-foreground'
                  : 'text-foreground/60',
              )}
            >
              게시판
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem href="/board/notice" title="공지 사항" />
                <ListItem href="/board/news" title="학부 소식" />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-foreground/60 data-[state=open]:text-foreground/80 bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
              서비스
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem href="/" title="팀프로젝트실 예약" />
                <ListItem href="/" title="졸업논문 신청" />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export { MainNav }
