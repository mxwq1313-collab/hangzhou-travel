import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import styles from './LanguageToggle.module.css';

/**
 * 语言切换按钮
 * Language toggle — switches between 中/EN with animation
 *
 * Props:
 *   variant — 'nav' (in navbar) | 'pill' (standalone)
 *   className
 */
export default function LanguageToggle({
  variant = 'nav',
  className = '',
}) {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      className={`${styles.toggle} ${styles[variant]} ${className}`}
      onClick={toggleLang}
      aria-label={`Switch language to ${lang === 'zh' ? 'English' : 'Chinese'}`}
      title={lang === 'zh' ? 'Switch to English / 切换到英文' : '切换到中文 / Switch to Chinese'}
    >
      <motion.span
        className={styles.label}
        key={lang}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2 }}
      >
        {lang === 'zh' ? 'EN' : '中'}
      </motion.span>
    </button>
  );
}