
'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import type { Service } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ServiceListItemProps {
  service: Service;
  align: 'left' | 'right';
}

export function ServiceListItem({ service, align }: ServiceListItemProps) {
  const Icon = LucideIcons[service.icon as keyof typeof LucideIcons] as React.ElementType;
  const isLeftAligned = align === 'left';

  return (
    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
      <div className={cn('group relative h-80 w-full overflow-hidden rounded-lg bg-primary/5 p-8', isLeftAligned ? 'md:order-2' : 'md:order-1')}>
         <Image 
            src={service.image.src}
            alt={service.image.hint}
            data-ai-hint={service.image.hint}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-90"
         />
      </div>
      <div className={cn('flex flex-col justify-center space-y-4 rounded-lg', isLeftAligned ? 'md:order-1' : 'md:order-2')}>
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="font-heading text-3xl font-bold">{service.title}</h3>
        <p className="text-lg text-muted-foreground">{service.mediumDescription}</p>
        <div className="pt-2">
          <Link href={`/services/${service.slug}`}>
            <Button>
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
