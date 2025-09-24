
'use client';

import * as React from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { SocialLink } from '@/components/shared/SocialLink';
import { TEAM_CAROUSEL_AUTOPLAY_DELAY } from '@/lib/constants';
import { teamMembers } from '@/lib/data';
import { ScrollAnimation } from '@/components/shared/ScrollAnimation';

export function TeamSection() {
    const [, ...otherTeamMembers] = teamMembers;

    const plugin = React.useRef(
        Autoplay({ delay: TEAM_CAROUSEL_AUTOPLAY_DELAY, stopOnInteraction: true })
    );

    return (
        <div id="team">
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
        </div>
    );
}
