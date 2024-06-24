import { Card, CardHeader, CardTitle } from '@repo/ui/components/ui/card'
import type { Club } from '../data/clubs'
import { AspectRatio } from '@repo/ui/components/ui/aspect-ratio'
import Image from 'next/image'
import { Link } from 'next-view-transitions'
import { SetStateAction } from 'react'

interface ClubCardProps {
  club: Club
}

function ClubCard({ club }: ClubCardProps) {
  return (
    <Card>
      <CardHeader className="flex-col gap-6">
        <div className="hidden w-full sm:block">
          <AspectRatio ratio={2 / 1}>
            <Image
              src={club.img || 'https://placehold.co/200x100'}
              alt="club-logo"
              draggable={false}
              fill
              className="rounded-md object-contain"
            />
          </AspectRatio>
        </div>

        <div className="flex w-full flex-col gap-2">
          <CardTitle className="text-xl">{club.name}</CardTitle>
          <p>{club.description}</p>
          <div className="flex w-full justify-between">
            {club.site && (
              <p>
                홈페이지 -{' '}
                <Link
                  href={club.site}
                  target="_blank"
                  className="font-medium underline underline-offset-2"
                >
                  바로가기
                </Link>
              </p>
            )}
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}

export { ClubCard }
