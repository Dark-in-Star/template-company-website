

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
        <div className="relative">
          <div className="absolute inset-x-0 top-1/2 hidden -translate-y-1/2 text-primary/30 lg:block" aria-hidden="true">
            {/* The decorative SVG path */}
            <img src="/img/journey-path.svg" alt="" className="w-full h-auto" />
          </div>
          <div className="relative grid grid-cols-1 gap-y-20 gap-x-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={feature.title} className="journey-card group">
                <div className="journey-card-badge-wrapper">
                  <div className="journey-card-badge">
                    <span>{index + 1}</span>
                  </div>
                </div>
                <div className="journey-card-content">
                  <h4 className="font-heading text-xl font-bold">{feature.title}</h4>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
