
'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

export function ScrollAnimation({ children, className, delay = 0, threshold = 0.1, triggerOnce = true }: ScrollAnimationProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { isInView } = useScrollAnimation({ ref, threshold, triggerOnce });

  const style = {
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={ref}
      style={style}
      className={cn(
        'transition-all duration-500 ease-out',
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
    >
      {children}
    </div>
  );
}
