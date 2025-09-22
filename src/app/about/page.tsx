
'use client';

import Image from 'next/image';
import { teamMembers, timelineEvents, faqs } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, Mail, Facebook, Instagram } from 'lucide-react';
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
    <div className={`flex flex-col md:flex-row items-center gap-8 ${isFounder ? 'text-center md:text-left' : ''}`}>
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

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
    const isMobile = useIsMobile();

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
                    <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-primary/20 hidden md:block" aria-hidden="true"></div>
                    <div className="space-y-12">
                        {timelineEvents.map((event, index) => {
                            const Icon = LucideIcons[event.icon] as React.ElementType;
                            const isEven = index % 2 === 0;
                            return (
                                <div key={index} className={`relative flex items-center gap-6 md:gap-0 ${isEven ? 'md:flex-row-reverse md:pl-16' : 'md:pr-16'}`}>
                                    <div className="hidden md:block md:w-1/2"></div>
                                    <div className="z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary shadow-xl md:mx-auto">
                                        <Icon className="h-8 w-8 text-primary-foreground" />
                                    </div>
                                    <div className={`w-full rounded-lg bg-card px-6 py-4 shadow-xl md:w-1/2 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                                        <p className="mb-2 text-sm text-primary">{event.date}</p>
                                        <h3 className="mb-2 font-bold text-xl">{event.title}</h3>
                                        <p className="text-sm leading-snug tracking-wide text-muted-foreground">
                                            {event.description}
                                        </p>
                                    </div>
                                    <div className={`absolute left-8 top-1/2 h-full w-0.5 -translate-y-1/2 bg-primary/20 md:hidden ${index === 0 ? 'top-full' : ''} ${index === timelineEvents.length - 1 ? 'bottom-full' : ''}`} aria-hidden="true"></div>
                                </div>
                            )
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
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>

                                <AccordionContent className="text-base text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
