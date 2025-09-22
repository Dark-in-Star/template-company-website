
'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';

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
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder={placeholder} {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-2">
          {onCancel && (
            <Button type="button" variant="ghost" onClick={onCancel}>
              Cancel
            </Button>
          )}
          <Button type="submit">{isEditing ? 'Save' : 'Comment'}</Button>
        </div>
      </form>
    </Form>
  );
}
