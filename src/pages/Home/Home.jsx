import { useNavigate } from 'react-router-dom';
import IMAGES from '../../data/images';
import { motion } from 'framer-motion';
import { useLanguage, t } from '../../context/LanguageContext';
import { heroData, highlights, stats } from '../../data/home';
import { seasons } from '../../data/seasons';
import Hero from '../../components/ui/Hero/Hero';
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle';
import Card from '../../components/ui/Card/Card';
import Reveal, { RevealStagger } from '../../components/ui/Reveal/Reveal';
import PatternDivider from '../../components/ui/PatternDivider/PatternDivider';
import styles from './Home.module.css';

export default function Home() {
  const { lang } = useLanguage();
  const navigate = useNavigate();

  return (
    <>
      {/* ── Hero Section ── */}
      <Hero
        image={IMAGES.heroWestLake}
        title={heroData.title}
        subtitle={heroData.subtitle}
        description={heroData.description}
        cta={heroData.cta}
        onCtaClick={() => navigate('/attractions')}
        height="screen"
      />

      {/* ── Stats Bar ── */}
      <section className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className={styles.statItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statUnit}>
                  {t(stat.unit, lang)}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PatternDivider variant="cloud" color="gold" />

      {/* ── Highlights 杭州亮点 ── */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title={{ zh: '杭州印象', en: 'The Soul of Hangzhou' }}
            subtitle={{ zh: '千年古都 · 人间天堂', en: 'Ancient Capital · Paradise on Earth' }}
            seal="杭州"
          />

          <div className="grid">
            {highlights.map((item, i) => (
              <div key={item.id} onClick={() => {
                if (item.id === 'west-lake') navigate('/attractions');
                else if (item.id === 'cuisine') navigate('/food');
              }} style={{ cursor: 'pointer' }}>
                <Card
                  title={item.title}
                  description={item.desc}
                  index={i}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <PatternDivider variant="line" color="cinnabar" />

      {/* ── Seasonal Preview 四季掠影 ── */}
      <section className="section" style={{ background: 'var(--rice-paper-warm)' }}>
        <div className="container">
          <SectionTitle
            title={{ zh: '四季杭州', en: 'Four Seasons of Hangzhou' }}
            subtitle={{ zh: '春夏秋冬 · 各美其美', en: 'Every Season Has Its Charm' }}
            seal="四季"
          />

          <RevealStagger staggerDelay={0.15}>
            <div className="grid--4">
              {(seasons || []).slice(0, 4).map((season, i) => (
                <div
                  key={season?.id || i}
                  className={styles.seasonCard}
                  onClick={() => navigate('/seasons')}
                >
                  <div
                    className={styles.seasonImage}
                    style={season?.image ? { backgroundImage: `url(${season.image})` } : {}}
                  >
                    <div className={styles.seasonOverlay} />
                    <h3 className={styles.seasonName}>
                      {season?.name ? t(season.name, lang) : ''}
                    </h3>
                    <p className={styles.seasonMonths}>
                      {season?.months ? t(season.months, lang) : ''}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </RevealStagger>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
            <button className="btn btn--outline" onClick={() => navigate('/seasons')}>
              {lang === 'zh' ? '查看四季详情' : 'Explore Seasons'} →
            </button>
          </div>
        </div>
      </section>

      <PatternDivider variant="double-line" color="gold" />

      {/* ── CTA 探索杭州 ── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className={styles.ctaBanner}>
              <h2 className={styles.ctaTitle}>
                {lang === 'zh' ? '开始规划您的杭州之旅' : 'Start Planning Your Hangzhou Journey'}
              </h2>
              <p className={styles.ctaDesc}>
                {lang === 'zh'
                  ? '从一日游到三日深度游，我们为您准备了精心设计的行程方案'
                  : 'From a day trip to a three-day deep dive, we have carefully crafted itineraries for you'}
              </p>
              <button className="btn btn--primary" onClick={() => navigate('/itineraries')}>
                {lang === 'zh' ? '查看行程规划' : 'View Itineraries'} →
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}