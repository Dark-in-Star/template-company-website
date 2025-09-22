'use client';

import Image from 'next/image';
import { teamMembers } from '@/lib/data';
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
import Autoplay from "embla-carousel-autoplay";
import * as React from 'react';

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
  return (
    <div className={`grid grid-cols-1 items-center gap-8 ${isFounder ? 'md:grid-cols-3' : ''}`}>
      <div className={`relative group flex justify-center ${isFounder ? 'md:col-span-1' : ''}`}>
        <Image
          src={member.image.src}
          alt={member.name}
          data-ai-hint={member.image.hint}
          width={member.image.width}
          height={member.image.height}
          className="h-64 w-64 rounded-full object-cover shadow-lg"
        />
        {member.socials && (
          <div className="absolute inset-0 flex items-center justify-center gap-2 rounded-full bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
            <SocialLink platform="linkedin" url={member.socials.linkedin} />
            <SocialLink platform="twitter" url={member.socials.twitter} />
            <SocialLink platform="github" url={member.socials.github} />
          </div>
        )}
      </div>
      <div className={isFounder ? 'md:col-span-2' : ''}>
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

  return (
    <>
      <section className="bg-primary/5">
        <div className="container mx-auto py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About Procellence Technology</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            We are innovators, dreamers, and builders, united by a passion for technology and a commitment to our clients' success.
          </p>
        </div>
      </section>

      <section>
        <div className="container mx-auto space-y-12">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
              <p className="mt-4 text-muted-foreground">
                Founded in a small garage with a big idea, Procellence Technology has grown from a humble startup into a leading technology solutions provider. Our journey has been fueled by a relentless pursuit of innovation and a steadfast dedication to our core values.
              </p>
              <p className="mt-4 text-muted-foreground">
                We believe that technology should be a force for good, empowering businesses to operate more efficiently, connect with their customers more meaningfully, and make a positive impact on the world.
              </p>
            </div>
            <Card>
              <CardContent className="p-0">
                <Image
                  src="https://picsum.photos/seed/story-img/600/400"
                  alt="Company story"
                  data-ai-hint="old garage"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </CardContent>
            </Card>
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
                      <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
        </div>
      </section>
    </>
  );
}
