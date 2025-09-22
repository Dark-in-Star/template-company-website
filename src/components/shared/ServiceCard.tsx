
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import type { Service } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '../ui/button';

export function ServiceCard({ service }: { service: Service }) {
    const Icon = LucideIcons[service.icon as keyof typeof LucideIcons] as React.ElementType;

    return (
        <Card className="group relative h-[350px] w-full overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl">
        <Link href={`/services/${service.slug}`} className="absolute inset-0">
            <Image
                src={service.image.src}
                alt={service.title}
                data-ai-hint={service.image.hint}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </Link>
        <CardContent className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
            <div className="transition-transform duration-300 group-hover:-translate-y-4">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/80 transition-all duration-300 group-hover:bg-primary">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold">{service.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/80">{service.shortDescription}</p>
            </div>
            <div className="mt-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <Button variant="secondary" size="sm">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
        </CardContent>
        </Card>
    );
}


