import { CurriculumViewer } from '../../../../../components/curriculum-viewer'
import { PageHeader } from '../../../../../components/page-header'

export default function Curriculum(): JSX.Element {
  return (
    <>
      <PageHeader title="교육과정" description="설명" />
      <CurriculumViewer />
    </>
  )
}
