
import { blogPosts, comments as allComments } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import * as placeholderImages from '@/app/lib/placeholder-images.json';
import type { ImageType as ImageType } from '@/lib/types';
import { LeadForm } from '@/components/shared/LeadForm';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import type { Metadata } from 'next';
import { ClientComments } from '@/components/comments/ClientComments';


export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const metaTitle = post.metaTitle || post.title;
  const metaDescription = post.metaDescription || post.excerpt;
  const metaImage = post.metaImage ? post.metaImage.src : post.image.src;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://procellence.com';

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: 'article',
      url: `${siteUrl}/blog/${post.slug}`,
      images: [
        {
          url: metaImage,
          width: post.metaImage ? post.metaImage.width : post.image.width,
          height: post.metaImage ? post.metaImage.height : post.image.height,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }
  const authorImage = placeholderImages.author as ImageType;
  const authorInitials = post.author.split(' ').map(n => n[0]).join('');
  const comments = allComments[params.slug] || [];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://procellence.com';

  const defaultJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${post.slug}`,
    },
    headline: post.title,
    description: post.excerpt,
    image: post.metaImage ? post.metaImage.src : post.image.src,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Procellence Technology',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/img/logo.webp`,
      },
    },
    datePublished: post.date,
  };

  let jsonLd;
  try {
      jsonLd = post.jsonLd && post.jsonLd.trim() !== '' && post.jsonLd.trim() !== '{}' ? JSON.parse(post.jsonLd) : defaultJsonLd;
  } catch(e) {
      console.error("Failed to parse jsonLd", e);
      jsonLd = defaultJsonLd;
  }


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="bg-background py-12 md:py-16">
        <div className="container mx-auto max-w-4xl text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl animate-fade-in-down">{post.title}</h1>
            <div className="mt-6 flex items-center justify-center gap-4 animate-fade-in-up [animation-delay:200ms]">
                <Avatar>
                    <AvatarImage src={authorImage.src} alt={post.author} data-ai-hint={authorImage.hint}/>
                    <AvatarFallback>{authorInitials}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-semibold">{post.author}</p>
                    <p className="text-sm text-muted-foreground">
                        Published on <time dateTime={post.date}>{post.date}</time>
                    </p>
                </div>
            </div>
        </div>
      </section>
      
      <section className="py-0">
        <div className="container mx-auto">
           <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 xl:grid-cols-4">
             <div className="lg:col-span-2 xl:col-span-3">
                <article className="prose max-w-none dark:prose-invert 2xl:prose-xl mx-auto">
                    <Image
                        src={post.image.src}
                        alt={post.title}
                        data-ai-hint={post.image.hint}
                        width={post.image.width}
                        height={post.image.height}
                        className="w-full rounded-lg object-cover shadow-lg"
                    />
                    <p className="lead">{post.excerpt}</p>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>
              </div>
            <aside className="lg:col-span-1 xl:col-span-1">
                <div className="sticky top-24">
                    <Card>
                        <CardHeader>
                            <CardTitle>Ready to Innovate?</CardTitle>
                            <CardDescription>
                                Leave your details below and one of our experts will get in touch to discuss how we can help.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <LeadForm />
                        </CardContent>
                    </Card>
                </div>
            </aside>
           </div>
        </div>
      </section>

      <section className="bg-secondary py-12 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <ClientComments initialComments={comments} />
        </div>
      </section>
    </>
  );
}
