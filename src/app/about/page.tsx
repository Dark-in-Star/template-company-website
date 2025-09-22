

'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import type { TeamMember } from '@/lib/types';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Autoplay from "embla-carousel-autoplay";
import * as React from 'react';
import * as LucideIcons from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { teamMembers, timelineEvents, faqs } from '@/lib/data';
import * as placeholderImages from '@/app/lib/placeholder-images.json';
import type { Image as ImageType } from '@/lib/types';
import { PageHero } from '@/components/shared/PageHero';
import { SocialLink } from '@/components/shared/SocialLink';
import { cn } from '@/lib/utils';


function TeamMemberCard({ member, isFounder = false }: { member: TeamMember, isFounder?: boolean }) {
    const isMobile = useIsMobile();
  return (
    <div className={cn('flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:text-left')}>
      <div className={cn('relative group flex justify-center')}>
        <Image
          src={member.image.src}
          alt={member.name}
          data-ai-hint={member.image.hint}
          width={member.image.width}
          height={member.image.height}
          className="h-64 w-64 rounded-full object-cover shadow-lg"
        />
        {member.socials && (
          <div className={cn('absolute inset-0 flex items-center justify-center gap-2 rounded-full bg-black/50 transition-opacity', isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100')}>
            <SocialLink platform="linkedin" url={member.socials.linkedin} />
            <SocialLink platform="twitter" url={member.socials.twitter} />
            <SocialLink platform="github" url={member.socials.github} />
          </div>
        )}
      </div>
      <div className="flex-1">
        <h3 className="font-heading text-2xl font-bold">{member.name}</h3>
        <p className="text-lg font-medium text-primary">{member.role}</p>
        <p className="mt-4 text-muted-foreground">{member.bio}</p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const [founder, ...otherTeamMembers] = teamMembers;
  const [showAllFaqs, setShowAllFaqs] = React.useState(false);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
    const isMobile = useIsMobile();

  const displayedFaqs = showAllFaqs ? faqs : faqs.slice(0, 3);
  const aboutHero = placeholderImages.aboutHero as ImageType;

  return (
    <>
      <PageHero
        title="About Procellence Technology"
        description="We are innovators, dreamers, and builders, united by a passion for technology and a commitment to our clients' success."
        image={aboutHero}
        />

      <section>
        <div className="container mx-auto space-y-16">
           <div>
            <h2 className="font-heading mb-12 text-center text-3xl font-bold tracking-tighter">Our Story</h2>
            <div className="space-y-8">
              {timelineEvents.map((event, index) => {
                const Icon = LucideIcons[event.icon as keyof typeof LucideIcons] as React.ElementType;
                const isLeft = index % 2 === 0;

                return (
                    <Card key={index} className="overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className={cn("relative h-64 md:h-auto", isLeft ? 'md:order-1' : 'md:order-2')}>
                             <Image
                                src={event.image.src}
                                alt={event.title}
                                data-ai-hint={event.image.hint}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className={cn("flex flex-col justify-center p-8", isLeft ? 'md:order-2' : 'md:order-1')}>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="font-heading text-2xl font-bold">{event.title}</p>
                                    <p className="text-sm font-semibold text-primary">{event.date}</p>
                                </div>
                            </div>
                            <p className="mt-4 text-muted-foreground">{event.description}</p>
                        </div>
                        </div>
                    </Card>
                );
              })}
            </div>
          </div>

          <Separator />

          <div>
              <h2 className="font-heading mb-8 text-center text-3xl font-bold tracking-tighter">Meet the Founder</h2>
              <TeamMemberCard member={founder} isFounder />
          </div>

          <Separator />

          <div>
              <h2 className="font-heading mb-8 text-center text-3xl font-bold tracking-tighter">Meet the Team</h2>
              <Carousel
                  plugins={[plugin.current]}
                  className="w-full"
                  onMouseEnter={plugin.current.stop}
                  onMouseLeave={plugin.current.reset}
                  opts={{
                      align: 'start',
                      loop: true,
                  }}
              >
              <CarouselContent className="-ml-4">
                  {otherTeamMembers.map((member) => (
                  <CarouselItem key={member.name} className="basis-full pl-4 md:basis-1/2 lg:basis-1/4">
                      <Card className="group relative w-full overflow-hidden pt-[133.33%]">
                      <Image
                          src={member.image.src}
                          alt={member.name}
                          data-ai-hint={member.image.hint}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className={cn('absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 transition-opacity duration-300', isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100')}>
                          <div className="text-center text-white">
                          <h3 className="font-heading text-2xl font-bold">{member.name}</h3>
                          <p className="text-lg font-medium text-primary">{member.role}</p>
                          </div>
                          {member.socials && (
                          <div className="mt-4 flex gap-2">
                              <SocialLink platform="linkedin" url={member.socials.linkedin} />
                              <SocialLink platform="twitter" url={member.socials.twitter} />
                              <SocialLink platform="github" url={member.socials.github} />
                          </div>
                          )}
                      </div>
                      </Card>
                  </CarouselItem>
                  ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
              </Carousel>
          </div>

          <Separator />

          <div>
              <h2 className="font-heading mb-12 text-center text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
              <div className="mx-auto max-w-3xl">
                  <Accordion type="single" collapsible className="w-full">
                      {displayedFaqs.map((faq, index) => (
                          <AccordionItem key={index} value={`item-${index}`}>
                              <AccordionTrigger className="font-heading text-left text-lg">{faq.question}</AccordionTrigger>

                              <AccordionContent className="text-base text-muted-foreground">
                                  {faq.answer}
                              </AccordionContent>
                          </AccordionItem>
                      ))}
                  </Accordion>
                  <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                      {faqs.length > 3 && (
                          <Button variant="outline" onClick={() => setShowAllFaqs(!showAllFaqs)}>
                              {showAllFaqs ? (
                                  <>
                                      <ChevronUp className="mr-2 h-4 w-4" />
                                      Show Less
                                  </>
                              ) : (
                                  <>
                                      <ChevronDown className="mr-2 h-4 w-4" />
                                      Show More
                                  </>
                              )}
                          </Button>
                      )}
                      {showAllFaqs && (
                           <Link href="/contact">
                                <Button>
                                    Still have questions? Contact Us
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                      )}
                  </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}
