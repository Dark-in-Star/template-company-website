
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import * as LucideIcons from 'lucide-react';
import { ExpandableText } from '@/components/shared/ExpandableText';
import type { Feature } from '@/lib/types';

export function WhyChooseUsSection({ features }: { features: Feature[] }) {
  return (
    <section className="bg-background">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose Us?</h2>
          <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground md:text-lg">
            We are more than just a vendor; we are your strategic partner in innovation and growth.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = LucideIcons[feature.icon as keyof typeof LucideIcons] as React.ElementType;
            return (
                <Card key={feature.title} className="group flex flex-col text-left transition-shadow duration-300 hover:shadow-xl sm:flex-row">
                    <CardHeader className="flex items-center justify-center p-6 sm:w-1/4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                            <Icon className="h-8 w-8" />
                        </div>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col justify-center p-6 pt-0 sm:pt-6">
                        <CardTitle>{feature.title}</CardTitle>
                        <p className="mt-2 text-muted-foreground">{feature.description}</p>
                    </CardContent>
                </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
