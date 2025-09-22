

import Image from 'next/image';
import type { Image as ImageType } from '@/lib/types';

interface PageHeroProps {
    title: string;
    description: string;
    image: ImageType;
}

export function PageHero({ title, description, image }: PageHeroProps) {
  return (
    <section className="relative flex h-[50vh] items-center justify-center bg-secondary">
        <div className="absolute inset-0">
        <Image
            src={image.src}
            alt={title}
            data-ai-hint={image.hint}
            fill
            className="object-cover opacity-20"
            priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        <div className="container relative mx-auto flex h-full flex-col items-center justify-center text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl">{title}</h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
                {description}
            </p>
        </div>
    </section>
  );
}
