import { useEffect, useState, useRef } from 'react';

/**
 * 简单视差滚动钩子
 * Simple parallax scroll hook
 *
 * @param {{ speed?: number, disabled?: boolean }} options
 * @returns {{ ref: React.RefObject, offset: number }}
 */
export function useParallax({ speed = 0.5, disabled = false } = {}) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (disabled) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      setOffset(scrollProgress * speed * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, disabled]);

  return { ref, offset };
}