interface Curriculum {
  id: number
  year: number
  filePath: string
}

const CURRICULUMS: Curriculum[] = [
  {
    id: 1,
    year: 2023,
    filePath: '/pdfs/curriculum-2023.pdf',
  },
  {
    id: 2,
    year: 2022,
    filePath: '/pdfs/curriculum-2022.pdf',
  },
  {
    id: 3,
    year: 2021,
    filePath: '/pdfs/curriculum-2021.pdf',
  },
  {
    id: 4,
    year: 2020,
    filePath: '/pdfs/curriculum-2020.pdf',
  },
  {
    id: 5,
    year: 2019,
    filePath: '/pdfs/curriculum-2019.pdf',
  },
  {
    id: 6,
    year: 2018,
    filePath: '/pdfs/curriculum-2018.pdf',
  },
]

export { type Curriculum, CURRICULUMS }
