
'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const formSchema = z.object({
  content: z.string().min(1, 'Comment cannot be empty.'),
});

interface CommentFormProps {
  onSubmit: (content: string) => void;
  onCancel?: () => void;
  initialContent?: string;
  placeholder?: string;
  isEditing?: boolean;
}

// Mock current user - in a real app, this would come from an auth context
const currentUser = {
  name: 'Current User',
  avatar: '/img/current-user.webp',
};
const userInitials = currentUser.name.split(' ').map(n => n[0]).join('');

export function CommentForm({
  onSubmit,
  onCancel,
  initialContent = '',
  placeholder = 'Add a comment...',
  isEditing = false,
}: CommentFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: initialContent,
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    onSubmit(values.content);
    if (!isEditing) {
      form.reset();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <div className="flex items-start gap-3">
          {!isEditing && (
            <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
              <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
              <AvatarFallback>{userInitials}</AvatarFallback>
            </Avatar>
          )}
          <div className="flex-1">
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea 
                      placeholder={placeholder} 
                      {...field}
                      className="bg-secondary focus-visible:ring-1 focus-visible:ring-offset-0"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
             <div className="flex justify-end gap-2 pt-2">
                {onCancel && (
                    <Button type="button" variant="ghost" onClick={onCancel}>
                    Cancel
                    </Button>
                )}
                <Button type="submit">{isEditing ? 'Save' : 'Comment'}</Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
