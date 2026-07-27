import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { T } from '../../shared/BilingualText';
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion';
import SafeImage from '../../shared/SafeImage';
import styles from './Card.module.css';

/**
 * 通用卡片组件 — 使用 SafeImage 确保加载失败时有 fallback
 * Universal card component with safe image fallback
 */
export default function Card({
  image,
  title,
  subtitle,
  description,
  tags = [],
  link,
  onClick,
  variant = 'vertical',
  size = 'md',
  badge,
  rating,
  className = '',
  index = 0,
}) {
  const prefersReduced = usePrefersReducedMotion();

  const cardContent = (
    <div className={`${styles.card} ${styles[variant]} ${styles[size]} ${className}`}>
      {/* Image — 使用 SafeImage 避免无 onError 的裸 <img> */}
      <div className={styles.imageWrapper}>
        <SafeImage
          src={image}
          alt={typeof title === 'string' ? title : title?.zh || ''}
          className={styles.image}
          loading="lazy"
          seed={index}
          fallbackIcon="🖼️"
        />
        {badge && (
          <span className={styles.badge}>
            <T obj={badge} />
          </span>
        )}
      </div>

      {/* Content */}
      <div className={styles.body}>
        {tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag, i) => (
              <span key={i} className="tag">
                <T obj={tag} />
              </span>
            ))}
          </div>
        )}

        {title && (
          <h3 className={styles.title}>
            <T obj={title} />
          </h3>
        )}

        {subtitle && (
          <p className={styles.subtitle}>
            <T obj={subtitle} />
          </p>
        )}

        {description && (
          <p className={styles.desc}>
            <T obj={description} />
          </p>
        )}

        {rating && (
          <div className={styles.rating}>
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className={i < rating ? styles.starActive : styles.star}>
                ★
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  // Animation wrapper
  const animated = prefersReduced ? (
    cardContent
  ) : (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.45, 0.35, 1],
      }}
      whileHover={variant === 'vertical' ? { y: -4 } : undefined}
    >
      {cardContent}
    </motion.div>
  );

  // Link wrapper
  if (link) {
    return (
      <Link to={link} className={styles.link} aria-label={typeof title === 'string' ? title : title?.zh || ''}>
        {animated}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={styles.cardBtn}>
        {animated}
      </button>
    );
  }

  return animated;
}