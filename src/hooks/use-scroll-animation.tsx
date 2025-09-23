
'use client';

import { useState, useEffect, type RefObject } from 'react';

interface UseScrollAnimationProps {
  ref: RefObject<Element>;
  threshold?: number;
  triggerOnce?: boolean;
}

export function useScrollAnimation({ ref, threshold = 0.1, triggerOnce = true }: UseScrollAnimationProps) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (triggerOnce) {
              observer.unobserve(element);
            }
          } else if (!triggerOnce) {
            setIsInView(false);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, threshold, triggerOnce]);

  return { ref, isInView };
}
