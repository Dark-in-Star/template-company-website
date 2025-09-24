
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import type { BlogPost } from '@/lib/types';
import { BlogCard } from '@/components/shared/BlogCard';
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { TEAM_CAROUSEL_AUTOPLAY_DELAY } from '@/lib/constants';

export function BlogSection({ posts }: { posts: BlogPost[] }) {
    const plugin = React.useRef(
        Autoplay({ delay: TEAM_CAROUSEL_AUTOPLAY_DELAY, stopOnInteraction: true })
    );

  return (
    <section className="bg-background">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl">From the Blog</h2>
          <p className="mx-auto mt-4 text-muted-foreground md:text-lg">
            Explore our latest articles and insights on technology and business.
          </p>
        </div>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {posts.map((post) => (
              <CarouselItem key={post.slug} className="basis-full p-1 sm:basis-1/2 lg:basis-1/3">
                 <div className="h-full">
                    <BlogCard post={post} />
                 </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-12 text-center">
            <Link href="/blog">
                <Button size="lg" variant="outline">View All Posts</Button>
            </Link>
        </div>
      </div>
    </section>
  );
}
