import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

function SideMenu({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full rounded-md border lg:sticky lg:top-32 lg:max-w-80">
      <div className="p-4">
        <h4 className="pl-2 text-center text-2xl font-medium leading-none lg:text-start">
          메뉴
        </h4>
        <Separator className="my-4" />
        <div className="flex flex-col">{children}</div>
      </div>
    </div>
  )
}

function MenuItem({
  children,
  href,
}: React.PropsWithChildren<{ href: string }>) {
  return (
    <Button
      variant="ghost"
      asChild
      className="text-md px-4 lg:justify-start"
      size="lg"
    >
      <Link href={href}>{children}</Link>
    </Button>
  )
}

export { SideMenu, MenuItem }
