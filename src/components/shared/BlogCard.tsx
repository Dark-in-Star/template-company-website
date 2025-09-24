
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/lib/types';
import { Card as ShadcnCard, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <ShadcnCard className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="relative h-56 w-full p-0">
        <Link href={`/blog/${post.slug}`} className="block h-full w-full overflow-hidden">
          <Image
            src={post.image.src}
            alt={post.title}
            data-ai-hint={post.image.hint}
            width={post.image.width}
            height={post.image.height}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </Link>
        <div className="author-badge absolute bottom-2 left-4 z-10 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs text-white backdrop-blur-sm">
          <span>{post.author}</span>
          <span className="mx-1.5">&middot;</span>
          <time dateTime={post.date}>{post.date}</time>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col p-6">
        <CardTitle className="text-xl">
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 after:z-0">
            {post.title}
          </Link>
        </CardTitle>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
         <Button asChild variant="link" className="p-0 relative z-10">
            <Link href={`/blog/${post.slug}`}>
                Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
        </Button>
      </CardFooter>
    </ShadcnCard>
  );
}
