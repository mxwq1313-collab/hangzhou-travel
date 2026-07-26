import { Link } from 'react-router-dom';
import { useLanguage, t } from '../../../context/LanguageContext';
import { navItems } from '../../../data/nav';
import SealBadge from '../../ui/SealBadge/SealBadge';
import PatternDivider from '../../ui/PatternDivider/PatternDivider';
import styles from './Footer.module.css';

/**
 * 页脚组件 — 中国传统风格
 * Footer with traditional Chinese layout
 */
export default function Footer() {
  const { lang } = useLanguage();

  const footerContent = {
    description: {
      zh: '杭州，一座有着2200多年建城史的文化名城，以"人间天堂"的美誉闻名于世。这里山水如诗，人文荟萃，期待您的到来。',
      en: 'Hangzhou, a cultural city with over 2,200 years of history, is celebrated as "Paradise on Earth." With poetic landscapes and rich heritage, it awaits your visit.'
    },
    copyright: {
      zh: `© ${new Date().getFullYear()} 杭州旅游指南 — 探索人间天堂`,
      en: `© ${new Date().getFullYear()} Hangzhou Travel Guide — Explore Paradise on Earth`
    },
    quickLinks: {
      zh: '快速链接',
      en: 'Quick Links'
    },
    contact: {
      zh: '旅游服务',
      en: 'Travel Services'
    },
  };

  const serviceLinks = [
    { label: { zh: '杭州文旅局', en: 'Hangzhou Tourism Bureau' }, href: '#' },
    { label: { zh: '12301 旅游热线', en: '12301 Tourist Hotline' }, href: '#' },
    { label: { zh: '天气查询', en: 'Weather' }, href: '#' },
    { label: { zh: '常见问题', en: 'FAQ' }, href: '#' },
  ];

  return (
    <footer className={styles.footer}>
      <PatternDivider variant="wave" color="gold" />

      <div className={`container ${styles.footerInner}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.brandLogo}>
            <SealBadge text="杭州" size="md" />
            <span className={styles.brandName}>
              {lang === 'zh' ? '杭州旅游指南' : 'Hangzhou Travel Guide'}
            </span>
          </div>
          <p className={styles.brandDesc}>
            {t(footerContent.description, lang)}
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.links}>
          <h4 className={styles.linksTitle}>
            {t(footerContent.quickLinks, lang)}
          </h4>
          <ul className={styles.linkList}>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className={styles.link}>
                  {t(item.label, lang)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className={styles.links}>
          <h4 className={styles.linksTitle}>
            {t(footerContent.contact, lang)}
          </h4>
          <ul className={styles.linkList}>
            {serviceLinks.map((item, i) => (
              <li key={i}>
                <a href={item.href} className={styles.link}>
                  {t(item.label, lang)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copyright}>
            {t(footerContent.copyright, lang)}
          </p>
          <p className={styles.tagline}>
            <TStatic zh="上有天堂，下有苏杭" en="Above there is heaven, below there are Suzhou and Hangzhou" lang={lang} />
          </p>
        </div>
      </div>
    </footer>
  );
}

// 简单静态双语渲染（避免上下文中重复定义T）
function TStatic({ zh, en, lang }) {
  return <>{lang === 'zh' ? zh : en}</>;
}