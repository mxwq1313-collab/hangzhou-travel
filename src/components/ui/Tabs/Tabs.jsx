import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { T } from '../../shared/BilingualText';
import styles from './Tabs.module.css';

/**
 * 标签页组件
 * Tabbed interface component
 *
 * Props:
 *   items      — { id, label: {zh,en} }[]
 *   activeId   — currently active tab id
 *   onChange   — (id) => void callback
 *   variant    — 'underline' | 'pill' | 'button'
 *   className
 */
export default function Tabs({
  items = [],
  activeId,
  onChange,
  variant = 'underline',
  className = '',
  children,
}) {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div className={`${styles.tabList} ${styles[variant]}`}>
        {items.map((item) => (
          <button
            key={item.id}
            className={`${styles.tab} ${activeId === item.id ? styles.active : ''}`}
            onClick={() => onChange(item.id)}
            role="tab"
            aria-selected={activeId === item.id}
          >
            <T obj={item.label} />
            {activeId === item.id && variant === 'underline' && (
              <motion.span
                className={styles.underline}
                layoutId="tab-underline"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeId}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className={styles.content}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}