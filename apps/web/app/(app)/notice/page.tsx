import { PageHeader } from '../../../components/page-header'

export default function Page(): JSX.Element {
  return (
    <div className="container max-w-screen-2xl">
      <PageHeader
        title="공지사항"
        description="학부와 관련된 중요한 공지사항을 안내해드립니다."
      />
    </div>
  )
}
