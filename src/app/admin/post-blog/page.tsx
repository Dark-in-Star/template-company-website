
import { PostBlogForm } from './PostBlogForm';

export const metadata = {
    title: 'Post a New Blog',
    description: 'Create and publish a new blog post.',
};

export default function PostBlogPage() {
    return (
        <>
            <section className="bg-secondary">
                <div className="container mx-auto">
                    <div className="text-center">
                        <h1 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl">Create a New Blog Post</h1>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                            Fill out the form below to publish a new article to the blog.
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mx-auto max-w-3xl">
                    <PostBlogForm />
                </div>
            </section>
        </>
    );
}
