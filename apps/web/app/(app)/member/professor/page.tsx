import { PageHeader } from '../../../../components/page-header'
import { ProfessorCard } from '../../../../components/professor-card'
import { professors } from '../../../../data/professors'

export default function Page(): JSX.Element {
  return (
    <div className="container max-w-screen-2xl">
      <PageHeader
        title="교수진 소개"
        description="경기대학교 AI컴퓨터공학부의 교수진을 소개합니다."
      />
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
