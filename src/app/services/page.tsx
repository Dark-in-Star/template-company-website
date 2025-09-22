

import { services, testimonials, features } from '@/lib/data';
import * as placeholderImages from '@/app/lib/placeholder-images.json';
import type { Image as ImageType } from '@/lib/types';
import { ServiceListItem } from '@/components/shared/ServiceListItem';
import { PageHero } from '@/components/shared/PageHero';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { StatsSection } from '@/components/home/StatsSection';
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection';

export default function ServicesPage() {
  const servicesHero = placeholderImages.servicesHero as ImageType;

  return (
    <>
        <PageHero
          title="Our Services"
          description="We offer a comprehensive suite of technology services designed to elevate your business, from strategic planning to custom software and cloud infrastructure."
          image={servicesHero}
          />
        <div className="relative">
            <div className="container -mt-24 pb-12">
                <StatsSection />
            </div>
        </div>
      <section className="bg-primary/5">
        <WhyChooseUsSection features={features} />
      </section>
      <section className="pt-0">
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
