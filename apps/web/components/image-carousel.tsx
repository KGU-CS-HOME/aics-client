'use client'

import Autoplay from 'embla-carousel-autoplay'

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
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="bg-primary/50 aspect-video rounded-xl p-1">
              {index + 1}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-primary text-primary-foreground left-4 border-none shadow-none" />
      <CarouselNext className="bg-primary text-primary-foreground right-4 border-none shadow-none" />
    </Carousel>
  )
}

export { ImageCarousel }
