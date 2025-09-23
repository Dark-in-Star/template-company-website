
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

  const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);

  const animate = (timestamp: number) => {
    if (startTime.current === null) {
      startTime.current = timestamp;
    }

    const elapsedTime = timestamp - startTime.current;
    const progress = Math.min(elapsedTime / duration, 1);

    let currentValue;

    // Staged animation logic
    if (progress < 0.1) { // 0% -> 50% in the first 10% of time
      currentValue = start + (end * 0.50) * (progress / 0.1);
    } else if (progress < 0.2) { // 50% -> 75%
      currentValue = start + (end * 0.50) + (end * 0.25) * ((progress - 0.1) / 0.1);
    } else if (progress < 0.3) { // 75% -> 88%
      currentValue = start + (end * 0.75) + (end * 0.13) * ((progress - 0.2) / 0.1);
    } else if (progress < 0.4) { // 88% -> 95%
        currentValue = start + (end * 0.88) + (end * 0.07) * ((progress - 0.3) / 0.1);
    } else { // 95% -> 100% smoothly
        const remainingProgress = (progress - 0.4) / 0.6;
        currentValue = start + (end * 0.95) + (end * 0.05) * easeOutQuint(remainingProgress);
    }
    
    setValue(currentValue);

    if (progress < 1) {
      animationFrameId.current = requestAnimationFrame(animate);
    } else {
      setValue(end);
      setIsCounting(false);
      setIsFinished(true);
    }
  };

  const startAnimation = useCallback(() => {
    if (isCounting) return;
    setIsCounting(true);
    setIsFinished(false);
    startTime.current = null;
    animationFrameId.current = requestAnimationFrame(animate);
  }, [isCounting, animate]);

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
