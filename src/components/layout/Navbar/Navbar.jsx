import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage, t } from '../../../context/LanguageContext';
import { navItems } from '../../../data/nav';
import LanguageToggle from '../../ui/LanguageToggle/LanguageToggle';
import SealBadge from '../../ui/SealBadge/SealBadge';
import styles from './Navbar.module.css';

/**
 * 导航栏 — 中国传统风格
 * Navigation bar with traditional Chinese styling
 * Scroll-aware background, mobile hamburger, language toggle
 */
export default function Navbar() {
  const { lang } = useLanguage();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // 滚动检测 / Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 路由切换时关闭移动菜单 / Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // 移动端菜单打开时锁定滚动 / Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} role="navigation" aria-label={lang === 'zh' ? '主导航' : 'Main navigation'}>
        <div className={`container ${styles.navInner}`}>
          {/* Logo */}
          <NavLink to="/" className={styles.logo}>
            <SealBadge text="杭州" size="sm" animate={false} />
            <span className={styles.logoText}>
              {lang === 'zh' ? '杭州旅游' : 'Visit Hangzhou'}
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <div className={`${styles.desktopNav} desktop-nav`}>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ''}`
                }
                aria-current={({ isActive }) => isActive ? 'page' : undefined}
              >
                {t(item.label, lang)}
              </NavLink>
            ))}
          </div>

          {/* Right actions */}
          <div className={styles.actions}>
            <LanguageToggle variant="nav" />
            {/* 汉堡按钮 / Hamburger */}
            <button
              className={`${styles.hamburger} mobile-nav`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? '关闭菜单' : '打开菜单'}
              aria-expanded={mobileOpen}
            >
              <span className={`${styles.hamLine} ${mobileOpen ? styles.open : ''}`} />
              <span className={`${styles.hamLine} ${mobileOpen ? styles.open : ''}`} />
              <span className={`${styles.hamLine} ${mobileOpen ? styles.open : ''}`} />
            </button>
          </div>
        </div>

        {/* 滚动进度条 / Scroll progress bar */}
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${scrolled ? '100' : '0'}%` }}
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: [0.25, 0.45, 0.35, 1] }}
          >
            <div className={styles.mobileMenuInner}>
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) =>
                      `${styles.mobileLink} ${isActive ? styles.mobileActive : ''}`
                    }
                    aria-current={({ isActive }) => isActive ? 'page' : undefined}
                  >
                    <span className={styles.mobileIcon} aria-hidden="true">{item.icon}</span>
                    <span className={styles.mobileLabel}>{t(item.label, lang)}</span>
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* 装饰 / Decoration */}
            <div className={styles.mobileDecoration}>
              <SealBadge text="杭州" size="lg" color="gold" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}