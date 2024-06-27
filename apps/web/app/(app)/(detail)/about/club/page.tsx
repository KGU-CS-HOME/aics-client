import { ClubCard } from '~/components/club-card'
import { PageHeader } from '~/components/page-header'
import { CLUBS } from '~/constants/clubs'

export default function Page(): JSX.Element {
  return (
    <>
      <PageHeader
        title="동아리 소개"
        description="경기대학교 AI컴퓨터공학부의 연구실을 소개해요."
      />
      <div className="grid gap-4 xl:grid-cols-2">
        {CLUBS.map((club) => (
          <ClubCard key={`club-${club.id}`} club={club} />
        ))}
      </div>
    </>
  )
}
