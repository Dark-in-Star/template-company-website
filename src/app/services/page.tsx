

import { services, testimonials } from '@/lib/data';
import * as placeholderImages from '@/app/lib/placeholder-images.json';
import type { Image as ImageType } from '@/lib/types';
import { ServiceListItem } from '@/components/shared/ServiceListItem';
import { PageHero } from '@/components/shared/PageHero';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';

export default function ServicesPage() {
  const servicesHero = placeholderImages.servicesHero as ImageType;

  return (
    <>
        <PageHero
          title="Our Services"
          description="We offer a comprehensive suite of technology services designed to elevate your business, from strategic planning to custom software and cloud infrastructure."
          image={servicesHero}
          />

      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <ServiceListItem key={service.slug} service={service} align={index % 2 === 0 ? 'right' : 'left'} />
            ))}
          </div>
        </div>
      </section>
      <TestimonialsSection testimonials={testimonials} />
    </>
  );
}
