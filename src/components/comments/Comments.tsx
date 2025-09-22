
'use client';

import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { Comment as CommentType } from '@/lib/types';
import { CommentForm } from './CommentForm';
import { CommentList } from './CommentList';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface CommentsProps {
  initialComments: CommentType[];
}

// Mock current user - in a real app, this would come from an auth context
const currentUser = {
  name: 'Current User',
  avatar: 'https://picsum.photos/seed/current-user/40/40',
};

export function Comments({ initialComments }: CommentsProps) {
  const [comments, setComments] = React.useState<CommentType[]>(initialComments);

  const addComment = (content: string, parentId: string | null = null) => {
    const newComment: CommentType = {
      id: uuidv4(),
      author: currentUser,
      date: new Date().toISOString(),
      content,
      replies: [],
    };

    if (parentId) {
      // Add a reply
      const updatedComments = comments.map(comment => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: [...(comment.replies || []), newComment],
          };
        }
        return comment;
      });
      setComments(updatedComments);
    } else {
      // Add a top-level comment
      setComments([newComment, ...comments]);
    }
  };

  const editComment = (commentId: string, newContent: string) => {
    const updatedComments = comments.map(comment => {
      if (comment.id === commentId) {
        return { ...comment, content: newContent };
      }
      if (comment.replies) {
        return {
          ...comment,
          replies: comment.replies.map(reply => 
            reply.id === commentId ? { ...reply, content: newContent } : reply
          ),
        };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  const deleteComment = (commentId: string) => {
    const updatedComments = comments.reduce((acc, comment) => {
      if (comment.id === commentId) {
        return acc; // Skip adding the comment to be deleted
      }
      if (comment.replies) {
        comment.replies = comment.replies.filter(reply => reply.id !== commentId);
      }
      acc.push(comment);
      return acc;
    }, [] as CommentType[]);
    setComments(updatedComments);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{comments.length} Comments</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <CommentForm onSubmit={addComment} />
        <CommentList
          comments={comments}
          onReply={addComment}
          onEdit={editComment}
          onDelete={deleteComment}
        />
      </CardContent>
    </Card>
  );
}
