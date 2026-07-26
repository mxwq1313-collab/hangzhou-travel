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
  const hotel = (accommodations || []).find(a => a.id === id);

  if (!hotel) {
    return (
      <PageTransition>
        <div className={styles.notFound}>
          <p>{lang === 'zh' ? '住宿未找到' : 'Hotel not found'}</p>
          <Link to="/accommodation" className="btn btn--outline">
            {lang === 'zh' ? '返回住宿列表' : 'Back to Accommodation'}
          </Link>
        </div>
      </PageTransition>
    );
  }

  const tierLabel = {
    luxury: { zh: '豪华酒店', en: 'Luxury' },
    mid: { zh: '舒适之选', en: 'Mid-Range' },
    budget: { zh: '经济实惠', en: 'Budget' },
  };

  return (
    <PageTransition>
      <div className={styles.hero}>
        <SafeImage src={hotel.image} alt={t(hotel.name, lang)} className={styles.heroImg} seed={3} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <button className={styles.backBtn} onClick={() => navigate('/accommodation')}>
            ← {lang === 'zh' ? '返回' : 'Back'}
          </button>
          <span className="tag tag--gold">{t(tierLabel[hotel.tier] || { zh: '酒店', en: 'Hotel' }, lang)}</span>
          <h1 className={styles.title}>{t(hotel.name, lang)}</h1>
          <p className={styles.subtitle}>{t(hotel.area, lang)}</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="two-col--wide-left">
            <div>
              <SectionTitle
                title={{ zh: '住宿详情', en: 'About This Stay' }}
                subtitle={{ zh: '了解更多', en: 'Learn More' }}
                seal="栖居"
                alignment="left"
              />

              <div className="bilingual-block">
                <p className="zh">{hotel.desc?.zh}</p>
                <p className="en">{hotel.desc?.en}</p>
              </div>

              {hotel.nearbyAttractions && (
                <>
                  <h3 className={styles.sectionH3}>
                    {lang === 'zh' ? '周边景点' : 'Nearby Attractions'}
                  </h3>
                  <div className={styles.nearby}>
                    {(hotel.nearbyAttractions || []).map((a, i) => (
                      <motion.span
                        key={i}
                        className="tag"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {t(a, lang)}
                      </motion.span>
                    ))}
                  </div>
                </>
              )}
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.infoCard}>
                <h4 className={styles.infoTitle}>
                  {lang === 'zh' ? '酒店信息' : 'Hotel Info'}
                </h4>
                <dl className={styles.infoList}>
                  <div>
                    <dt>{lang === 'zh' ? '📍 区域' : '📍 Location'}</dt>
                    <dd>{t(hotel.area, lang)}</dd>
                  </div>
                  <div>
                    <dt>{lang === 'zh' ? '💰 价格' : '💰 Price'}</dt>
                    <dd>{t(hotel.priceRange, lang)}</dd>
                  </div>
                  <div>
                    <dt>{lang === 'zh' ? '⭐ 评级' : '⭐ Rating'}</dt>
                    <dd className={styles.stars}>
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i} style={{ color: i < (hotel.rating || 0) ? 'var(--imperial-gold)' : 'var(--ink-faint)' }}>★</span>
                      ))}
                    </dd>
                  </div>
                  {hotel.features && (
                    <div>
                      <dt>{lang === 'zh' ? '✨ 特色' : '✨ Features'}</dt>
                      <dd>
                        <div className={styles.features}>
                          {(hotel.features || []).map((f, i) => (
                            <span key={i} className="tag">{t(f, lang)}</span>
                          ))}
                        </div>
                      </dd>
                    </div>
                  )}
                </dl>
              </div>

              <PatternDivider variant="line" color="gold" />

              <Link to="/accommodation" className="btn btn--outline" style={{ width: '100%', textAlign: 'center' }}>
                ← {lang === 'zh' ? '返回住宿列表' : 'All Accommodations'}
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}