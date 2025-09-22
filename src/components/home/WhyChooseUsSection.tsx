

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
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = LucideIcons[feature.icon as keyof typeof LucideIcons] as React.ElementType;
            return (
                <Card key={feature.title} className="flex flex-col text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                    <ExpandableText text={feature.description} />
                </CardContent>
                </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
