
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function ServicesSection() {
  const featuredServices = services.slice(0, 4);

  return (
    <section className="bg-primary/5">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Services</h2>
          <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground md:text-lg">
            We provide a wide range of technology solutions to power your success.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service) => (
            <Card key={service.slug} className="group flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
              <CardHeader className="p-0">
                <Image
                  src={service.image.src}
                  alt={service.title}
                  data-ai-hint={service.image.hint}
                  width={service.image.width}
                  height={service.image.height}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </CardHeader>
              <CardContent className="flex flex-1 flex-col p-6">
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="mt-2 flex-1">{service.shortDescription}</CardDescription>
                <Link href={`/services/${service.slug}`} className="mt-4">
                  <Button variant="link" className="p-0">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
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
