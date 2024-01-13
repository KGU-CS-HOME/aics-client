import { PageHeader } from '@/components/page-header'
import { MenuItem, SideMenu } from '@/components/side-menu'

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <PageHeader>학부소개</PageHeader>
      <div className="flex flex-col justify-between gap-12 px-2 pt-10 lg:flex-row lg:items-start">
        <SideMenu>
          <MenuItem href="/about">AI컴퓨터공학부</MenuItem>
          <MenuItem href="/about/cs">컴퓨터공학전공</MenuItem>
          <MenuItem href="/about/ai">인공지능전공</MenuItem>
          <MenuItem href="/about/sw">SW안전보안전공</MenuItem>
        </SideMenu>
        <div className="w-full p-4">{children}</div>
      </div>
    </>
  )
}
