'use client'

import Autoplay from 'embla-carousel-autoplay'

import { AspectRatio } from '@repo/ui/components/ui/aspect-ratio'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@repo/ui/components/ui/carousel'

function ImageCarousel() {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 6000,
          stopOnMouseEnter: true,
          stopOnInteraction: false,
        }),
      ]}
      className="w-full overflow-hidden rounded-xl"
    >
      <CarouselContent className="-ml-0">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={`carousel-image-${index}`} className="pl-0">
            <AspectRatio ratio={16 / 9}>
              <div className="bg-primary/50 flex h-full w-full items-center justify-center">
                {index + 1}
              </div>
            </AspectRatio>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-primary text-primary-foreground left-4 border-none shadow-none" />
      <CarouselNext className="bg-primary text-primary-foreground right-4 border-none shadow-none" />
    </Carousel>
  )
}

export { ImageCarousel }
