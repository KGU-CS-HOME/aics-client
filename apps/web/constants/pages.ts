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

const PAGES: Page[] = [
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
        id: 'curriculum',
        title: '교육과정',
        url: '/curriculum',
      },
      {
        id: 'history',
        title: '연혁',
        url: '/history',
      },
      {
        id: 'contact',
        title: '찾아오시는 길',
        url: '/contact',
      },
      {
        id: 'club',
        title: '동아리',
        url: '/club',
      },
    ],
  },
  {
    id: 'member',
    base: '/member',
    subpath: [
      {
        id: 'professor',
        title: '교수진 소개',
        url: '/professor',
      },
    ],
  },
  {
    id: 'research',
    base: '/research',
    subpath: [
      {
        id: 'lab',
        title: '연구실 소개',
        url: '/lab',
      },
    ],
  },
  {
    id: 'board',
    base: '/board',
    subpath: [
      {
        id: 'notice',
        title: '공지 사항',
        url: '/notice',
      },
      {
        id: 'news',
        title: '학부 소식',
        url: '/news',
      },
    ],
  },
] as const

export { type Page, type Subpath, PAGES }
