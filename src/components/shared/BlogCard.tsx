
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/lib/types';
import { Card } from './Card';

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card
      image={post.image}
      title={post.title}
      description={post.excerpt}
      href={`/blog/${post.slug}`}
      headerContent={
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <time dateTime={post.date}>{post.date}</time>
          <span>&middot;</span>
          <span>{post.author}</span>
        </div>
      }
      footerContent={
        <Link href={`/blog/${post.slug}`} className="mt-4">
          <Button variant="link" className="p-0">
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      }
    />
  );
}
