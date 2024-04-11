import { PageHeader } from '../../../../components/page-header'

export default function Page(): JSX.Element {
  return (
    <div className="container max-w-screen-2xl">
      <PageHeader
        title="학부 소개"
        description="경기대학교 AI컴퓨터공학부를 소개합니다."
      />
    </div>
  )
}
