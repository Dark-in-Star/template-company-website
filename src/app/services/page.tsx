
import { services, testimonials, features } from '@/lib/data';
import * as placeholderImages from '@/app/lib/placeholder-images.json';
import type { ImageType as ImageType } from '@/lib/types';
import { ServiceListItem } from '@/components/shared/ServiceListItem';
import { PageHero } from '@/components/shared/PageHero';
import { StatsSection } from '@/components/home/StatsSection';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import { ScrollAnimation } from '@/components/shared/ScrollAnimation';

const WhyChooseUsSection = dynamic(() => import('@/components/home/WhyChooseUsSection').then(mod => mod.WhyChooseUsSection), {
    loading: () => <Skeleton className="h-[400px] w-full" />,
});
const TestimonialsSection = dynamic(() => import('@/components/home/TestimonialsSection').then(mod => mod.TestimonialsSection), {
    loading: () => <Skeleton className="h-[400px] w-full" />,
});


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
            <div className="container -mt-24 pb-12 sm:mt-0 sm:pb-0 sm:pt-12">
                <ScrollAnimation>
                    <StatsSection />
                </ScrollAnimation>
            </div>
        </div>
      <ScrollAnimation>
        <section className="bg-primary/5">
            <WhyChooseUsSection features={features} />
        </section>
      </ScrollAnimation>
      <section className="pt-0">
        <div className="container mx-auto">
          <ScrollAnimation className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <ScrollAnimation key={service.slug} delay={index * 150}>
                <ServiceListItem service={service} align={index % 2 === 0 ? 'right' : 'left'} />
              </ScrollAnimation>
            ))}
          </ScrollAnimation>
        </div>
      </section>
      <ScrollAnimation>
        <TestimonialsSection testimonials={testimonials} />
      </ScrollAnimation>
    </>
  );
}
