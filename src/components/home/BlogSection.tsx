

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ExpandableText } from '@/components/shared/ExpandableText';
import type { BlogPost } from '@/lib/types';

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
                    <Card className="flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                        <Link href={`/blog/${post.slug}`} className="block">
                        <CardHeader className="p-0">
                            <Image
                            src={post.image.src}
                            alt={post.title}
                            data-ai-hint={post.image.hint}
                            width={post.image.width}
                            height={post.image.height}
                            className="h-56 w-full object-cover"
                            />
                        </CardHeader>
                        </Link>
                        <CardContent className="flex flex-1 flex-col p-6">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <time dateTime={post.date}>{post.date}</time>
                                <span>&middot;</span>
                                <span>{post.author}</span>
                            </div>
                        <CardTitle className="mt-2 text-xl">
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </CardTitle>
                        <ExpandableText text={post.excerpt} />
                        <div className="mt-auto pt-4">
                            <Link href={`/blog/${post.slug}`} className="mt-4">
                                <Button variant="link" className="p-0">
                                Read More <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                        </CardContent>
                    </Card>
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
