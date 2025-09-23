
'use client';

import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import type { BlogPostFormValues } from './PostBlogForm';

interface BlogPreviewProps {
  data: Partial<BlogPostFormValues>;
}

export function BlogPreview({ data }: BlogPreviewProps) {
  const authorInitials = data.author
    ? data.author.split(' ').map((n) => n[0]).join('')
    : 'JD';
  const today = new Date().toISOString().split('T')[0];

  return (
    <Card className="overflow-hidden">
      <div className="p-6">
        <h1 className="font-heading text-2xl font-bold tracking-tighter sm:text-3xl">
          {data.title || 'Blog Post Title'}
        </h1>
        <div className="mt-4 flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://picsum.photos/seed/avatar/100/100" />
            <AvatarFallback>{authorInitials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{data.author || 'John Doe'}</p>
            <p className="text-sm text-muted-foreground">
              Published on <time dateTime={today}>{today}</time>
            </p>
          </div>
        </div>
      </div>
      
      {data.image && (
        <Image
          src={typeof data.image === 'string' ? data.image : URL.createObjectURL(data.image[0])}
          alt={data.title || 'Blog post image'}
          width={800}
          height={450}
          className="w-full object-cover shadow-lg"
        />
      )}
      
      <div className="p-6">
        <article className="prose max-w-none dark:prose-invert">
          <p className="lead">{data.excerpt || 'This is where the excerpt of the blog post will appear.'}</p>
          <div dangerouslySetInnerHTML={{ __html: data.content || '<p>Full content will appear here...</p>' }} />
        </article>
      </div>
    </Card>
  );
}
