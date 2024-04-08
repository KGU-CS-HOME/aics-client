interface Club {
  id: number
  name: string
  description: string
  site?: string
}

const clubs: Club[] = [
  {
    id: 1,
    name: 'SSF',
    description: '',
    site: 'https://www.ssf.or.kr/',
  },
  {
    id: 2,
    name: 'K.Knock',
    description: '',
    site: '',
  },
  {
    id: 3,
    name: '귀뚜라미',
    description: '',
    site: '',
  },
  {
    id: 4,
    name: 'C-Lab',
    description: '',
    site: 'https://www.clab.page/',
  },
  {
    id: 5,
    name: 'InQ',
    description: '',
    site: 'https://sites.google.com/view/inqinq',
  },
]

export { type Club, clubs }
