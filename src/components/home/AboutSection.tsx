
'use client';

import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import type { Image as ImageType } from '@/lib/types';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Award, Handshake, Users } from 'lucide-react';

export function AboutSection({ aboutImage }: { aboutImage: ImageType }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { isInView } = useScrollAnimation({ ref, threshold: 0.2, triggerOnce: true });
  const parallaxRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current && window.innerWidth > 768) {
        const top = parallaxRef.current.getBoundingClientRect().top;
        const speed = 0.2;
        const yOffset = -top * speed;
        parallaxRef.current.style.setProperty('--parallax-y', `${yOffset}px`);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={ref} 
      className={cn('about-section-v2', isInView && 'is-visible')}
    >
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="about-image-wrapper hidden md:block">
          <Image
            ref={parallaxRef}
            src={aboutImage.src}
            alt="Our Team"
            data-ai-hint={aboutImage.hint}
            fill
            className="about-image-parallax"
          />
        </div>
        <div className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-2">
          <Card className="about-content-card bg-card/80 shadow-2xl backdrop-blur-lg">
            <CardContent className="p-8 md:p-12">
              <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl">About Procellence Technology</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                We are a team of passionate innovators, strategists, and engineers dedicated to solving complex business challenges with state-of-the-art technology.
              </p>
              
              <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Award className="h-5 w-5" />
                      </div>
                      <div>
                          <h3 className="font-semibold">Commitment to Excellence</h3>
                          <p className="text-sm text-muted-foreground">We forge long-lasting partnerships to ensure sustainable growth and success.</p>
                      </div>
                  </li>
                  <li className="flex items-start gap-3">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Handshake className="h-5 w-5" />
                      </div>
                      <div>
                          <h3 className="font-semibold">Integrity and Expertise</h3>
                          <p className="text-sm text-muted-foreground">Our foundation is built on integrity, deep expertise, and transparent collaboration.</p>
                      </div>
                  </li>
                   <li className="flex items-start gap-3">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Users className="h-5 w-5" />
                      </div>
                      <div>
                          <h3 className="font-semibold">Client-Centric Approach</h3>
                          <p className="text-sm text-muted-foreground">Your mission is our mission. We empower clients to achieve their full potential.</p>
                      </div>
                  </li>
              </ul>

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
