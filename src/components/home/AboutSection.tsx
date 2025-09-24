
'use client';

import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import type { Image as ImageType } from '@/lib/types';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Award, Handshake, Users, ChevronDown } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const aboutPoints = [
    {
        icon: Award,
        title: 'Commitment to Excellence',
        description: 'We forge long-lasting partnerships to ensure sustainable growth and success.',
    },
    {
        icon: Handshake,
        title: 'Integrity and Expertise',
        description: 'Our foundation is built on integrity, deep expertise, and transparent collaboration.',
    },
    {
        icon: Users,
        title: 'Client-Centric Approach',
        description: 'Your mission is our mission. We empower clients to achieve their full potential.',
    },
];

function CollapsibleAboutPoints() {

    return (
        <ul className="mt-6 space-y-2">
            {aboutPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                    <Collapsible key={index} asChild>
                        <li className="rounded-md border p-3 transition-all hover:bg-secondary/50">
                            <div className="flex items-center justify-between">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="font-semibold pt-1">{point.title}</h3>
                                </div>
                                <CollapsibleTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
                                    </Button>
                                </CollapsibleTrigger>
                            </div>
                            <CollapsibleContent>
                                <p className="pt-2 pl-11 text-sm text-muted-foreground">{point.description}</p>
                            </CollapsibleContent>
                        </li>
                    </Collapsible>
                )
            })}
      </ul>
    )
}

export function AboutSection({ aboutImage }: { aboutImage: ImageType }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { isInView } = useScrollAnimation({ ref, threshold: 0.2, triggerOnce: true });
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <section 
      ref={ref}
      className={cn('about-section-v2', isInView && 'is-visible')}
    >
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="about-image-wrapper hidden lg:block h-full min-h-[480px] max-h-[640px]">
            <Image
                src={aboutImage.src}
                alt="About Procellence Technology"
                data-ai-hint={aboutImage.hint}
                fill
                className="about-image-parallax object-cover"
            />
        </div>
        <div>
          <Card className="about-content-card bg-card/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 lg:bg-card/100 lg:shadow-none lg:backdrop-blur-none">
            <CardContent className="p-8 md:p-12">
              <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl">About Procellence Technology</h2>
              <div>
                <p className={cn("mt-4 text-muted-foreground md:text-lg", !isExpanded && "line-clamp-2")}>
                    We are a team of passionate innovators, strategists, and engineers dedicated to solving complex business challenges with state-of-the-art technology. Our mission is to empower clients to achieve their full potential by providing solutions built on integrity and deep expertise.
                </p>
                <Button variant="link" size="sm" className="p-0 h-auto" onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ? 'Read Less' : 'Read More'}
                </Button>
              </div>
              
              <CollapsibleAboutPoints />

              <div className="mt-8">
                <Link href="/about">
                  <Button size="lg">Learn More About Us</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
