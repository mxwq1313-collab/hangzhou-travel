import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage, t } from '../../context/LanguageContext';
import { attractions } from '../../data/attractions';
import SafeImage from '../../components/shared/SafeImage';
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle';
import PatternDivider from '../../components/ui/PatternDivider/PatternDivider';
import PageTransition from '../../components/ui/PageTransition';
import styles from './AttractionDetail.module.css';

export default function AttractionDetail() {
  const { id } = useParams();
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const attr = (attractions || []).find(a => a.id === id);

  if (!attr) {
    return (
      <PageTransition>
        <div className={styles.notFound}>
          <p>{lang === 'zh' ? '景点未找到' : 'Attraction not found'}</p>
          <Link to="/attractions" className="btn btn--outline">
            {lang === 'zh' ? '返回景点列表' : 'Back to Attractions'}
          </Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      {/* Hero */}
      <div className={styles.hero}>
        <SafeImage src={attr.image} alt={t(attr.name, lang)} className={styles.heroImg} seed={0} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <button className={styles.backBtn} onClick={() => navigate('/attractions')}>
            ← {lang === 'zh' ? '返回' : 'Back'}
          </button>
          <div className={styles.tags}>
            {(attr.tags || []).map((tag, i) => (
              <span key={i} className="tag tag--gold">{t(tag, lang)}</span>
            ))}
          </div>
          <h1 className={styles.title}>{t(attr.name, lang)}</h1>
          <p className={styles.subtitle}>{t(attr.subtitle, lang)}</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="two-col--wide-left">
            {/* 主内容 */}
            <div>
              <SectionTitle
                title={{ zh: '景点介绍', en: 'Introduction' }}
                subtitle={{ zh: '深入了解', en: 'In-Depth Look' }}
                seal="详情"
                alignment="left"
              />

              <div className="bilingual-block">
                <p className="zh">{attr.intro?.zh}</p>
                <p className="en">{attr.intro?.en}</p>
              </div>

              {attr.history && (
                <>
                  <h3 className={styles.sectionH3}>
                    {lang === 'zh' ? '历史背景' : 'History'}
                  </h3>
                  <div className="bilingual-block">
                    <p className="zh">{attr.history?.zh}</p>
                    <p className="en">{attr.history?.en}</p>
                  </div>
                </>
              )}

              {attr.highlights && (
                <>
                  <h3 className={styles.sectionH3}>
                    {lang === 'zh' ? '重要亮点' : 'Highlights'}
                  </h3>
                  <ul className={styles.highlightList}>
                    {(attr.highlights || []).map((h, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {t(h, lang)}
                      </motion.li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* 侧边栏 — 实用信息 */}
            <aside className={styles.sidebar}>
              <div className={styles.infoCard}>
                <h4 className={styles.infoTitle}>
                  {lang === 'zh' ? '实用信息' : 'Practical Info'}
                </h4>

                {attr.practical && (
                  <dl className={styles.infoList}>
                    <div>
                      <dt>{lang === 'zh' ? '📍 地址' : '📍 Address'}</dt>
                      <dd>{t(attr.practical.address, lang)}</dd>
                    </div>
                    <div>
                      <dt>{lang === 'zh' ? '🕐 开放时间' : '🕐 Hours'}</dt>
                      <dd>{t(attr.practical.hours, lang)}</dd>
                    </div>
                    <div>
                      <dt>{lang === 'zh' ? '🎫 门票' : '🎫 Tickets'}</dt>
                      <dd>{t(attr.practical.ticket, lang)}</dd>
                    </div>
                    <div>
                      <dt>{lang === 'zh' ? '🌸 最佳时间' : '🌸 Best Time'}</dt>
                      <dd>{t(attr.practical.bestTime, lang)}</dd>
                    </div>
                    <div>
                      <dt>{lang === 'zh' ? '🚇 交通' : '🚇 Transport'}</dt>
                      <dd>{t(attr.practical.transport, lang)}</dd>
                    </div>
                  </dl>
                )}

                {attr.contact && (attr.contact.website?.zh || attr.contact.phone || attr.contact.mapUrl) && (
                  <dl className={styles.infoList} style={{ marginTop: 'var(--space-md)', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--gold-pale)' }}>
                    {attr.contact.website?.zh && (
                      <div>
                        <dt>{lang === 'zh' ? '🌐 官网' : 'Website'}</dt>
                        <dd><a href={lang === 'zh' ? attr.contact.website.zh : attr.contact.website.en} target="_blank" rel="noopener noreferrer" className="text-link">{lang === 'zh' ? attr.contact.website.zh : attr.contact.website.en}</a></dd>
                      </div>
                    )}
                    {attr.contact.phone && (
                      <div>
                        <dt>{lang === 'zh' ? '📞 电话' : 'Phone'}</dt>
                        <dd><a href={`tel:${attr.contact.phone}`} className="text-link">{attr.contact.phone}</a></dd>
                      </div>
                    )}
                    {attr.contact.mapUrl && (
                      <div>
                        <dt>{lang === 'zh' ? '🗺️ 地图' : 'Map'}</dt>
                        <dd><a href={attr.contact.mapUrl} target="_blank" rel="noopener noreferrer" className="text-link">{lang === 'zh' ? '📍 查看地图' : '📍 View on Map'}</a></dd>
                      </div>
                    )}
                  </dl>
                )}
              </div>

              <PatternDivider variant="line" color="gold" />

              <Link to="/attractions" className="btn btn--outline" style={{ width: '100%', textAlign: 'center' }}>
                ← {lang === 'zh' ? '返回景点列表' : 'All Attractions'}
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}