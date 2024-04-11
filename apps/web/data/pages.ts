interface Subpath {
  id: string
  title: string
  url: string
}

interface Page {
  id: string
  base: string
  subpath: Subpath[]
}

const pages: Page[] = [
  {
    id: 'about',
    base: '/about',
    subpath: [
      {
        id: 'dept',
        title: '학부 소개',
        url: '/dept',
      },
      {
        id: 'club',
        title: '동아리',
        url: '/club',
      },
      {
        id: 'curriculum',
        title: '교육 과정',
        url: '/curriculum',
      },
      {
        id: 'history',
        title: '연혁',
        url: '/history',
      },
    ],
  },
  {
    id: 'professor',
    base: '/professor',
    subpath: [
      {
        id: 'professor',
        title: '교수진 소개',
        url: '/',
      },
    ],
  },
  {
    id: 'research',
    base: '/research',
    subpath: [
      {
        id: 'research',
        title: '연구실 소개',
        url: '/',
      },
    ],
  },
  {
    id: 'board',
    base: '/board',
    subpath: [
      {
        id: 'notice',
        title: '공지사항',
        url: '/',
      },
      {
        id: 'news',
        title: '학부 소식',
        url: '/news',
      },
    ],
  },
]

export { type Page, type Subpath, pages }
