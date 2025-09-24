
'use client';

import type { Image as ImageType } from '@/lib/types';
import { PageHero } from '@/components/shared/PageHero';
import { StatsSection } from '@/components/home/StatsSection';
import { ScrollAnimation } from '@/components/shared/ScrollAnimation';
import { Separator } from '@/components/ui/separator';
import * as placeholderImages from '@/app/lib/placeholder-images.json';
import { TimelineSection } from '@/components/about/TimelineSection';
import { FounderSection } from '@/components/about/FounderSection';
import { TeamSection } from '@/components/about/TeamSection';
import { FaqSection } from '@/components/about/FaqSection';

export default function AboutPage() {
  const aboutHero = placeholderImages.aboutHero as ImageType;

  return (
    <>
      <PageHero
        title="About Procellence Technology"
        description="We are innovators, dreamers, and builders, united by a passion for technology and a commitment to our clients' success."
        image={aboutHero}
      />
      <div id="stats" className="relative">
        <div className="container -mt-24 pb-12 sm:mt-0 sm:pb-0 sm:pt-12">
          <ScrollAnimation>
            <StatsSection />
          </ScrollAnimation>
        </div>
      </div>

      <section id="story" className="pt-0">
        <div className="container mx-auto space-y-16">
          <ScrollAnimation>
            <TimelineSection />
          </ScrollAnimation>

          <Separator />

          <ScrollAnimation>
            <FounderSection />
          </ScrollAnimation>

          <Separator />

          <ScrollAnimation>
            <TeamSection />
          </ScrollAnimation>

          <Separator />

          <ScrollAnimation>
            <FaqSection />
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
