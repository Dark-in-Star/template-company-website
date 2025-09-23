
'use client';

import { useState, useRef, useEffect } from 'react';

/**
 * A hook to create complex scroll-based animations including pinning and parallax.
 *
 * It uses IntersectionObserver to detect when an element is in the viewport and
 * applies CSS classes to trigger animations. It also uses requestAnimationFrame
 * for a smooth, performant parallax effect.
 *
 * @returns {object} Refs for the wrapper and card elements, and visibility/pinning state.
 */
export function useInteractiveAnimation() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // Observer for initial visibility and pinning
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        // Pin when the top of the wrapper hits the top of the viewport
        setIsPinned(entry.boundingClientRect.top <= 0 && entry.isIntersecting);
      },
      {
        // Observe from the top of the screen to the bottom
        rootMargin: '0px 0px -100% 0px',
        threshold: 0,
      }
    );

    observer.observe(wrapper);

    // Parallax scroll effect
    const handleScroll = () => {
      if (!isPinned || !cardRef.current) {
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
          animationFrameId.current = null;
        }
        return;
      }

      animationFrameId.current = requestAnimationFrame(() => {
        const { top, height } = wrapper.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Calculate the progress of the scroll through the pinned section
        const scrollProgress = Math.max(0, Math.min(1, -top / (height - viewportHeight)));

        if (cardRef.current) {
          // Apply parallax effect: move the card up as the user scrolls down
          const parallaxOffset = -scrollProgress * 50; // Adjust multiplier for more/less effect
          // Apply a subtle rotation for a 3D effect
          const parallaxRotate = scrollProgress * 5; // In degrees

          cardRef.current.style.setProperty('--parallax-offset', `${parallaxOffset}px`);
          cardRef.current.style.setProperty('--parallax-rotate', `${parallaxRotate}deg`);
        }
      });
    };

    if (isVisible) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isVisible, isPinned]);

  return { wrapperRef, cardRef, isVisible, isPinned };
}
