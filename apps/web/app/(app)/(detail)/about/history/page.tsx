import { PageHeader } from '../../../../../components/page-header'
import { Timeline, TimelineItem } from '../../../../../components/timeline'
import { HISTORIES } from '../../../../../data/history'

export default function History() {
  return (
    <>
      <PageHeader title="연혁" description="설명" />
      <Timeline>
        {HISTORIES.map((history, index) => (
          <TimelineItem
            key={history.id}
            {...history}
            position={index % 2 ? 'start' : 'end'}
          />
        ))}
      </Timeline>
    </>
  )
}
