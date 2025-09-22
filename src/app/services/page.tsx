

import { services } from '@/lib/data';
import * as placeholderImages from '@/app/lib/placeholder-images.json';
import type { Image as ImageType } from '@/lib/types';
import { ServiceCard } from '@/components/shared/ServiceCard';


export default function ServicesPage() {
  const servicesHero = placeholderImages.servicesHero as ImageType;

  return (
    <>
      <section className="relative h-[50vh] bg-secondary flex items-center justify-center">
         <div className="absolute inset-0">
          <img
            src={servicesHero.src}
            alt="Abstract background for services"
            data-ai-hint={servicesHero.hint}
            className="object-cover opacity-20 w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        <div className="container relative mx-auto flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-heading">Our Services</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We offer a comprehensive suite of technology services designed to elevate your business, from strategic planning to custom software and cloud infrastructure.
          </p>
        </div>
      </section>

      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
