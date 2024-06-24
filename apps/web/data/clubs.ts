interface Club {
  id: number
  img?: string
  name: string
  description: string
  site?: string
}

const CLUBS: Club[] = [
  {
    id: 1,
    name: 'SSF',
    description: '웹 개발 동아리 SSF입니다.',
    site: 'https://www.ssf.or.kr/',
  },
  {
    id: 2,
    name: 'K.Knock',
    description: '경기대학교 정보보안 동아리 K.Knock입니다.',
    site: '',
  },
  {
    id: 3,
    name: '귀뚜라미',
    description: '어쿠스틱 밴드 동아리 귀뚜라미입니다.',
    site: '',
  },
  {
    id: 4,
    name: 'C-Lab',
    description: '정보보안 학술 동아리 C-Lab입니다.',
    site: 'https://www.clab.page/',
  },
  {
    id: 5,
    name: 'InQ',
    description: '개발자 플랫폼 동아리 InQ입니다.',
    site: 'https://sites.google.com/view/inqinq',
  },
  {
    id: 6,
    name: '엑센트',
    description: '컴퓨터공학부 응원 동아리 엑센트입니다.',
    site: 'http://cafe.daum.net/Accent',
  },
]

export { type Club, CLUBS }
