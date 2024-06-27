import { PageHeader } from '~/components/page-header'
import { ProfessorCard } from '~/components/professor-card'
import { PROFESSORS } from '~/constants/professors'

export default function Page(): JSX.Element {
  return (
    <>
      <PageHeader
        title="교수진 소개"
        description="경기대학교 AI컴퓨터공학부의 교수진을 소개해요."
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {PROFESSORS.map((professor) => (
          <ProfessorCard
            key={`professor-${professor.id}`}
            professor={professor}
          />
        ))}
      </div>
    </>
  )
}
