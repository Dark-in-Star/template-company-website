
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
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
        <AvatarFallback>{authorInitials}</AvatarFallback>
      </Avatar>
      <div className="flex-1 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="font-semibold">{comment.author.name}</p>
            <p className="text-xs text-muted-foreground">
              {formatDistanceToNow(comment.date)}
            </p>
          </div>
          {!isEditing && (
            <CommentActions
              onEdit={() => setIsEditing(true)}
              onDelete={() => onDelete(comment.id)}
            />
          )}
        </div>
        {isEditing ? (
          <CommentForm
            initialContent={comment.content}
            onSubmit={handleEditSubmit}
            onCancel={() => setIsEditing(false)}
            isEditing
          />
        ) : (
          <p className="text-muted-foreground">{comment.content}</p>
        )}
        {!isEditing && (
          <Button variant="ghost" size="sm" onClick={() => setIsReplying(!isReplying)}>
            Reply
          </Button>
        )}
        {isReplying && (
          <div className="pt-4">
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
