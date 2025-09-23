
import type { Feature } from '@/lib/types';
import { Send } from 'lucide-react';
import { cn } from '@/lib/utils';

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
        <div className="journey-container">
          <div className="absolute inset-x-0 top-0 hidden h-full md:block">
            <svg
              viewBox="0 0 1000 120"
              preserveAspectRatio="none"
              className="h-full w-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="journey-gradient" x1="0" y1="60" x2="1000" y2="60" gradientUnits="userSpaceOnUse">
                  <stop stopColor="hsl(var(--chart-1))" />
                  <stop offset="1" stopColor="hsl(var(--chart-4))" />
                </linearGradient>
              </defs>
              <path
                d="M50 80 C 250 120, 350 0, 500 40 C 650 80, 750 0, 950 40"
                stroke="url(#journey-gradient)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg>
          </div>
          <div className="grid grid-cols-1 gap-y-20 gap-x-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={feature.title} className={cn("journey-card group", (index === 1 || index === 3) && "md:-translate-y-8")}>
                <div className="journey-badge-wrapper">
                  <div className="journey-badge">
                    <span>{index + 1}</span>
                  </div>
                </div>
                <div className="journey-content">
                  <h4 className="font-heading text-xl font-bold">{feature.title}</h4>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Send className="journey-arrow" />
        </div>
      </div>
    </section>
  );
}
