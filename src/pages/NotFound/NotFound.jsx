import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import SealBadge from '../../components/ui/SealBadge/SealBadge';
import styles from './NotFound.module.css';

export default function NotFound() {
  const { lang } = useLanguage();
  return (
    <section className={styles.wrap}>
      <div className="container">
        <SealBadge text="404" size="lg" color="gold" animate={false} />
        <h1 className={styles.title}>
          {lang === 'zh' ? '迷路于山水之间' : 'Lost in the Landscape'}
        </h1>
        <p className={styles.desc}>
          {lang === 'zh'
            ? '你要找的页面如湖上薄雾，悄然散去。不如回到起点，重新出发。'
            : 'The page you seek has vanished like mist on the lake. Let us guide you back.'}
        </p>
        <Link to="/" className="btn btn--primary">
          {lang === 'zh' ? '返回首页' : 'Back to Home'} →
        </Link>
      </div>
    </section>
  );
}
