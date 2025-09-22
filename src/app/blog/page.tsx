

import { blogPosts } from '@/lib/data';
import * as placeholderImages from '@/app/lib/placeholder-images.json';
import type { Image as ImageType } from '@/lib/types';
import { BlogCard } from '@/components/shared/BlogCard';
import { PageHero } from '@/components/shared/PageHero';

export default function BlogPage() {
  const blogHero = placeholderImages.blogHero as ImageType;

  return (
    <>
      <PageHero 
        title="Our Blog"
        description="Insights, news, and stories from the team at Procellence Technology."
        image={blogHero}
      />

      <section>
        <div className="container mx-auto">
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
