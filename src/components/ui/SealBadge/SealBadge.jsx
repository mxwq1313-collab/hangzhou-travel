import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion';
import styles from './SealBadge.module.css';

/**
 * 印章徽章组件 — 中国传统红印章风格
 * Chinese seal badge component
 *
 * Props:
 *   text  — seal text (1-4 Chinese characters recommended)
 *   size  — 'sm' | 'md' | 'lg'
 *   color — 'cinnabar' | 'gold' | 'ink'
 *   animate — animate entrance with stamp effect
 */
export default function SealBadge({
  text = '杭州',
  size = 'md',
  color = 'cinnabar',
  animate = true,
  className = '',
}) {
  const prefersReduced = usePrefersReducedMotion();

  const content = (
    <div
      className={`${styles.seal} ${styles[size]} ${styles[color]} ${className}`}
      aria-hidden="true"
    >
      <span className={styles.text}>{text}</span>
    </div>
  );

  if (prefersReduced || !animate) return content;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 2.5, rotate: -15 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        rotate: 0,
      }}
      viewport={{ once: true }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 15,
        delay: 0.1,
      }}
    >
      {content}
    </motion.div>
  );
}