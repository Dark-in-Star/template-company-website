'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import type { Service } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface ServiceListItemProps {
  service: Service;
  align: 'left' | 'right';
}

export function ServiceListItem({ service, align }: ServiceListItemProps) {
  const Icon = LucideIcons[service.icon as keyof typeof LucideIcons] as React.ElementType;
  const isLeftAligned = align === 'left';

  return (
    <Card className="overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className={cn('relative min-h-[250px] md:col-span-2', isLeftAligned ? 'md:order-1' : 'md:order-2')}>
          <Image
            src={service.image.src}
            alt={service.title}
            data-ai-hint={service.image.hint}
            fill
            className="object-cover"
          />
        </div>
        <div className={cn('flex flex-col justify-center p-8 md:col-span-3', isLeftAligned ? 'md:order-2' : 'md:order-1')}>
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="font-heading mt-4 text-2xl font-bold">{service.title}</h3>
          <p className="mt-2 text-muted-foreground">{service.shortDescription}</p>
          <div className="mt-6">
            <Link href={`/services/${service.slug}`}>
              <Button>
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}