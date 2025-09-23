'use client';

import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import type { Comment } from '@/lib/types';

const CommentsComponent = dynamic(() => import('@/components/comments/Comments').then(mod => mod.Comments), {
    loading: () => <Skeleton className="h-[400px] w-full" />,
    ssr: false,
});

export function ClientComments({ initialComments }: { initialComments: Comment[] }) {
    return <CommentsComponent initialComments={initialComments} />;
}
