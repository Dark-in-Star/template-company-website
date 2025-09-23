
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import * as React from 'react';
import { User, Mail, Phone as PhoneIcon, MessageSquare, Send } from 'lucide-react';

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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { countryCodes } from '@/lib/data';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  phone: z.object({
    countryCode: z.string().optional(),
    number: z.string().optional(),
  }).optional(),
  message: z.string().optional(),
});

export function ContactForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: {
        countryCode: 'United States-+1',
        number: ''
      },
      message: '',
    },
  });

  React.useEffect(() => {
    async function fetchCountry() {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const userCountry = data.country_name;
        const matchingCountry = countryCodes.find(c => c.name === userCountry);
        if (matchingCountry) {
          form.setValue('phone.countryCode', `${matchingCountry.name}-${matchingCountry.code}`);
        }
      } catch (error) {
        console.error('Failed to fetch country:', error);
      }
    }

    fetchCountry();
  }, [form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you would handle form submission here (e.g., send an email, API call).
    const countryCodeValue = values.phone?.countryCode ? values.phone.countryCode.split('-')[1] || '' : '';
    const fullPhoneNumber = `${countryCodeValue}${values.phone?.number || ''}`;
    const submissionValues = {
        ...values,
        phone: fullPhoneNumber,
    }
    console.log(submissionValues);
    toast({
      title: 'Message Sent!',
      description: "Thanks for reaching out. We'll get back to you shortly.",
    });
    form.reset();
  }

  return (
    <Card className="w-full">
        <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
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
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <FormControl>
                                <Input placeholder="John Doe" {...field} className="pl-10" />
                            </FormControl>
                        </div>
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
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <FormControl>
                                <Input placeholder="john.doe@example.com" {...field} className="pl-10" />
                            </FormControl>
                        </div>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormItem>
                    <FormLabel>Phone Number (Optional)</FormLabel>
                    <div className="relative">
                         <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <div className="flex gap-2">
                            <FormField
                                control={form.control}
                                name="phone.countryCode"
                                render={({ field }) => (
                                    <FormItem className="w-1/3">
                                        <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Code" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {countryCodes.map(country => (
                                                    <SelectItem key={country.name} value={`${country.name}-${country.code}`}>
                                                        {country.code} ({country.short})
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone.number"
                                render={({ field }) => (
                                    <FormItem className="flex-1">
                                        <FormControl>
                                            <Input type="tel" placeholder="123-456-7890" {...field} className="pl-10"/>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <FormMessage />
                </FormItem>
                <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Message (Optional)</FormLabel>
                        <div className="relative">
                            <MessageSquare className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                            <FormControl>
                                <Textarea placeholder="Your message here..." className="min-h-[150px] pl-10" {...field} />
                            </FormControl>
                        </div>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit" className="w-full" size="lg">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                </Button>
            </form>
            </Form>
        </CardContent>
    </Card>
  );
}
