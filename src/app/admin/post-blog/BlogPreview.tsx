
'use client';

import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { BlogPostFormValues } from './PostBlogForm';

interface BlogPreviewProps {
  data: Partial<BlogPostFormValues>;
}

export function BlogPreview({ data }: BlogPreviewProps) {
  const authorInitials = data.author
    ? data.author.split(' ').map((n) => n[0]).join('')
    : 'JD';
  const today = new Date().toISOString().split('T')[0];

  const getImageUrl = (image: any) => {
    if (!image) return null;
    if (typeof image === 'string') return image;
    if (image instanceof File) return URL.createObjectURL(image);
    if (image.length > 0 && image[0] instanceof File) return URL.createObjectURL(image[0]);
    return null;
  }

  const featuredImageUrl = getImageUrl(data.image);
  const metaImageUrl = getImageUrl(data.metaImage);

  return (
    <Card className="overflow-hidden">
        <CardHeader>
            <CardTitle>Live Preview</CardTitle>
            <CardDescription>This is how your post will look.</CardDescription>
        </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h2 className="font-heading text-2xl font-bold tracking-tighter sm:text-3xl">
            {data.title || 'Blog Post Title'}
          </h2>
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
        
        {featuredImageUrl && (
          <Image
            src={featuredImageUrl}
            alt={data.title || 'Blog post image'}
            width={800}
            height={450}
            className="w-full rounded-lg object-cover shadow-lg"
          />
        )}
        
        <article className="prose max-w-none dark:prose-invert">
          <p className="lead">{data.excerpt || 'This is where the excerpt of the blog post will appear.'}</p>
          <div dangerouslySetInnerHTML={{ __html: data.content || '<p>Full content will appear here...</p>' }} />
        </article>

        <div className="space-y-4 rounded-lg border bg-secondary p-4">
            <h3 className="font-heading text-lg font-bold">SEO & Meta Preview</h3>
            <div className="space-y-2 text-sm">
                <p><strong>Slug:</strong> {data.slug || 'your-unique-slug'}</p>
                <p><strong>Meta Title:</strong> {data.metaTitle || 'Your Meta Title'}</p>
                <p><strong>Meta Description:</strong> {data.metaDescription || 'Your meta description for search engines.'}</p>
                 <p><strong>Keywords:</strong> {data.keywords || 'keyword1, keyword2'}</p>
                {metaImageUrl && (
                    <div>
                        <p><strong>Meta Image:</strong></p>
                        <Image src={metaImageUrl} alt="Meta image preview" width={200} height={100} className="mt-2 rounded-md object-cover" />
                    </div>
                )}
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
