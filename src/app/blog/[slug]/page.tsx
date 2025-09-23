

import { blogPosts, teamMembers, comments as allComments } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import * as placeholderImages from '@/app/lib/placeholder-images.json';
import type { Image as ImageType } from '@/lib/types';
import { Comments } from '@/components/comments/Comments';
import { LeadForm } from '@/components/shared/LeadForm';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }
  const authorImage = placeholderImages.author as ImageType;
  const authorDetails = teamMembers.find(member => member.name === post.author);
  const authorInitials = post.author.split(' ').map(n => n[0]).join('');
  const comments = allComments[params.slug] || [];

  return (
    <>
      <section className="bg-background py-12 md:py-16">
        <div className="container mx-auto max-w-4xl text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl">{post.title}</h1>
            <div className="mt-6 flex items-center justify-center gap-4">
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
           <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
             <div className="lg:col-span-2">
                <article className="prose max-w-none dark:prose-invert">
                    <Image
                        src={post.image.src}
                        alt={post.title}
                        data-ai-hint={post.image.hint}
                        width={post.image.width}
                        height={post.image.height}
                        className="w-full rounded-lg object-cover shadow-lg"
                    />
                    <p>{post.excerpt}</p>
                    <p>In today's rapidly evolving digital landscape, staying ahead of the curve is not just an advantage; it's a necessity. Businesses are constantly seeking innovative ways to engage their audience, streamline their operations, and drive growth. This is where the power of modern technology comes into play, offering a suite of tools and strategies to transform challenges into opportunities.</p>
                    
                    <h2 className="font-heading">Embracing the Digital Transformation</h2>
                    <p>Digital transformation is more than just adopting new technology. It's about a fundamental shift in how a business operates and delivers value to its customers. The core components of this transformation often include:</p>
                    <ul>
                      <li><strong>Cloud Computing:</strong> Moving from on-premise servers to cloud infrastructure for scalability, flexibility, and cost-efficiency.</li>
                      <li><strong>Artificial Intelligence:</strong> Leveraging AI and machine learning to automate processes, gain insights from data, and personalize customer experiences.</li>
                      <li><strong>Data Analytics:</strong> Using data to make informed decisions, understand customer behavior, and predict market trends.</li>
                    </ul>

                    <blockquote>
                        "The best way to predict the future is to create it."
                        <cite>– Peter Drucker</cite>
                    </blockquote>
                    
                    <h3 className="font-heading">A Deeper Dive into Strategy</h3>
                    <p>A successful digital strategy requires a clear vision and a phased approach. It's not about a complete overhaul overnight. Instead, it involves iterative improvements and a culture of continuous learning. <strong>Starting with a small, high-impact project</strong> can often be the best way to build momentum and demonstrate value. From there, you can scale your efforts across the organization, ensuring that each step is aligned with your overarching business goals.</p>
                    <p>Ultimately, the goal is to create a more agile, resilient, and customer-centric organization. By embracing technology as a strategic enabler, businesses can not only survive but thrive in the face of change, building a sustainable foundation for future success.</p>
                </article>
              </div>
            <aside className="lg:col-span-1">
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
          <Comments initialComments={comments} />
        </div>
      </section>
    </>
  );
}
