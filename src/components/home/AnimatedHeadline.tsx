
'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedHeadlineProps {
  words: string[];
  interval?: number;
}

export function AnimatedHeadline({ words, interval = 2000 }: AnimatedHeadlineProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);

  React.useEffect(() => {
    const wordInterval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false);
      }, 500); // This should match the animation duration
    }, interval);

    return () => clearInterval(wordInterval);
  }, [words.length, interval]);

  return (
    <span className="animated-word-container text-primary">
      <span
        key={currentIndex}
        className={cn('animated-word', !isAnimating && 'animate-in', isAnimating && 'animate-out')}
      >
        {words[currentIndex]}
      </span>
    </span>
  );
}
