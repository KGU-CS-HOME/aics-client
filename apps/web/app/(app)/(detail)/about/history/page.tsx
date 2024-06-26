import { PageHeader } from '../../../../../components/page-header'
import { Timeline, TimelineItem } from '../../../../../components/timeline'

export default function History() {
  return (
    <>
      <PageHeader title="연혁" description="설명" />
      <Timeline>
        <TimelineItem
          year={1979}
          title="9월 22일"
          description="경기대학교 수원본교에 전자계산학과 40명 신설"
          position="start"
        />
        <TimelineItem
          year={1983}
          title="9월 8일"
          description="전자계산학과 30명 증원(총 70명)"
        />
        <TimelineItem
          year={1991}
          title="10월 22일"
          description="경기대학교 수원본교에 전자계산학과 야간 신설"
          position="start"
        />
        <TimelineItem
          year={1992}
          title="7월 28일"
          description="대학원 석사과정에 전자계산학과 신설"
        />
        <TimelineItem
          year={1995}
          title="10월 18일"
          description="대학원 박사과정에 전자계산학과 신설"
          position="start"
        />
        <TimelineItem
          year={1997}
          title="11월 5일"
          description="대학원 박사과정에 전자계산학과 신설"
        />
        <TimelineItem
          year={2003}
          title="5월"
          description="전자계산학과에서 컴퓨터과학과로 전공 명칭 변경"
          position="start"
        />
        <TimelineItem year={2007} title="3월" description="공학인증 시작" />
        <TimelineItem
          year={2017}
          title="3월"
          description="이공대학 컴퓨터과학과로 소속 변경"
          position="start"
        />
        <TimelineItem
          year={2018}
          title="3월"
          description="융합과학대학 컴퓨터공학부로 소속 변경"
        />
        <TimelineItem
          year={2021}
          title="3월"
          description="소프트웨어경영대학 AI컴퓨터공학부로 소속 변경"
          position="start"
        />
      </Timeline>
    </>
  )
}
