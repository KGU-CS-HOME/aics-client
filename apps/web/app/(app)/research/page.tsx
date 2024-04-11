import { PageHeader } from '../../../components/page-header'
import { LabCard } from '../../../components/lab-card'
import { labs } from '../../../data/labs'

export default function Page(): JSX.Element {
  return (
    <div className="container max-w-screen-2xl">
      <PageHeader
        title="연구실 소개"
        description="경기대학교 AI컴퓨터공학부의 연구실을 소개합니다."
      />
      <div className="grid gap-4 lg:grid-cols-2">
        {labs.map((lab) => (
          <LabCard key={`lab-${lab.id}`} lab={lab} />
        ))}
      </div>
    </div>
  )
}
