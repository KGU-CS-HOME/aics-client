import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@repo/ui/components/ui/breadcrumb'
import { ProfessorCard } from '../../../components/professor-card'
import { professors } from '../../../data/professors'

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
              <BreadcrumbPage>구성원</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex flex-col">
          <h2 className="scroll-m-20 pb-2 text-3xl font-bold tracking-tight">
            교수진 소개
          </h2>
          <p className="text-muted-foreground">
            경기대학교 AI컴퓨터공학부의 교수진을 소개합니다.
          </p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {professors.map((professor) => (
          <ProfessorCard
            key={`professor-${professor.id}`}
            professor={professor}
          />
        ))}
      </div>
    </div>
  )
}
