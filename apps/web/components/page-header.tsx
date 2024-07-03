'use client'

import { Fragment } from 'react'
import { usePathname } from 'next/navigation'
import { Link } from 'next-view-transitions'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@aics/ui/components/ui/breadcrumb'
import { PATHMAP, pathmapKey } from '~/constants/pathmap'

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
    <div className="mb-12 flex flex-col gap-8">
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
              <BreadcrumbItem key={`subpath-${index}`}>
                <BreadcrumbPage>{PATHMAP[path as pathmapKey]}</BreadcrumbPage>
              </BreadcrumbItem>
            ) : (
              <Fragment key={`subpath-${index}`}>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href={`/${paths.slice(0, index + 1).join('/')}`}>
                      {PATHMAP[path as pathmapKey]}
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
