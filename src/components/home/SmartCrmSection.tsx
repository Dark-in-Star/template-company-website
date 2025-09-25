
'use client';

import * as React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { SmartCrmSlide } from '@/lib/types';
import { cn } from '@/lib/utils';
import Autoplay from "embla-carousel-autoplay";

interface SmartCrmSectionProps {
  slides: SmartCrmSlide[];
}

export function SmartCrmSection({ slides }: SmartCrmSectionProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const scrollTo = React.useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);

  return (
    <section className="bg-primary/5 pt-0 pb-12 md:pb-24 lg:pb-32 -mt-16">
      <div className="container mx-auto">
        <Carousel 
            setApi={setApi} 
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="w-full"
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                  <div className="space-y-4 text-center md:text-left">
                    <h2 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl">{slide.title}</h2>
                    <p className="max-w-md text-lg text-muted-foreground mx-auto md:mx-0">{slide.description}</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src={slide.image.src}
                      alt={slide.title}
                      data-ai-hint={slide.image.hint}
                      width={slide.image.width}
                      height={slide.image.height}
                      className="w-full max-w-lg"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex items-center justify-center gap-4">
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-12 w-12"
                    onClick={scrollPrev}
                >
                    <ChevronLeft className="h-6 w-6" />
                    <span className="sr-only">Previous slide</span>
                </Button>
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={cn(
                        'h-2 w-2 rounded-full transition-all',
                        current === index ? 'w-4 bg-primary' : 'bg-muted-foreground/50'
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                    ))}
                </div>
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-12 w-12"
                    onClick={scrollNext}
                >
                    <ChevronRight className="h-6 w-6" />
                    <span className="sr-only">Next slide</span>
                </Button>
            </div>
        </Carousel>
      </div>
    </section>
  );
}
