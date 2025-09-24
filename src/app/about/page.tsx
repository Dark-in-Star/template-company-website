
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
import { StatsSection } from '@/components/home/StatsSection';
import { INITIAL_FAQS_COUNT, TEAM_CAROUSEL_AUTOPLAY_DELAY } from '@/lib/constants';
import { ScrollAnimation } from '@/components/shared/ScrollAnimation';

function TeamMemberCard({ member }: { member: TeamMember }) {
  const isMobile = useIsMobile();
  return (
    <div className="relative mt-8 md:mt-0">
      <div className="relative flex flex-col md:flex-row md:items-center">
        <div className="md:w-1/2 lg:w-5/12">
          <Card className="overflow-hidden shadow-xl">
            <Image
              src={member.image.src}
              alt={member.name}
              data-ai-hint={member.image.hint}
              width={member.image.width}
              height={member.image.height}
              className="h-full w-full object-cover"
            />
          </Card>
        </div>
        <div className="w-full md:w-1/2 lg:w-7/12">
          <Card className="relative -mt-8 rounded-lg border bg-card p-6 shadow-lg md:-ml-16 md:mt-0 md:p-10">
            <CardContent className="p-0">
              <h3 className="font-heading text-2xl font-bold">{member.name}</h3>
              <p className="text-lg font-medium text-primary">{member.role}</p>
              <p className="mt-4 text-muted-foreground">{member.bio}</p>
              <div className="mt-6 flex gap-2">
                <SocialLink platform="linkedin" url={member.socials?.linkedin} />
                <SocialLink platform="twitter" url={member.socials?.twitter} />
                <SocialLink platform="github" url={member.socials?.github} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const [founder, ...otherTeamMembers] = teamMembers;
  const [showAllFaqs, setShowAllFaqs] = React.useState(false);
  const isMobile = useIsMobile();

  const plugin = React.useRef(
    Autoplay({ delay: TEAM_CAROUSEL_AUTOPLAY_DELAY, stopOnInteraction: true })
  );

  const displayedFaqs = showAllFaqs ? faqs : faqs.slice(0, INITIAL_FAQS_COUNT);
  const aboutHero = placeholderImages.aboutHero as ImageType;

  return (
    <>
      <PageHero
        title="About Procellence Technology"
        description="We are innovators, dreamers, and builders, united by a passion for technology and a commitment to our clients' success."
        image={aboutHero}
        />
        <div className="relative">
            <div className="container -mt-24 pb-12">
                <ScrollAnimation>
                    <StatsSection />
                </ScrollAnimation>
            </div>
        </div>

      <section className="pt-0">
        <div className="container mx-auto space-y-16">
           <ScrollAnimation>
            <h2 className="font-heading mb-12 text-center text-3xl font-bold tracking-tighter">Our Story</h2>
            <div className="relative">
                <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
                {timelineEvents.map((event, index) => {
                    const Icon = LucideIcons[event.icon as keyof typeof LucideIcons] as React.ElementType;
                    const isLeft = index % 2 === 0;
                    return (
                        <div key={index} className={cn("relative mb-12 flex w-full items-center", isLeft ? 'justify-start' : 'justify-end')}>
                             <div className={cn("w-1/2", isLeft ? 'pr-8' : 'pl-8')}>
                                <ScrollAnimation delay={index * 150}>
                                    <Card className="shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                        <CardContent className="p-6">
                                            <div className="flex items-center gap-4">
                                                <div>
                                                    <p className="font-heading text-xl font-bold">{event.title}</p>
                                                    <p className="text-sm font-semibold text-primary">{event.date}</p>
                                                </div>
                                            </div>
                                            <p className="mt-4 text-muted-foreground">{event.description}</p>
                                        </CardContent>
                                    </Card>
                                </ScrollAnimation>
                            </div>
                            <div className="absolute left-1/2 top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground">
                                <Icon className="h-6 w-6" />
                            </div>
                        </div>
                    );
                })}
            </div>
          </ScrollAnimation>

          <Separator />

          <ScrollAnimation>
            <div className="space-y-8">
                <h2 className="font-heading text-center text-3xl font-bold tracking-tighter">Meet the Founder</h2>
                <TeamMemberCard member={founder} />
            </div>
          </ScrollAnimation>

          <Separator />

            <ScrollAnimation>
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
                  {otherTeamMembers.map((member, index) => (
                  <CarouselItem key={member.name} className="basis-full pl-4 md:basis-1/2 lg:basis-1/3">
                    <ScrollAnimation delay={index * 150}>
                      <Card className="group relative w-full overflow-hidden transition-all duration-300 hover:shadow-xl">
                        <Image
                          src={member.image.src}
                          alt={member.name}
                          data-ai-hint={member.image.hint}
                          width={400}
                          height={500}
                          className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-transparent to-transparent">
                          <div className="p-6 text-white transition-all duration-300 group-hover:-translate-y-10">
                            <h3 className="font-heading text-2xl font-bold">{member.name}</h3>
                            <p className="text-base text-primary">{member.role}</p>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                            <SocialLink platform="linkedin" url={member.socials?.linkedin} />
                            <SocialLink platform="twitter" url={member.socials?.twitter} />
                            <SocialLink platform="github" url={member.socials?.github} />
                          </div>
                        </div>
                      </Card>
                    </ScrollAnimation>
                  </CarouselItem>
                  ))}
              </CarouselContent>
              </Carousel>
          </ScrollAnimation>

          <Separator />

            <ScrollAnimation>
                <h2 className="font-heading mb-12 text-center text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
              <div className="mx-auto max-w-3xl">
                <Accordion type="single" collapsible className="w-full">
                    {displayedFaqs.map((faq, index) => (
                        <ScrollAnimation key={index} delay={index * 150}>
                            <AccordionItem value={`item-${index}`}>
                                <AccordionTrigger className="font-heading text-left text-lg">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        </ScrollAnimation>
                    ))}
                </Accordion>
                  <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <ScrollAnimation>
                        <>
                            {faqs.length > INITIAL_FAQS_COUNT && (
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
                        </>
                    </ScrollAnimation>
                  </div>
              </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
