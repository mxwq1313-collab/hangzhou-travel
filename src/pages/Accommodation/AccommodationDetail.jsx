import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage, t } from '../../context/LanguageContext';
import { accommodations } from '../../data/accommodation';
import SafeImage from '../../components/shared/SafeImage';
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle';
import PatternDivider from '../../components/ui/PatternDivider/PatternDivider';
import PageTransition from '../../components/ui/PageTransition';
import styles from './AccommodationDetail.module.css';

export default function AccommodationDetail() {
  const { id } = useParams();
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const stay = accommodations.find((item) => item.id === id);

  if (!stay) {
    return <PageTransition><div className={styles.notFound}><p>{lang === 'zh' ? '住宿区域未找到' : 'Area not found'}</p><Link to="/accommodation" className="btn btn--outline">{lang === 'zh' ? '返回住宿指南' : 'Back to Area Guide'}</Link></div></PageTransition>;
  }

  const typeLabel = {
    central: { zh: '市中心', en: 'Central' },
    scenic: { zh: '湖山度假', en: 'Scenic' },
    business: { zh: '商务出行', en: 'Business' },
    transit: { zh: '交通中转', en: 'Transit' },
  };

  return (
    <PageTransition>
      <div className={styles.hero}>
        <SafeImage src={stay.image} alt={t(stay.name, lang)} className={styles.heroImg} seed={3} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <button className={styles.backBtn} onClick={() => navigate('/accommodation')}>← {lang === 'zh' ? '返回' : 'Back'}</button>
          <span className="tag tag--gold">{t(typeLabel[stay.type], lang)}</span>
          <h1 className={styles.title}>{t(stay.name, lang)}</h1>
          <p className={styles.subtitle}>{t(stay.area, lang)}</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="two-col--wide-left">
            <div>
              <SectionTitle title={{ zh: '区域详解', en: 'About This Area' }} subtitle={{ zh: '便利与取舍都说清楚', en: 'Benefits and Trade-offs' }} seal="栖居" alignment="left" />
              <div className="bilingual-block"><p className="zh">{stay.desc.zh}</p><p className="en">{stay.desc.en}</p></div>

              <h3 className={styles.sectionH3}>{lang === 'zh' ? '周边去处' : 'Nearby Places'}</h3>
              <div className={styles.nearby}>
                {stay.nearbyAttractions.map((place, index) => (
                  <motion.span key={place.en} className="tag" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
                    {t(place, lang)}
                  </motion.span>
                ))}
              </div>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.infoCard}>
                <h4 className={styles.infoTitle}>{lang === 'zh' ? '选择参考' : 'Quick Guide'}</h4>
                <dl className={styles.infoList}>
                  <div><dt>{lang === 'zh' ? '区域' : 'Location'}</dt><dd>{t(stay.area, lang)}</dd></div>
                  <div><dt>{lang === 'zh' ? '常见预算' : 'Typical Budget'}</dt><dd>{t(stay.priceRange, lang)}</dd></div>
                  <div><dt>{lang === 'zh' ? '适合人群' : 'Best For'}</dt><dd>{t(stay.bestFor, lang)}</dd></div>
                  <div><dt>{lang === 'zh' ? '交通' : 'Transport'}</dt><dd>{t(stay.transport, lang)}</dd></div>
                  <div><dt>{lang === 'zh' ? '需要权衡' : 'Trade-offs'}</dt><dd>{t(stay.tradeoffs, lang)}</dd></div>
                  <div><dt>{lang === 'zh' ? '特点' : 'Features'}</dt><dd><div className={styles.features}>{stay.features.map((item) => <span key={item.en} className="tag">{t(item, lang)}</span>)}</div></dd></div>
                </dl>
              </div>
              <PatternDivider variant="line" color="gold" />
              <Link to="/accommodation" className="btn btn--outline" style={{ width: '100%', textAlign: 'center' }}>← {lang === 'zh' ? '全部住宿区域' : 'All Areas'}</Link>
            </aside>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
