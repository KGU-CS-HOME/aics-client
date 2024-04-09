import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@repo/ui/components/ui/breadcrumb'
import { labs } from '../../../data/labs'
import { LabCard } from '../../../components/lab-card'

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
              <BreadcrumbPage>연구</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex flex-col">
          <h2 className="scroll-m-20 pb-2 text-3xl font-bold tracking-tight">
            연구실 소개
          </h2>
          <p className="text-muted-foreground">
            경기대학교 AI컴퓨터공학부의 연구실을 소개합니다.
          </p>
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {labs.map((lab) => (
          <LabCard key={`lab-${lab.id}`} lab={lab} />
        ))}
      </div>
    </div>
  )
}
