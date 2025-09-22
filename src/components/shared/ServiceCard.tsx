
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { Service } from '@/lib/types';
import { Card } from './Card';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card
      image={service.image}
      title={service.title}
      description={service.shortDescription}
      href={`/services/${service.slug}`}
      footerContent={
        <Link href={`/services/${service.slug}`} className="mt-4">
          <Button variant="outline" className="w-full">
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      }
    />
  );
}
