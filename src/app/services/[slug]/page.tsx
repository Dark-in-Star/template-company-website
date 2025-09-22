
import { services, testimonials } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { ContactForm } from '@/components/shared/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }: { params: { slug:string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="bg-primary/5">
        <div className="container mx-auto py-16 text-center">
          <h1 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl">{service.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{service.shortDescription}</p>
        </div>
      </section>

      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="space-y-8 lg:col-span-2">
              <Card>
                <CardContent className="p-0">
                  <Image
                    src={service.image.src}
                    alt={service.title}
                    data-ai-hint={service.image.hint}
                    width={service.image.width * 1.5}
                    height={service.image.height * 1.5}
                    className="w-full rounded-lg object-cover"
                  />
                </CardContent>
              </Card>

              <div>
                <h2 className="font-heading text-2xl font-bold">About this Service</h2>
                <p className="mt-4 text-muted-foreground">{service.longDescription}</p>
              </div>

              {service.projects && service.projects.length > 0 && (
                <div>
                  <h2 className="font-heading text-2xl font-bold">Sample Project</h2>
                  {service.projects.map((project, index) => (
                    <Card key={index} className="mt-4 overflow-hidden">
                      <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="md:col-span-1">
                          <Image
                            src={project.image.src}
                            alt={project.title}
                            data-ai-hint={project.image.hint}
                            width={project.image.width}
                            height={project.image.height}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground">{project.description}</p>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}

              <div>
                <h2 className="font-heading text-2xl font-bold">Industry Experience</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.industries.map((industry) => (
                    <Badge key={industry} variant="secondary" className="text-base">
                      {industry}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <aside className="lg:col-span-1">
                <div className="sticky top-24">
                    <ContactForm />
                </div>
            </aside>
          </div>
        </div>
      </section>

      <TestimonialsSection testimonials={testimonials} />
    </>
  );
}
