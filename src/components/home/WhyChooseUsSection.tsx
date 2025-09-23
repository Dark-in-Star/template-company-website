
import type { Feature } from '@/lib/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import * as LucideIcons from 'lucide-react';

export function WhyChooseUsSection({ features }: { features: Feature[] }) {
  return (
    <section className="bg-background">
      <div className="container mx-auto">
        <div className="mb-24 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose Us?</h2>
          <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground md:text-lg">
            We are more than just a vendor; we are your strategic partner in innovation and growth.
          </p>
        </div>
        <div className="journey-container mx-auto max-w-6xl">
           <div className="absolute inset-x-0 top-0 hidden h-full items-center justify-center lg:flex">
            <Image
              src="/img/journey-path.png"
              alt="Journey path"
              width={1000}
              height={120}
              className="h-auto w-full"
            />
          </div>
          <div className="grid grid-cols-1 gap-y-20 gap-x-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = LucideIcons[feature.icon as keyof typeof LucideIcons] as React.ElementType;
              return (
                <div key={feature.title} className={cn("journey-card group", (index === 1 || index === 3) && "md:-translate-y-8")}>
                  <div className="journey-badge-wrapper">
                    <div className="journey-badge">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="journey-content">
                    <h4 className="font-heading text-xl font-bold">{feature.title}</h4>
                    <p className="mt-2 text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
