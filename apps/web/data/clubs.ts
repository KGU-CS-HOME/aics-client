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
    description: '컴퓨터공학부 동아리 SSF입니다.',
    site: 'https://www.ssf.or.kr/',
  },
  {
    id: 2,
    name: 'K.Knock',
    description: '보안동아리 K.Knock입니다.',
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
    description: '보안동아리 C-Lab입니다.',
    site: 'https://www.clab.page/',
  },
  {
    id: 5,
    name: 'InQ',
    description: '컴퓨터공학부 동아리 InQ입니다.',
    site: 'https://sites.google.com/view/inqinq',
  },
]

export { type Club, CLUBS }
