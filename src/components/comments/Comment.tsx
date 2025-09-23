
'use client';

import * as React from 'react';
import Image from 'next/image';
import type { Comment as CommentType } from '@/lib/types';
import { formatDistanceToNow } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { CommentForm } from './CommentForm';
import { CommentActions } from './CommentActions';

interface CommentProps {
  comment: CommentType;
  onReply: (content: string, parentId: string) => void;
  onEdit: (commentId: string, newContent: string) => void;
  onDelete: (commentId: string) => void;
}

export function Comment({ comment, onReply, onEdit, onDelete }: CommentProps) {
  const [isReplying, setIsReplying] = React.useState(false);
  const [isEditing, setIsEditing] = React.useState(false);
  const authorInitials = comment.author.name.split(' ').map(n => n[0]).join('');

  const handleReplySubmit = (content: string) => {
    onReply(content, comment.id);
    setIsReplying(false);
  };

  const handleEditSubmit = (content: string) => {
    onEdit(comment.id, content);
    setIsEditing(false);
  };

  return (
    <div className="flex items-start gap-3">
      <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
        <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
        <AvatarFallback>{authorInitials}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex flex-col">
          {isEditing ? (
            <CommentForm
              initialContent={comment.content}
              onSubmit={handleEditSubmit}
              onCancel={() => setIsEditing(false)}
              isEditing
            />
          ) : (
            <div className="group relative rounded-lg bg-secondary p-3">
              <div className="flex items-center justify-between">
                <p className="font-semibold">{comment.author.name}</p>
                <div className="absolute right-1 top-1 opacity-0 group-hover:opacity-100">
                    <CommentActions
                        onEdit={() => setIsEditing(true)}
                        onDelete={() => onDelete(comment.id)}
                    />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{comment.content}</p>
            </div>
          )}

          <div className="flex items-center gap-2 pl-3 pt-1">
            <p className="text-xs text-muted-foreground">
              {formatDistanceToNow(comment.date)}
            </p>
            {!isEditing && (
              <>
                <span className="text-xs text-muted-foreground">&middot;</span>
                <Button variant="link" size="sm" className="h-auto p-0 text-xs" onClick={() => setIsReplying(!isReplying)}>
                  Reply
                </Button>
              </>
            )}
          </div>
        </div>

        {isReplying && (
          <div className="pt-2">
            <CommentForm
              onSubmit={handleReplySubmit}
              onCancel={() => setIsReplying(false)}
              placeholder={`Replying to ${comment.author.name}...`}
            />
          </div>
        )}
        
        {comment.replies && comment.replies.length > 0 && (
          <div className="pt-4 space-y-4">
            {comment.replies.map(reply => (
              <Comment key={reply.id} comment={reply} onReply={onReply} onEdit={onEdit} onDelete={onDelete} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
