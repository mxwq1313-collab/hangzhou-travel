import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { T } from '../../shared/BilingualText';
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion';
import styles from './Accordion.module.css';

/**
 * 手风琴组件
 * Accordion / expandable list component
 *
 * Props:
 *   items     — { id, title: {zh,en}, content: ReactNode }[]
 *   allowMultiple — allow multiple open at once (default false)
 *   className
 */
export default function Accordion({
  items = [],
  allowMultiple = false,
  className = '',
}) {
  const prefersReduced = usePrefersReducedMotion();
  const [openIds, setOpenIds] = useState(
    items.length > 0 ? [items[0].id] : []
  );

  const toggle = (id) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`${styles.accordion} ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIds.includes(item.id);

        return (
          <div
            key={item.id}
            className={`${styles.item} ${isOpen ? styles.open : ''}`}
          >
            <button
              className={styles.trigger}
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
            >
              <span className={styles.index}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className={styles.title}>
                <T obj={item.title} />
              </span>
              <motion.span
                className={styles.icon}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                ▼
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={prefersReduced ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.45, 0.35, 1] }}
                  className={styles.content}
                >
                  <div className={styles.contentInner}>{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}