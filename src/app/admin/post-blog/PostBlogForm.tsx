
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
});

export type BlogPostFormValues = z.infer<typeof formSchema>;

export function PostBlogForm({ onFormChange }: { onFormChange: (data: Partial<BlogPostFormValues>) => void }) {
  const { toast } = useToast();
  const form = useForm<BlogPostFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      author: '',
      excerpt: '',
      content: '',
    },
    mode: 'onChange',
  });

  const imageRef = form.register("image");

  const watchedValues = form.watch();

  useEffect(() => {
    const subscription = form.watch((value) => {
      onFormChange(value);
    });
    return () => subscription.unsubscribe();
  }, [form, onFormChange]);

  function onSubmit(values: BlogPostFormValues) {
    const imageData = values.image && values.image.length > 0 ? values.image[0] : null;
    const submissionData = {
        ...values,
        image: imageData,
    }
    console.log('New Blog Post Data:', submissionData);

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
                Provide the details for your new blog post. All fields are required.
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
                    name="author"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Author Name</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" {...field} />
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
                    render={({ field }) => {
                        return (
                        <FormItem>
                            <FormLabel>Featured Image</FormLabel>
                            <FormControl>
                            <Input type="file" accept="image/*" {...imageRef} 
                                onChange={(e) => {
                                    field.onChange(e.target.files);
                                    if (e.target.files && e.target.files.length > 0) {
                                        const file = e.target.files[0];
                                        const reader = new FileReader();
                                        reader.onloadend = () => {
                                            onFormChange({...watchedValues, image: reader.result as string});
                                        }
                                        reader.readAsDataURL(file);
                                    }
                                }}
                            />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        );
                    }}
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
