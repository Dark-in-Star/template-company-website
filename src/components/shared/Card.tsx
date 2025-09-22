
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card as ShadcnCard, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExpandableText } from '@/components/shared/ExpandableText';
import type { Image as ImageType } from '@/lib/types';

interface CardProps {
  image: ImageType;
  title: string;
  description: string;
  href: string;
  headerContent?: React.ReactNode;
  footerContent?: React.ReactNode;
}

export function Card({ image, title, description, href, headerContent, footerContent }: CardProps) {
  return (
    <ShadcnCard className="flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      <Link href={href} className="block">
        <CardHeader className="p-0">
          <Image
            src={image.src}
            alt={title}
            data-ai-hint={image.hint}
            width={image.width}
            height={image.height}
            className="h-56 w-full object-cover"
          />
        </CardHeader>
      </Link>
      <CardContent className="flex flex-1 flex-col p-6">
        {headerContent}
        <CardTitle className="mt-2 text-xl">
          <Link href={href}>{title}</Link>
        </CardTitle>
        <ExpandableText text={description} />
        <div className="mt-auto pt-4">
          {footerContent}
        </div>
      </CardContent>
    </ShadcnCard>
  );
}
