
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

function SlideDescription({ text }: { text: string }) {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const [isLongText, setIsLongText] = React.useState(false);
    const pRef = React.useRef<HTMLParagraphElement>(null);

    React.useEffect(() => {
      if (pRef.current) {
        // Check if the text is long enough to be clamped (i.e., it's taller than two lines)
        if (pRef.current.scrollHeight > pRef.current.clientHeight) {
          setIsLongText(true);
        }
      }
    }, [text]);

    return (
        <div>
            <p ref={pRef} className={cn("max-w-md text-lg text-muted-foreground mx-auto md:mx-0", !isExpanded && "line-clamp-2")}>
                {text}
            </p>
            {isLongText && (
                <Button variant="link" size="sm" className="p-0 h-auto" onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ? 'Read Less' : 'Read More'}
                </Button>
            )}
        </div>
    )
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
    <section className="bg-primary/5 pt-12 md:pt-24 lg:pt-32 -mt-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl">The Procellence Customer Platform</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Connected data and tools make it easier to know, do, and connect everything across your business.
            </p>
        </div>
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
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
                  <div className="space-y-4 text-center md:text-left order-2 md:order-1">
                    <h3 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl">{slide.title}</h3>
                    <SlideDescription text={slide.description} />
                  </div>
                  <div className="flex items-center justify-center order-1 md:order-2">
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
          <div className="mt-2 flex items-center justify-center gap-4">
                <Button
                    variant="outline"
                    size="icon"
                    className="h-12 w-12 rounded-full transition-transform duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:border-primary"
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
                    className="h-12 w-12 rounded-full transition-transform duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:border-primary"
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
