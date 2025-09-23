

import { blogPosts } from '@/lib/data';
import { BlogCard } from '@/components/shared/BlogCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Insights, news, and stories from the team at Procellence Technology.',
}

export default function BlogPage() {

  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="mb-12 text-center">
              <h1 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl">Our Blog</h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                  Insights, news, and stories from the team at Procellence Technology.
              </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
