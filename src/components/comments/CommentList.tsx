
'use client';

import * as React from 'react';
import type { Comment as CommentType } from '@/lib/types';
import { Comment } from './Comment';

interface CommentListProps {
  comments: CommentType[];
  onReply: (content: string, parentId: string) => void;
  onEdit: (commentId: string, newContent: string) => void;
  onDelete: (commentId: string) => void;
}

export function CommentList({ comments, onReply, onEdit, onDelete }: CommentListProps) {
  return (
    <div className="space-y-8">
      {comments.map(comment => (
        <Comment
          key={comment.id}
          comment={comment}
          onReply={onReply}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
