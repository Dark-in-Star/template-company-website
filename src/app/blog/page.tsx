import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function BlogPage() {
  return (
    <>
      <section className="bg-primary/5">
        <div className="container mx-auto py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Blog</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Insights, news, and stories from the team at Procyon Dynamics.
          </p>
        </div>
      </section>

      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
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
                  <CardTitle className="mt-2 text-xl font-bold">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="mt-2 flex-1">{post.excerpt}</CardDescription>
                  <Link href={`/blog/${post.slug}`} className="mt-4">
                    <Button variant="link" className="p-0">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
