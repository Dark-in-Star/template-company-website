
'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { useInteractiveAnimation } from '@/hooks/use-interactive-animation';

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
}

export function InteractiveCard({ children, className }: InteractiveCardProps) {
  const { wrapperRef, cardRef, isVisible, isPinned } = useInteractiveAnimation();

  return (
    <div
      ref={wrapperRef}
      className={cn(
        'interactive-card-wrapper',
        { 'is-visible': isVisible, 'is-pinned': isPinned },
        className
      )}
    >
      <div ref={cardRef} className="interactive-card-content rounded-lg border bg-card p-6 shadow-md">
        {children}
      </div>
    </div>
  );
}
