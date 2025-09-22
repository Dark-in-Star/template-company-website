
'use client';

import Image from 'next/image';
import { teamMembers, timelineEvents, faqs } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, Mail, Facebook, Instagram, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
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


function SocialLink({ platform, url }: { platform: keyof NonNullable<TeamMember['socials']>, url: string | undefined }) {
  if (!url) return null;

  const icons: { [key in keyof NonNullable<TeamMember['socials']>]: React.ReactNode } = {
    linkedin: <Linkedin className="h-5 w-5" />,
    twitter: <Twitter className="h-5 w-5" />,
    github: <Github className="h-5 w-5" />,
    facebook: <Facebook className="h-5 w-5" />,
    instagram: <Instagram className="h-5 w-5" />,
    email: <Mail className="h-5 w-5" />,
  };

  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 hover:text-white">
        {icons[platform]}
        <span className="sr-only">{platform}</span>
      </Button>
    </Link>
  );
}

function TeamMemberCard({ member, isFounder = false }: { member: TeamMember, isFounder?: boolean }) {
    const isMobile = useIsMobile();
  return (
    <div className={`flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:text-left`}>
      <div className={`relative group flex justify-center`}>
        <Image
          src={member.image.src}
          alt={member.name}
          data-ai-hint={member.image.hint}
          width={member.image.width}
          height={member.image.height}
          className="h-64 w-64 rounded-full object-cover shadow-lg"
        />
        {member.socials && (
          <div className={`absolute inset-0 flex items-center justify-center gap-2 rounded-full bg-black/50 transition-opacity ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
            <SocialLink platform="linkedin" url={member.socials.linkedin} />
            <SocialLink platform="twitter" url={member.socials.twitter} />
            <SocialLink platform="github" url={member.socials.github} />
          </div>
        )}
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold">{member.name}</h3>
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

  return (
    <>
      <section className="relative h-[50vh] bg-secondary flex items-center justify-center">
         <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/seed/about-hero/1920/400"
            alt="Our team at work"
            data-ai-hint="team meeting"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        <div className="container relative mx-auto flex h-full flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About Procellence Technology</h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
                We are innovators, dreamers, and builders, united by a passion for technology and a commitment to our clients' success.
            </p>
        </div>
      </section>

      <section>
        <div className="container mx-auto space-y-16">
          <div>
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter">Our Story</h2>
            <div className="relative">
              {/* Vertical line for desktop */}
              <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-primary/20 md:block" aria-hidden="true" />
              {/* Vertical line for mobile */}
              <div className="absolute left-6 top-0 h-full w-0.5 -translate-x-1/2 bg-primary/20 md:hidden" aria-hidden="true" />

              <div className="space-y-12">
                {timelineEvents.map((event, index) => {
                  const Icon = LucideIcons[event.icon as keyof typeof LucideIcons] as React.ElementType;
                  const isLeft = index % 2 === 0;

                  return (
                    <div key={index} className="relative md:grid md:grid-cols-2 md:gap-x-12">
                      {/* Desktop View */}
                      <div className={`hidden md:block ${isLeft ? 'text-right' : 'text-left'}`}>
                        {isLeft && (
                           <Card className="inline-block p-6 text-left shadow-xl max-w-md">
                            <p className="mb-2 text-sm text-primary">{event.date}</p>
                            <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
                            <p className="text-sm text-muted-foreground">{event.description}</p>
                          </Card>
                        )}
                      </div>
                      
                      <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform md:block">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-xl">
                          <Icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                      </div>

                      <div className={`hidden md:block ${!isLeft ? 'text-left' : 'text-right'}`}>
                        {!isLeft && (
                          <Card className="inline-block p-6 text-left shadow-xl max-w-md">
                            <p className="mb-2 text-sm text-primary">{event.date}</p>
                            <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
                            <p className="text-sm text-muted-foreground">{event.description}</p>
                          </Card>
                        )}
                      </div>

                      {/* Mobile View */}
                      <div className="flex items-center gap-6 md:hidden">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary shadow-xl">
                          <Icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <Card className="flex-1 p-4 shadow-xl">
                          <p className="mb-1 text-sm text-primary">{event.date}</p>
                          <h3 className="mb-1 text-lg font-bold">{event.title}</h3>
                          <p className="text-sm text-muted-foreground">{event.description}</p>
                        </Card>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <Separator />

          <div>
              <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter">Meet the Founder</h2>
              <TeamMemberCard member={founder} isFounder />
          </div>

          <Separator />

          <div>
              <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter">Meet the Team</h2>
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
                      <div className={`absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 transition-opacity duration-300 ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                          <div className="text-center text-white">
                          <h3 className="text-2xl font-bold">{member.name}</h3>
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
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
              </Carousel>
          </div>

          <Separator />

          <div>
              <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
              <div className="mx-auto max-w-3xl">
                  <Accordion type="single" collapsible className="w-full">
                      {displayedFaqs.map((faq, index) => (
                          <AccordionItem key={index} value={`item-${index}`}>
                              <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>

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
