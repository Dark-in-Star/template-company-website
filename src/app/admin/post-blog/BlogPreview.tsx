
'use client';

import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { BlogPostFormValues } from './PostBlogForm';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';
import * as React from 'react';

interface BlogPreviewProps {
  data: Partial<BlogPostFormValues>;
}

export function BlogPreview({ data }: BlogPreviewProps) {
  const [copied, setCopied] = React.useState(false);
  const [fullUrl, setFullUrl] = React.useState('');

  const authorInitials = data.author
    ? data.author.split(' ').map((n) => n[0]).join('')
    : 'JD';
  const today = new Date().toISOString().split('T')[0];

  React.useEffect(() => {
    const siteUrl = window.location.origin;
    setFullUrl(`${siteUrl}/blog/${data.slug || 'your-unique-slug'}`);
  }, [data.slug]);

  const getImageUrl = (image: any) => {
    if (image instanceof File) {
      return URL.createObjectURL(image);
    }
    return null;
  }

  const featuredImageUrl = getImageUrl(data.image);
  const metaImageUrl = getImageUrl(data.metaImage);

  const handleCopy = () => {
    if (!fullUrl) return;
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

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
                <div>
                  <p><strong>Full URL:</strong></p>
                  <div className="flex items-center gap-2 mt-1">
                      <p className="truncate text-muted-foreground flex-1">{fullUrl || 'Generating URL...'}</p>
                      <Button variant="ghost" size="icon" onClick={handleCopy} className="h-8 w-8">
                          {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                      </Button>
                  </div>
                </div>
                <p><strong>Meta Title:</strong> {data.metaTitle || 'Your Meta Title'}</p>
                <p><strong>Meta Description:</strong> {data.metaDescription || 'Your meta description for search engines.'}</p>
                 <p><strong>Keywords:</strong> {data.keywords || 'keyword1, keyword2'}</p>
                {metaImageUrl && (
                    <div>
                        <p><strong>Meta Image:</strong></p>
                        <Image src={metaImageUrl} alt="Meta image preview" width={200} height={100} className="mt-2 rounded-md object-cover" />
                    </div>
                )}
                {data.jsonLd && (
                    <div>
                        <p><strong>JSON-LD Schema:</strong></p>
                        <pre className="mt-2 w-full whitespace-pre-wrap rounded-md bg-gray-800 p-2 text-xs text-white">{data.jsonLd}</pre>
                    </div>
                )}
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
