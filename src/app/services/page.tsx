

import { services } from '@/lib/data';
import * as placeholderImages from '@/app/lib/placeholder-images.json';
import type { Image as ImageType } from '@/lib/types';
import { ServiceListItem } from '@/components/shared/ServiceListItem';
import { PageHero } from '@/components/shared/PageHero';
import { StatsSection } from '@/components/home/StatsSection';


export default function ServicesPage() {
  const servicesHero = placeholderImages.servicesHero as ImageType;

  return (
    <>
      <div className="relative">
        <PageHero
          title="Our Services"
          description="We offer a comprehensive suite of technology services designed to elevate your business, from strategic planning to custom software and cloud infrastructure."
          image={servicesHero}
          />
        <div className="relative">
            <div className="container pb-12 lg:-mt-24">
                <StatsSection />
            </div>
        </div>
      </div>

      <section className="pt-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <ServiceListItem key={service.slug} service={service} align={index % 2 === 0 ? 'left' : 'right'} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
