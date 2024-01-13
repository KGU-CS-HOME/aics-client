import { PageHeader } from '@/components/page-header'

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <PageHeader>학부소개</PageHeader>
      <div className="flex flex-col justify-between px-2 pt-10 lg:flex-row">
        <div className="">메뉴</div>
        <div className="w-full max-w-screen-lg">{children}</div>
      </div>
    </>
  )
}
