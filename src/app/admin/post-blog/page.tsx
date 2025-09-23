
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
                        <h1 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl animate-fade-in-down">Create a New Blog Post</h1>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground animate-fade-in-up [animation-delay:200ms]">
                            Fill out the form below to publish a new article to the blog. The preview will update as you type.
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
                            <BlogPreview data={previewData} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
