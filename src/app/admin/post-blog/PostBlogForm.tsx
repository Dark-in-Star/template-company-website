
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

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

const formSchema = z.object({
  title: z.string().min(5, { message: 'Title must be at least 5 characters.' }),
  author: z.string().min(2, { message: 'Author name must be at least 2 characters.' }),
  excerpt: z.string().min(20, { message: 'Excerpt must be at least 20 characters.' }),
  image: z.any().refine(
      (files) => files?.length === 1, 'Featured Image is required.'
    ),
  content: z.string().min(100, { message: 'Content must be at least 100 characters.' }),
});

export function PostBlogForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      author: '',
      excerpt: '',
      content: '',
    },
  });

  const imageRef = form.register("image");

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you would handle form submission here.
    // This could involve a server action to save the blog post to a database or CMS.
    console.log('New Blog Post Data:', values);

    toast({
      title: 'Blog Post Submitted!',
      description: "Your new blog post has been submitted for review.",
    });
    form.reset();
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
                            <Input type="file" accept="image/*" {...imageRef} />
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
                                <Textarea placeholder="Write your full blog post content here. Markdown is supported." className="min-h-[300px]" {...field} />
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
