import { Card, CardHeader, CardTitle } from '@repo/ui/components/ui/card'
import type { Club } from '../data/clubs'
import { AspectRatio } from '@repo/ui/components/ui/aspect-ratio'
import Image from 'next/image'
import { Link } from 'next-view-transitions'

function ClubCard({ club }: { club: Club }) {
  return (
    <Card>
      <CardHeader className="flex-row items-center gap-6">
        <div className="hidden w-32 sm:block">
          <AspectRatio ratio={1 / 1}>
            <Image
              src={club.img || 'https://placehold.co/128'}
              alt="club-logo"
              draggable={false}
              fill
              className="rounded-md object-contain"
            />
          </AspectRatio>
        </div>
        <div className="flex w-full flex-col gap-2">
          <CardTitle className="mb-2">{club.name}</CardTitle>
          <p>{club.description}</p>

          <p>
            홈페이지 -{' '}
            {club.site ? (
              <Link
                href={club.site ? club.site : ''}
                target="_blank"
                className="font-medium underline underline-offset-2"
              >
                바로가기
              </Link>
            ) : (
              <span>아직 준비 중이에요.</span>
            )}
          </p>
        </div>
      </CardHeader>
    </Card>
  )
}

export { ClubCard }
