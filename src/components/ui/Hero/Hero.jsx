import { motion } from 'framer-motion';
import { T } from '../../shared/BilingualText';
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion';
import styles from './Hero.module.css';

/**
 * 主视觉横幅组件 — 中国传统水墨风格
 * Hero banner with ink-wash styling and staggered entrance animation
 *
 * Props:
 *   image        — background image URL
 *   title        — {zh, en} main title (calligraphy)
 *   subtitle     — {zh, en} subtitle
 *   description  — {zh, en} body text
 *   cta          — {zh, en} CTA button text
 *   onCtaClick   — CTA click handler
 *   height       — 'screen' | 'large' | 'medium'
 */
export default function Hero({
  image,
  title,
  subtitle,
  description,
  cta,
  onCtaClick,
  height = 'screen',
  className = '',
}) {
  const prefersReduced = usePrefersReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.45, 0.35, 1] },
    },
  };

  const content = (
    <>
      <div className={styles.heroContent} role="banner">
        <div className={styles.titleGroup}>
          {subtitle && (
            <p className={styles.preTitle}>
              <T obj={subtitle} />
            </p>
          )}
          <h1 className={styles.title}>
            <T obj={title} />
          </h1>
        </div>

        {description && (
          <p className={styles.description}>
            <T obj={description} />
          </p>
        )}

        {cta && (
          <button
            className={styles.cta}
            onClick={onCtaClick}
          >
            <T obj={cta} />
            <span className={styles.ctaArrow}>→</span>
          </button>
        )}
      </div>

      {/* 滚动提示 / Scroll indicator */}
      <div className={styles.scrollHint}>
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>
          <T zh="向下滚动" en="Scroll" />
        </span>
      </div>
    </>
  );

  return (
    <section className={`${styles.hero} ${styles[height]} ${className}`}>
      {/* 背景图片 / Background */}
      <div
        className={styles.bg}
        style={image ? { backgroundImage: `url(${image})` } : undefined}
      />

      {/* 水墨纹理叠加 / Ink texture overlay */}
      <div className={styles.inkOverlay} />

      {/* 渐变叠加 / Gradient overlays */}
      <div className={styles.topOverlay} />
      <div className={styles.bottomOverlay} />

      {prefersReduced ? (
        <div className={styles.contentWrapper}>
          {content}
        </div>
      ) : (
        <motion.div
          className={styles.contentWrapper}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className={styles.subtitleWrap}>
            {subtitle && (
              <p className={styles.preTitle}>
                <T obj={subtitle} />
              </p>
            )}
          </motion.div>
          <motion.div variants={itemVariants}>
            <h1 className={styles.title}>
              <T obj={title} />
            </h1>
          </motion.div>
          {description && (
            <motion.div variants={itemVariants}>
              <p className={styles.description}>
                <T obj={description} />
              </p>
            </motion.div>
          )}
          {cta && (
            <motion.div variants={itemVariants}>
              <button className={styles.cta} onClick={onCtaClick}>
                <T obj={cta} />
                <span className={styles.ctaArrow}>→</span>
              </button>
            </motion.div>
          )}

          <div className={styles.scrollHint}>
            <span className={styles.scrollLine} />
            <span className={styles.scrollText}>
              <T zh="向下滚动" en="Scroll" />
            </span>
          </div>
        </motion.div>
      )}
    </section>
  );
}