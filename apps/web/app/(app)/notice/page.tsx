import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@repo/ui/components/ui/breadcrumb'

export default function Page(): JSX.Element {
  return (
    <div className="container max-w-screen-2xl">
      <div className="mb-6 flex flex-col gap-8 py-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">홈</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>공지사항</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex flex-col">
          <h2 className="scroll-m-20 pb-2 text-3xl font-bold tracking-tight">
            공지사항
          </h2>
          <p className="text-muted-foreground">
            학부와 관련된 중요한 공지사항을 안내해드립니다.
          </p>
        </div>
      </div>
    </div>
  )
}
