
'use client';

import * as React from 'react';
import * as LucideIcons from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { timelineEvents } from '@/lib/data';
import { ScrollAnimation } from '@/components/shared/ScrollAnimation';

export function TimelineSection() {
    return (
        <div id="our-story">
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
        </div>
    );
}
