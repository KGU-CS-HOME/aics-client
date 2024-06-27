import { PageHeader } from '../../../../../components/page-header'
import { LabCard } from '../../../../../components/lab-card'
import { LABS } from '../../../../../constants/labs'

export default function Page(): JSX.Element {
  return (
    <>
      <PageHeader
        title="연구실 소개"
        description="경기대학교 AI컴퓨터공학부의 연구실을 소개해요."
      />
      <div className="grid gap-4 xl:grid-cols-2">
        {LABS.map((lab) => (
          <LabCard key={`lab-${lab.id}`} lab={lab} />
        ))}
      </div>
    </>
  )
}
