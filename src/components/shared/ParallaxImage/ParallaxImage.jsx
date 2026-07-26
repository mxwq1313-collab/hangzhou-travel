import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion';
import styles from './ParallaxImage.module.css';

/**
 * 视差图片组件
 * Parallax scrolling image component
 *
 * Props:
 *   src       — image URL
 *   alt       — alt text
 *   speed     — parallax speed multiplier (default 0.3)
 *   className — additional class
 *   overlay   — show dark overlay (default true)
 *   height    — container height (default '70vh')
 */
export default function ParallaxImage({
  src,
  alt = '',
  speed = 0.3,
  className = '',
  overlay = true,
  height = '70vh',
  children,
}) {
  const prefersReduced = usePrefersReducedMotion();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '20%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${className}`}
      style={{ height }}
    >
      <motion.div
        className={styles.imageWrapper}
        style={prefersReduced ? {} : { y, scale }}
      >
        <img
          src={src}
          alt={alt}
          className={styles.image}
          loading="lazy"
        />
      </motion.div>
      {overlay && <div className={styles.overlay} />}
      {children && <div className={styles.content}>{children}</div>}
    </div>
  );
}