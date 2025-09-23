
'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface UseCountUpProps {
  end: number;
  start?: number;
  duration?: number;
  startOnMount?: boolean;
}

export function useCountUp({
  end,
  start = 0,
  duration = 2000,
  startOnMount = true,
}: UseCountUpProps) {
  const [value, setValue] = useState(start);
  const [isCounting, setIsCounting] = useState(startOnMount);
  const [isFinished, setIsFinished] = useState(false);
  const animationFrameId = useRef<number>();
  const startTime = useRef<number | null>(null);
  const remaining = useRef(end - start);

  const startAnimation = useCallback(() => {
    setIsCounting(true);
    setIsFinished(false);
    startTime.current = null;
    animationFrameId.current = requestAnimationFrame(animate);
  }, []);

  const animate = (timestamp: number) => {
    if (startTime.current === null) {
      startTime.current = timestamp;
    }

    const progress = Math.min((timestamp - startTime.current) / duration, 1);
    const currentValue = start + remaining.current * progress;
    
    setValue(currentValue);

    if (progress < 1) {
      animationFrameId.current = requestAnimationFrame(animate);
    } else {
      setIsCounting(false);
      setIsFinished(true);
    }
  };

  useEffect(() => {
    if (startOnMount) {
      startAnimation();
    }
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [startOnMount, startAnimation]);

  return { value, start: startAnimation, isCounting, isFinished };
}
