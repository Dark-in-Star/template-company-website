
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { features } from '@/lib/data';
import * as LucideIcons from 'lucide-react';

export function WhyChooseUsSection() {
  return (
    <section className="bg-background">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose Us?</h2>
          <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground md:text-lg">
            We are more than just a vendor; we are your strategic partner in innovation and growth.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = LucideIcons[feature.icon as keyof typeof LucideIcons] as React.ElementType;
            return (
                <Card key={feature.title} className="text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription className="mt-2">{feature.description}</CardDescription>
                </CardHeader>
                </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
