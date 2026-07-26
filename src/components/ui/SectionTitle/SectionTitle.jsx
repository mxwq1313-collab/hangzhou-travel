import { motion } from 'framer-motion';
import { T } from '../../shared/BilingualText';
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion';
import SealBadge from '../SealBadge/SealBadge';
import styles from './SectionTitle.module.css';

/**
 * 段落标题组件 — 中国传统风格
 * Section title with Chinese seal badge and bilingual support
 *
 * Props:
 *   title       — {zh, en} main title
 *   subtitle    — {zh, en} English subtitle
 *   seal        — seal badge text (2 Chinese chars recommended)
 *   alignment   — 'center' | 'left'
 *   className
 */
export default function SectionTitle({
  title,
  subtitle,
  seal,
  alignment = 'center',
  className = '',
  light = false,
}) {
  const prefersReduced = usePrefersReducedMotion();

  const content = (
    <div
      className={`${styles.wrapper} ${styles[alignment]} ${light ? styles.light : ''} ${className}`}
    >
      <div className={styles.sealArea}>
        <SealBadge text={seal} size="md" />
        <div className={styles.sealLine} />
      </div>

      <h2 className={styles.title}>
        <T obj={title} />
        {subtitle && (
          <span className={styles.subtitle}>
            <T obj={subtitle} />
          </span>
        )}
      </h2>

      <div className={styles.divider}>
        <span className={styles.dividerLine} />
        <span className={styles.dividerDot} />
        <span className={styles.dividerLine} />
      </div>
    </div>
  );

  if (prefersReduced) return content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.45, 0.35, 1] }}
    >
      {content}
    </motion.div>
  );
}