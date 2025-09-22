'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

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

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  resume: z.any().refine(
      (files) => files?.length === 1, 'Resume is required.'
    ),
  coverLetter: z.string().min(10, { message: 'Cover letter must be at least 10 characters.' }),
});

export function CareerForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      coverLetter: '',
    },
  });

  const resumeRef = form.register("resume");

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Application Sent!',
      description: "Thanks for your interest. We'll be in touch if you're a good fit.",
    });
    form.reset();
  }

  return (
    <Card className="w-full">
        <CardHeader className="text-center">
            <CardTitle className="text-2xl">Apply Now</CardTitle>
            <CardDescription>Interested in joining our team? Fill out the form below.</CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                        <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                        <Input placeholder="john.doe@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                    control={form.control}
                    name="resume"
                    render={({ field }) => {
                        return (
                        <FormItem>
                            <FormLabel>Resume</FormLabel>
                            <FormControl>
                            <Input type="file" accept=".pdf,.doc,.docx" {...resumeRef} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        );
                    }}
                />
                <FormField
                control={form.control}
                name="coverLetter"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Cover Letter</FormLabel>
                    <FormControl>
                        <Textarea placeholder="Tell us why you'd be a great fit..." className="min-h-[150px]" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit" className="w-full" size="lg">Submit Application</Button>
            </form>
            </Form>
        </CardContent>
    </Card>
  );
}
