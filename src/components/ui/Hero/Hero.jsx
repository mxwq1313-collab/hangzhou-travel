import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { T } from '../../shared/BilingualText';
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion';
import styles from './Hero.module.css';

/**
 * 主视觉横幅组件
 * Hero banner — uses <img> for reliable loading detection + fallback gradient
 *
 * Props:
 *   image        — 图片 URL
 *   title        — {zh, en}
 *   subtitle     — {zh, en}
 *   description  — {zh, en}
 *   cta          — {zh, en}
 *   onCtaClick   — CTA 回调
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
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  // 预加载图片
  useEffect(() => {
    if (!image) {
      setImgFailed(true);
      return;
    }
    setImgLoaded(false);
    setImgFailed(false);
    const img = new Image();
    img.onload = () => setImgLoaded(true);
    img.onerror = () => setImgFailed(true);
    img.src = image;
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [image]);

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
          <button className={styles.cta} onClick={onCtaClick}>
            <T obj={cta} />
            <span className={styles.ctaArrow}>→</span>
          </button>
        )}
      </div>

      {/* 滚动提示 */}
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
      {/* 背景图片 — 使用 <img> 而非 CSS background，便于检测加载失败 */}
      {image && !imgFailed && (
        <img
          src={image}
          alt=""
          className={`${styles.bgImg} ${imgLoaded ? styles.bgImgVisible : ''}`}
          aria-hidden="true"
        />
      )}

      {/* 水墨纹理叠加 */}
      <div className={styles.inkOverlay} />

      {/* 渐变叠加 */}
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