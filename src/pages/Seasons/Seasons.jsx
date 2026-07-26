import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage, t } from '../../context/LanguageContext';
import { seasons } from '../../data/seasons';
import IMAGES from '../../data/images';
import Hero from '../../components/ui/Hero/Hero';
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle';
import Reveal from '../../components/ui/Reveal/Reveal';
import PatternDivider from '../../components/ui/PatternDivider/PatternDivider';
import styles from './Seasons.module.css';

export default function Seasons() {
  const { lang } = useLanguage();
  const [activeSeason, setActiveSeason] = useState('spring');

  const currentSeason = (seasons || []).find(s => s.id === activeSeason) || (seasons || [])[0];

  const seasonEmojis = { spring: '🌸', summer: '🌿', autumn: '🍂', winter: '❄️' };

  return (
    <>
      <Hero
        image={(seasons || []).find(s => s.id === activeSeason)?.image || IMAGES.seasonSpring}
        title={{ zh: '四季杭州', en: 'Four Seasons' }}
        subtitle={{ zh: '春夏秋冬 · 各美其美', en: 'Every Season Has Its Beauty' }}
        description={{
          zh: '杭州四季分明，每个季节都有独特的风景与韵味。春天的繁花、夏日的荷塘、秋天的桂香、冬日的雪景，各有千秋。',
          en: 'Hangzhou has four distinct seasons, each with unique scenery and charm: spring blossoms, summer lotus ponds, autumn osmanthus fragrance, and winter snowscapes.'
        }}
        height="large"
      />

      {/* Seasons Showcase */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title={{ zh: '季节选择', en: 'Choose a Season' }}
            subtitle={{ zh: '品味不同时节的杭州之美', en: 'Savor Hangzhou in Every Season' }}
            seal="时节"
          />

          {/* Season Picker */}
          <div className={styles.seasonPicker}>
            {(seasons || []).map((season) => (
              <button
                key={season.id}
                className={`${styles.seasonBtn} ${activeSeason === season.id ? styles.seasonActive : ''}`}
                onClick={() => setActiveSeason(season.id)}
              >
                <span className={styles.seasonEmoji}>
                  {seasonEmojis[season.id] || '🌸'}
                </span>
                <span className={styles.seasonLabel}>
                  {t(season.name, lang)}
                </span>
              </button>
            ))}
          </div>

          {/* Active Season Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSeason}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {currentSeason && (
                <div className={styles.seasonDetail}>
                  <div className="two-col">
                    {/* Left: Image + Overview */}
                    <div>
                      <div
                        className={styles.detailImage}
                        style={{ backgroundImage: `url(${currentSeason.image})` }}
                      />
                    </div>

                    {/* Right: Info */}
                    <div className={styles.detailInfo}>
                      <div className={styles.detailHeader}>
                        <h2 className={styles.detailName}>
                          {t(currentSeason.name, lang)}
                        </h2>
                        <p className={styles.detailMonths}>
                          {t(currentSeason.months, lang)}
                        </p>
                      </div>

                      <div className={styles.tempBadge}>
                        {t(currentSeason.temp, lang)}
                      </div>

                      <p className={styles.detailDesc}>
                        {t(currentSeason.description, lang)}
                      </p>

                      {/* Rating */}
                      <div className={styles.rating}>
                        {currentSeason.rating &&
                          Array.from({ length: 5 }, (_, i) => (
                            <span key={i} className={i < currentSeason.rating ? styles.starActive : styles.star}>
                              ★
                            </span>
                          ))
                        }
                        <span className={styles.ratingLabel}>
                          {lang === 'zh' ? '推荐指数' : 'Recommendation'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  {currentSeason.highlights && (
                    <Reveal>
                      <div className={styles.highlightsSection}>
                        <h3 className={styles.subTitle}>
                          {lang === 'zh' ? '季节亮点' : 'Seasonal Highlights'}
                        </h3>
                        <div className="grid--4">
                          {currentSeason.highlights.map((h, i) => (
                            <div key={i} className={styles.highlightCard}>
                              <p className={styles.highlightText}>{t(h, lang)}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Reveal>
                  )}

                  {/* Festivals */}
                  {currentSeason.festivals && currentSeason.festivals.length > 0 && (
                    <Reveal>
                      <div className={styles.festivalsSection}>
                        <h3 className={styles.subTitle}>
                          {lang === 'zh' ? '节庆活动' : 'Festivals & Events'}
                        </h3>
                        <div className={styles.festivalList}>
                          {currentSeason.festivals.map((f, i) => (
                            <div key={i} className={styles.festivalItem}>
                              <h4>{t(f.title, lang)}</h4>
                              <p className={styles.festivalDate}>{t(f.date, lang)}</p>
                              <p>{t(f.desc, lang)}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Reveal>
                  )}

                  {/* Travel Tips */}
                  {currentSeason.travelTips && (
                    <Reveal>
                      <div className={styles.tipsSection}>
                        <h3 className={styles.subTitle}>
                          {lang === 'zh' ? '旅行建议' : 'Travel Tips'}
                        </h3>
                        <ul className={styles.tipsList}>
                          {currentSeason.travelTips.map((tip, i) => (
                            <li key={i}>💡 {t(tip, lang)}</li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <PatternDivider variant="cloud" color="gold" />

      {/* Best Time Summary */}
      <section className="section" style={{ background: 'var(--ink-deep)' }}>
        <div className="container">
          <SectionTitle
            title={{ zh: '最佳旅游时间', en: 'Best Time to Visit' }}
            subtitle={{ zh: '春秋最宜 · 四季皆景', en: 'Spring & Autumn Are Prime, But Always Beautiful' }}
            seal="佳期"
            light
          />

          <div className="two-col">
            <Reveal>
              <p className={styles.bestTimeText}>
                {lang === 'zh'
                  ? '杭州最适宜旅游的季节是春季（3-5月）和秋季（9-11月）。春天西湖边桃红柳绿、樱花烂漫；秋天满城桂香、天高气爽。这两个季节气温适宜，是最佳的游览时间。夏季炎热但荷花盛开别有韵味，冬季游客较少，雪后西湖更是难得一见的美景。'
                  : 'The best times to visit Hangzhou are spring (March-May) and autumn (September-November). Spring brings peach blossoms and cherry blooms around West Lake; autumn fills the city with osmanthus fragrance. Summer is hot but lotus flowers are spectacular, while winter offers fewer crowds and rare snow-covered West Lake views.'
                }
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className={styles.bestTimeHighlight}>
                <div className={styles.monthTag}>
                  {lang === 'zh' ? '推荐月份' : 'Best Months'}
                </div>
                <div className={styles.monthGrid}>
                  {['3月','4月','5月','9月','10月','11月'].map(m => (
                    <span key={m} className={styles.month}>{m}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}