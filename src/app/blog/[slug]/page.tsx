import { blogPosts } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { teamMembers } from '@/lib/data';

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

  const authorDetails = teamMembers.find(member => member.name === post.author);
  const authorImage = authorDetails?.image.src || 'https://picsum.photos/seed/avatar/100/100';
  const authorImageHint = authorDetails?.image.hint || 'person';
  const authorInitials = post.author.split(' ').map(n => n[0]).join('');

  return (
    <>
      <section className="bg-primary/5">
        <div className="container mx-auto max-w-4xl py-16 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-heading">{post.title}</h1>
            <div className="mt-6 flex items-center justify-center gap-4">
                <Avatar>
                    <AvatarImage src={authorImage} alt={post.author} data-ai-hint={authorImageHint}/>
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
        <div className="container mx-auto -mt-16 max-w-5xl">
            <Image
                src={post.image.src}
                alt={post.title}
                data-ai-hint={post.image.hint}
                width={post.image.width}
                height={post.image.height}
                className="w-full rounded-lg object-cover shadow-lg"
            />
        </div>
      </section>
      
      <section>
        <div className="container mx-auto max-w-3xl">
            <article className="prose prose-lg max-w-none dark:prose-invert">
                <p>{post.excerpt}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <h2 className="font-heading">A Deeper Dive</h2>
                <p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu.</p>
                <p>Aenean consequat lorem ut felis. Ut at sapien morbi platform. Fusce cursus egestas velit. Mauris tortor felis, interdum in, eleifend ut, commodo vulputate, justo. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
            </article>
        </div>
      </section>
    </>
  );
}
