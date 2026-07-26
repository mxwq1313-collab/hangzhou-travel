import { useState } from 'react';
import IMAGES from '../../data/images';
import { useLanguage, t } from '../../context/LanguageContext';
import { accommodations } from '../../data/accommodation';
import Hero from '../../components/ui/Hero/Hero';
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle';
import Card from '../../components/ui/Card/Card';
import Reveal, { RevealStagger } from '../../components/ui/Reveal/Reveal';
import PatternDivider from '../../components/ui/PatternDivider/PatternDivider';
import styles from './Accommodation.module.css';

export default function Accommodation() {
  const { lang } = useLanguage();
  const [tier, setTier] = useState('all');

  const tiers = [
    { id: 'all', label: { zh: '全部', en: 'All' } },
    { id: 'luxury', label: { zh: '豪华酒店', en: 'Luxury' } },
    { id: 'mid', label: { zh: '舒适之选', en: 'Mid-Range' } },
    { id: 'budget', label: { zh: '经济实惠', en: 'Budget' } },
  ];

  const filtered = tier === 'all'
    ? (accommodations || [])
    : (accommodations || []).filter(a => a.tier === tier);

  return (
    <>
      <Hero
        image={IMAGES.heroHotel}
        title={{ zh: '杭州住宿', en: 'Accommodation' }}
        subtitle={{ zh: '枕水而居 · 诗意栖居', en: 'Rest by the Water, Dream in Poetry' }}
        description={{
          zh: '从西湖畔的奢华五星酒店到老城区的精品民宿，点击卡片查看详情。',
          en: 'From luxury five-star hotels by West Lake to boutique guesthouses — tap for details.'
        }}
        height="large"
      />

      <section className="section">
        <div className="container">
          <SectionTitle
            title={{ zh: '住宿推荐', en: 'Where to Stay' }}
            subtitle={{ zh: '总有一处让您宾至如归', en: 'Find Your Home Away from Home' }}
            seal="栖居"
          />

          <div className={styles.filter}>
            {tiers.map((ti) => (
              <button
                key={ti.id}
                className={`${styles.filterBtn} ${tier === ti.id ? styles.filterActive : ''}`}
                onClick={() => setTier(ti.id)}
              >
                {t(ti.label, lang)}
              </button>
            ))}
          </div>

          <RevealStagger staggerDelay={0.1}>
            <div className="grid">
              {filtered.map((hotel, i) => (
                <Card
                  key={hotel.id}
                  image={hotel.image}
                  title={hotel.name}
                  subtitle={hotel.area}
                  description={hotel.desc ? { zh: (hotel.desc.zh || '').slice(0, 60) + (hotel.desc.zh.length > 60 ? '…' : ''), en: (hotel.desc.en || '').slice(0, 80) + (hotel.desc.en.length > 80 ? '…' : '') } : undefined}
                  tags={hotel.rating ? [{ zh: `★ ${hotel.rating}/5`, en: `★ ${hotel.rating}/5` }] : []}
                  rating={hotel.rating}
                  link={`/accommodation/${hotel.id}`}
                  index={i}
                />
              ))}
            </div>
          </RevealStagger>
        </div>
      </section>

      <PatternDivider variant="cloud" color="gold" />

      {/* 住宿贴士 / Tips */}
      <section className="section" style={{ background: 'var(--rice-paper-warm)' }}>
        <div className="container">
          <SectionTitle
            title={{ zh: '住宿贴士', en: 'Accommodation Tips' }}
            subtitle={{ zh: '住得舒心 · 玩得尽兴', en: 'Rest Well, Explore Better' }}
            seal="锦囊"
          />

          <div className="grid">
            {[
              { title: { zh: '提前预订', en: 'Book Early' }, desc: { zh: '节假日和旅游旺季酒店价格大幅上涨，建议提前1-2个月预订。', en: 'Hotel prices surge during holidays and peak seasons. Book 1-2 months ahead.' } },
              { title: { zh: '位置优先', en: 'Location Matters' }, desc: { zh: '推荐住在西湖周边、武林广场或钱江新城区域，交通便利景点集中。', en: 'Stay near West Lake, Wulin Square, or Qianjiang New Town for convenience.' } },
              { title: { zh: '民宿体验', en: 'Try a Guesthouse' }, desc: { zh: '龙井、满觉陇等地的茶园民宿非常有特色，可体验采茶品茶的地道生活。', en: 'Tea plantation guesthouses in Longjing and Manjuelong offer unique local experiences.' } },
            ].map((tip, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <div className={styles.tipCard}>
                  <h3 className={styles.tipTitle}>{t(tip.title, lang)}</h3>
                  <p className={styles.tipDesc}>{t(tip.desc, lang)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}