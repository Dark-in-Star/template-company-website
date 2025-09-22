

import { services } from '@/lib/data';
import * as placeholderImages from '@/app/lib/placeholder-images.json';
import type { Image as ImageType } from '@/lib/types';
import { ServiceCard } from '@/components/shared/ServiceCard';
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
            <div className="container -mt-24 pb-12">
                <StatsSection />
            </div>
        </div>
      </div>

      <section className="pt-0">
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
