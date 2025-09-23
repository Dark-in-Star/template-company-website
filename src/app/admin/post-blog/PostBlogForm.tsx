
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Send } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

// Dynamically import CKEditor
const CKEditorComponent = dynamic(() => import('./CKEditorComponent'), {
    ssr: false,
    loading: () => <Skeleton className="h-[300px] w-full" />,
});

const formSchema = z.object({
  title: z.string().min(5, { message: 'Title must be at least 5 characters.' }).optional(),
  author: z.string().min(2, { message: 'Author name must be at least 2 characters.' }).optional(),
  excerpt: z.string().min(20, { message: 'Excerpt must be at least 20 characters.' }).optional(),
  image: z.any().optional(),
  content: z.string().min(100, { message: 'Content must be at least 100 characters.' }).optional(),
  slug: z.string().min(3, { message: 'Slug must be at least 3 characters.' }).optional(),
  metaTitle: z.string().min(10, { message: 'Meta title must be at least 10 characters.' }).optional(),
  metaDescription: z.string().min(20, { message: 'Meta description must be at least 20 characters.' }).optional(),
  metaImage: z.any().optional(),
  keywords: z.string().optional(),
  jsonLd: z.string().optional(),
});

export type BlogPostFormValues = z.infer<typeof formSchema>;

export function PostBlogForm({ onFormChange }: { onFormChange: (data: Partial<BlogPostFormValues>) => void }) {
  const { toast } = useToast();
  const form = useForm<BlogPostFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      author: 'Procellence',
      excerpt: '',
      content: '',
      slug: '',
      metaTitle: '',
      metaDescription: '',
      keywords: '',
      jsonLd: '',
    },
    mode: 'onChange',
  });

  const imageRef = form.register("image");
  const metaImageRef = form.register("metaImage");

  useEffect(() => {
    const subscription = form.watch((value) => {
      onFormChange(value);
    });
    return () => subscription.unsubscribe();
  }, [form, onFormChange]);

  function onSubmit(values: BlogPostFormValues) {
    console.log('New Blog Post Data:', values);
    toast({
      title: 'Blog Post Submitted!',
      description: "Your new blog post has been submitted for review.",
    });
    form.reset();
    onFormChange({});
  }

  return (
    <Card className="w-full">
        <CardHeader>
            <CardTitle>Blog Post Details</CardTitle>
            <CardDescription>
                Provide the details for your new blog post. All fields are optional for drafting.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Post Title</FormLabel>
                            <FormControl>
                                <Input placeholder="The Future of AI" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="excerpt"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Excerpt</FormLabel>
                            <FormControl>
                                <Textarea placeholder="A short summary of the blog post..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Featured Image</FormLabel>
                            <FormControl>
                            <Input type="file" accept="image/*" {...imageRef} 
                                onChange={(e) => field.onChange(e.target.files)}
                            />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Content</FormLabel>
                            <FormControl>
                                <CKEditorComponent
                                    value={field.value || ''}
                                    onChange={(data) => field.onChange(data)}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Card className="bg-secondary/50">
                    <CardHeader>
                        <CardTitle>SEO Details</CardTitle>
                        <CardDescription>
                            Fill in the details for search engine optimization.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <FormField
                            control={form.control}
                            name="slug"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Slug</FormLabel>
                                    <FormControl>
                                        <Input placeholder="the-future-of-ai" {...field} />
                                    </FormControl>
                                    <FormDescription>A unique, URL-friendly version of the title.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="metaTitle"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Meta Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="The Future of AI in Business: Trends to Watch" {...field} />
                                    </FormControl>
                                     <FormDescription>The title that will appear in search engine results. Recommended: 50-60 characters.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="metaDescription"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Meta Description</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="A concise summary for search engine snippets." {...field} />
                                    </FormControl>
                                    <FormDescription>Recommended: 150-160 characters.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="metaImage"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Meta Image (for Social Sharing)</FormLabel>
                                    <FormControl>
                                        <Input type="file" accept="image/*" {...metaImageRef}
                                            onChange={(e) => field.onChange(e.target.files)}
                                        />
                                    </FormControl>
                                     <FormDescription>Recommended size: 1200x630 pixels.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="keywords"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Keywords</FormLabel>
                                    <FormControl>
                                        <Input placeholder="AI, business, technology, trends" {...field} />
                                    </FormControl>
                                    <FormDescription>Comma-separated keywords for search indexing.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="jsonLd"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>JSON-LD Schema</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder='{ "@context": "https://schema.org", ... }' className="min-h-[150px] font-mono text-xs" {...field} />
                                    </FormControl>
                                    <FormDescription>Enter a valid JSON-LD schema for advanced SEO. This will override the default schema.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>

                <Button type="submit" className="w-full" size="lg">
                    Submit Post
                    <Send className="ml-2 h-4 w-4" />
                </Button>
            </form>
            </Form>
        </CardContent>
    </Card>
  );
}
