
'use client';

import * as LucideIcons from 'lucide-react';
import type { Feature } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollAnimation } from '../shared/ScrollAnimation';
import { cn } from '@/lib/utils';

export function WhyChooseUsSection({ features }: { features: Feature[] }) {
  return (
    <section className="bg-primary/5">
        <ScrollAnimation>
            <div className="container mx-auto">
                <div className="mb-20 text-center">
                    <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl">Your Journey to Excellence Starts Here</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                        We're not just a service provider; we are your dedicated partner, guiding you through every step of your digital transformation with expertise, innovation, and a commitment to quality.
                    </p>
                </div>
                <div className="journey-container grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {features.map((feature, index) => {
                        const Icon = LucideIcons[feature.icon as keyof typeof LucideIcons] as React.ElementType;
                        return (
                            <div key={index} className={cn("group journey-card", index % 2 !== 0 && "stagger-up")}>
                                <div className="journey-badge-wrapper">
                                    <div className="journey-badge">
                                        {Icon && <Icon className="h-7 w-7" />}
                                    </div>
                                </div>
                                <Card className="journey-content">
                                    <CardHeader>
                                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        );
                    })}
                </div>
            </div>
      </ScrollAnimation>
    </section>
  );
}
