
import Image from 'next/image';
import { testimonials } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function TestimonialsSection() {
  return (
    <section className="bg-primary/5">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Clients Say</h2>
          <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground md:text-lg">
            We are proud to have partnered with amazing businesses. Here's what they think about us.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="mx-auto w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                <div className="p-4 h-full">
                  <Card className="h-full">
                    <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                      <Image
                        src={testimonial.image.src}
                        alt={testimonial.name}
                        data-ai-hint={testimonial.image.hint}
                        width={testimonial.image.width}
                        height={testimonial.image.height}
                        className="mb-4 h-20 w-20 rounded-full object-cover"
                      />
                      <p className="flex-1 font-serif text-lg italic text-foreground">
                        "{testimonial.comment}"
                      </p>
                      <div className="mt-4">
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:inline-flex" />
          <CarouselNext className="hidden sm:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
}
