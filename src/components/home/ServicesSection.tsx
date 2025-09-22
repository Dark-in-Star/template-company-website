

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Service } from '@/lib/types';
import { ServiceCard } from '@/components/shared/ServiceCard';

export function ServicesSection({ services }: { services: Service[] }) {

  return (
    <section className="bg-primary/5">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-heading">Our Services</h2>
          <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground md:text-lg">
            We provide a wide range of technology solutions to power your success.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="mt-12 text-center">
            <Link href="/services">
                <Button size="lg">View All Services</Button>
            </Link>
        </div>
      </div>
    </section>
  );
}
