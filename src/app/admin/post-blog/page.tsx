
'use client';
import { useState } from 'react';
import { PostBlogForm } from './PostBlogForm';
import { BlogPreview } from './BlogPreview';
import type { BlogPostFormValues } from './PostBlogForm';

export default function PostBlogPage() {
    const [previewData, setPreviewData] = useState<Partial<BlogPostFormValues>>({});

    return (
        <>
            <section className="bg-secondary py-12 md:py-16">
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
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                        <div>
                            <PostBlogForm onFormChange={setPreviewData} />
                        </div>
                        <div>
                            <h2 className="font-heading mb-4 text-2xl font-bold tracking-tighter">Live Preview</h2>
                            <BlogPreview data={previewData} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
