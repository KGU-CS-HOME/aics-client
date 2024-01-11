import Image from 'next/image'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Card } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

export default function Home() {
  return (
    <>
      <Carousel className="w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card>
                <AspectRatio ratio={16 / 9} className="bg-muted">
                  <Image
                    className="rounded-md object-cover"
                    src={`https://picsum.photos/id/${index}/3200/1800?grayscale`}
                    alt="image"
                    fill
                  />
                </AspectRatio>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  )
}
