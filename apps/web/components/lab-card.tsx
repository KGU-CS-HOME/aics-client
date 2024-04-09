import Link from 'next/link'
import Image from 'next/image'

import { AspectRatio } from '@repo/ui/components/ui/aspect-ratio'
import { Card, CardHeader, CardTitle } from '@repo/ui/components/ui/card'
import type { Lab } from '../data/labs'

function LabCard({ lab }: { lab: Lab }) {
  return (
    <Card>
      <CardHeader className="flex-row items-center gap-6">
        <div className="hidden w-32 sm:block">
          <AspectRatio ratio={1 / 1}>
            <Image
              src={lab.img}
              alt="lab-logo"
              draggable={false}
              fill
              className="rounded-md object-contain"
            />
          </AspectRatio>
        </div>
        <div className="flex w-full flex-col gap-2">
          <CardTitle className="mb-2">{lab.name}</CardTitle>
          <p>위치: {lab.location}</p>
          <p>
            홈페이지:{' '}
            <Link
              href={lab.site}
              target="_blank"
              className="font-medium underline underline-offset-2"
            >
              바로가기
            </Link>
          </p>
        </div>
      </CardHeader>
    </Card>
  )
}

export { LabCard }
