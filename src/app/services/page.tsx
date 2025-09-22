import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ExpandableText } from '@/components/shared/ExpandableText';

export default function ServicesPage() {
  return (
    <>
      <section className="relative h-[50vh] bg-secondary flex items-center justify-center">
         <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/seed/services-hero/1920/400"
            alt="Abstract background for services"
            data-ai-hint="technology blueprint"
            fill
            className="object-cover opacity-20"
            priority
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
              <Card key={service.slug} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                <CardHeader className="p-0">
                  <Image
                    src={service.image.src}
                    alt={service.title}
                    data-ai-hint={service.image.hint}
                    width={service.image.width}
                    height={service.image.height}
                    className="h-56 w-full object-cover"
                  />
                </CardHeader>
                <CardContent className="flex flex-1 flex-col p-6">
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <ExpandableText text={service.shortDescription} maxLength={100} />
                  <div className="mt-auto pt-4">
                    <Link href={`/services/${service.slug}`} className="mt-4">
                        <Button variant="outline" className="w-full">
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
