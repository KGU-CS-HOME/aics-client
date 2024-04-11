'use client'

import Link from 'next/link'
import { Fragment } from 'react'
import { usePathname } from 'next/navigation'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@repo/ui/components/ui/breadcrumb'

const PATH_MAP = {
  about: '소개',
  dept: '학부 소개',
  club: '동아리',
  curriculum: '교육과정',
  history: '연혁',
  member: '구성원',
  professor: '교수진 소개',
  research: '연구',
  lab: '연구실 소개',
  board: '게시판',
  notice: '공지사항',
  news: '학부 소식',
}

function PageHeader({
  title,
  description,
}: {
  title: string
  description: string
}) {
  const pathname = usePathname()

  const paths = pathname.split('/').filter((path) => path !== '')

  return (
    <div className="mb-6 flex flex-col gap-8 py-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">홈</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {paths.map((path, index) =>
            index === paths.length - 1 ? (
              <BreadcrumbItem>
                <BreadcrumbPage>
                  {PATH_MAP[path as keyof typeof PATH_MAP]}
                </BreadcrumbPage>
              </BreadcrumbItem>
            ) : (
              <Fragment key={`subpath-${index}`}>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href={`/${paths.slice(0, index + 1).join('/')}`}>
                      {PATH_MAP[path as keyof typeof PATH_MAP]}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </Fragment>
            ),
          )}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col">
        <h2 className="scroll-m-20 pb-2 text-3xl font-bold tracking-tight">
          {title}
        </h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

export { PageHeader }
