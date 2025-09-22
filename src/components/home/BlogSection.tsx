

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import type { BlogPost } from '@/lib/types';
import { BlogCard } from '@/components/shared/BlogCard';

export function BlogSection({ posts }: { posts: BlogPost[] }) {

  return (
    <section className="bg-background">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-heading">From the Blog</h2>
          <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground md:text-lg">
            Explore our latest articles and insights on technology and business.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full"
        >
          <CarouselContent>
            {posts.map((post) => (
              <CarouselItem key={post.slug} className="md:basis-1/2 lg:basis-1/3">
                 <div className="p-1 h-full">
                    <BlogCard post={post} />
                 </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
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
