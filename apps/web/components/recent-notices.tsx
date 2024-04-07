import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/ui/card'

const NOTICE_DATA = [
  {
    id: 1,
    title: '2024년 ICT 학점연계 프로젝트 인턴십 모집',
    date: '2024.03.27',
  },
  {
    id: 2,
    title: '2024-1학기 장학사정관 장학금 사업안내',
    date: '2024.03.20',
  },
  {
    id: 3,
    title:
      '[필독] 2024.08 졸업예정자 공학인증 대상 졸업사정 서류 제출 안내(~24.05.17일까지)',
    date: '2024.03.14',
  },
  {
    id: 4,
    title:
      '[SW중심대학] 2024학년도 소프트웨어중심대학 동계 백엔드개발자교육과정 수강생 모집(~02/21)',
    date: '2024.02.15',
  },
  {
    id: 5,
    title: '[SW중심대학] 시큐어 코딩 특강',
    date: '2024.01.17',
  },
  {
    id: 6,
    title: '[SW중심대학] 싱가포르 시큐어코딩 개발프로젝트 참가자 모집(~1/3)',
    date: '2023.12.29',
  },
  {
    id: 7,
    title: '[SW중심대학] 미국 CES 2024 파견 학생 선발',
    date: '2023.12.20',
  },
  {
    id: 8,
    title: '[혁신지원/국고] 2023학년도 현장실습 우수사례 공모전 개최',
    date: '2023.12.06',
  },
  {
    id: 9,
    title: '[혁신지원/국고] 2023학년도 캡스톤디자인 교내 경진대회 개최',
    date: '2023.11.20',
  },
  {
    id: 10,
    title:
      '[SW중심대학] 미국 퀄컴 연구소 인공지능 개발프로젝트 참가자 모집 (~11/22)',
    date: '2023.11.13',
  },
]

const NOTICE2_DATA = [
  {
    id: 1,
    title: '[언론] 경기대 CSTS 자격시험, 전국 수석합격자 배출',
    date: '2024.04.01',
  },
  {
    id: 2,
    title: '[언론] 경기대, 모빌리티SW 전공 신설…교과과정혁신위원회 개최',
    date: '2024.03.20',
  },
  {
    id: 3,
    title: "[언론] 경기대, '2024 AI·SW 학생봉사단 6기 발대식' 성료",
    date: '2024.03.20',
  },
  {
    id: 4,
    title:
      '[언론] 경기대, (주)우주일렉트로닉스와 기술이전 및 사업화를 위한 업무협약 체결',
    date: '2024.03.20',
  },
  {
    id: 5,
    title: '[언론] 경기대, 미국 캘리포니아대 퀄컴연구소와 협약 체결',
    date: '2024.03.20',
  },
  {
    id: 6,
    title: "[언론]경기대, 보안기업 '웁살라시큐리티'와 산학협력 MOU체결",
    date: '2024.01.30',
  },
  {
    id: 7,
    title:
      '[언론]경기대 소프트웨어 중심대학사업단 미래 선도할 지역인재 육성 만전',
    date: '2024.01.26',
  },
  {
    id: 8,
    title:
      '[언론] 경기대, 2024 신입생 디지털 전환 시대에 필수인 SW·AI 역량 강화 SW캠프 시작',
    date: '2024.01.23',
  },
  {
    id: 9,
    title: '[언론] 경기대, 시큐어코딩 연수…사이버 보안 중요성 강조',
    date: '2024.01.23',
  },
  {
    id: 10,
    title: "[언론] 경기대, 외국인 유학생들에게 'AI·SW 코딩교육'",
    date: '2024.01.23',
  },
]

function RecentNotices() {
  return (
    <section className="flex flex-col gap-8 lg:flex-row">
      <Card className="w-full lg:w-1/2">
        <CardHeader>
          <CardTitle>공지사항</CardTitle>
          <CardDescription>
            학부와 관련된 중요한 공지사항을 안내해드려요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-2">
            {NOTICE_DATA.map((notice) => (
              <li key={`notice-${notice.id}`}>
                <a href="#" className="flex justify-between gap-4">
                  <h3 className="line-clamp-1">{notice.title}</h3>
                  <p>{notice.date}</p>
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card className="w-full lg:w-1/2">
        <CardHeader>
          <CardTitle>학부소식</CardTitle>
          <CardDescription>
            관련 기사, 활동 및 수상 소식 등을 소개해요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-2">
            {NOTICE2_DATA.map((notice) => (
              <li key={`notice-${notice.id}`}>
                <a href="#" className="flex justify-between gap-4">
                  <h3 className="line-clamp-1">{notice.title}</h3>
                  <p>{notice.date}</p>
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}

export { RecentNotices }
