import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

/**
 * 布局组件 — 持久化导航 + 页脚 + 页面过渡
 * Layout component — persistent nav + footer + page transitions
 */
export default function Layout() {
  const location = useLocation();

  // 路由切换时滚动到顶部 / Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {/* 无障碍跳过链接 / Skip to content for accessibility */}
      <a href="#main-content" className="skip-link">
        跳转到主内容 / Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}