
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Feather } from 'lucide-react';
import * as placeholderImages from '@/app/lib/placeholder-images.json';
import type { Image as ImageType } from '@/lib/types';
import { ScrollAnimation } from '../shared/ScrollAnimation';

const trustBadges = [
    { icon: CheckCircle, text: "Client-Focused" },
    { icon: CheckCircle, text: "Quality Driven" },
    { icon: CheckCircle, text: "Innovative Spirit" },
]

export function WhyChooseUsSection() {
    const whyChooseUsImage = placeholderImages.whyChooseUs as ImageType;
  return (
    <section className="bg-background">
        <ScrollAnimation>
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                            We are more than just a vendor; <span className="relative inline-block"><span className="absolute bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50"></span><span className="relative">we are your strategic partner</span></span> in innovation and growth.
                        </h2>
                        <p className="text-lg text-muted-foreground leading-8">
                            At Procellence Technology, we don't just build software—we build relationships. Our team integrates with yours, becoming a dedicated extension committed to understanding your challenges and achieving your goals. We thrive on turning complex problems into elegant, effective solutions that drive real results.
                        </p>
                        <div className="flex flex-wrap gap-6 mt-6 text-foreground text-base font-medium">
                            {trustBadges.map((badge) => (
                                <div key={badge.text} className="flex items-center gap-2">
                                    <badge.icon className="h-5 w-5 text-primary" />
                                    <span>{badge.text}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 flex flex-wrap gap-4">
                           <Link href="/about">
                                <Button size="lg">
                                    <Feather className="mr-2" />
                                    Meet the Team
                                </Button>
                            </Link>
                             <Link href="/contact">
                                <Button size="lg" variant="outline">
                                    Start a Project
                                    <ArrowRight className="ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                        <Image 
                            src={whyChooseUsImage.src}
                            alt={whyChooseUsImage.hint}
                            data-ai-hint={whyChooseUsImage.hint}
                            width={whyChooseUsImage.width}
                            height={whyChooseUsImage.height}
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </ScrollAnimation>
    </section>
  );
}
