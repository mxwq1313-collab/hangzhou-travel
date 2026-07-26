import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IMAGES from '../../data/images';
import { useLanguage, t } from '../../context/LanguageContext';
import { foods } from '../../data/food';
import Hero from '../../components/ui/Hero/Hero';
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle';
import Card from '../../components/ui/Card/Card';
import Reveal, { RevealStagger } from '../../components/ui/Reveal/Reveal';
import PatternDivider from '../../components/ui/PatternDivider/PatternDivider';
import styles from './Food.module.css';

export default function Food() {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const [category, setCategory] = useState('all');

  const categories = [
    { id: 'all', label: { zh: '全部', en: 'All' } },
    { id: 'meat', label: { zh: '肉食', en: 'Meat' } },
    { id: 'seafood', label: { zh: '水产', en: 'Seafood' } },
    { id: 'dessert', label: { zh: '点心', en: 'Dessert' } },
  ];

  const filtered = category === 'all'
    ? (foods || [])
    : (foods || []).filter(f => f.category === category);

  return (
    <>
      <Hero
        image={IMAGES.heroFood}
        title={{ zh: '杭州美食', en: 'Hangzhou Cuisine' }}
        subtitle={{ zh: '江南佳肴 · 齿颊留香', en: 'Flavors of Jiangnan' }}
        description={{
          zh: '杭帮菜是浙菜的主要代表，讲究清淡鲜嫩。点击卡片了解每道菜的故事。',
          en: 'Hangzhou cuisine emphasizes lightness and freshness. Tap each card to discover the story behind every dish.'
        }}
        height="large"
      />

      <section className="section">
        <div className="container">
          <SectionTitle
            title={{ zh: '必尝佳肴', en: 'Must-Try Dishes' }}
            subtitle={{ zh: '舌尖上的杭州', en: 'A Bite of Hangzhou' }}
            seal="佳肴"
          />

          <div className={styles.filter}>
            {categories.map((c) => (
              <button
                key={c.id}
                className={`${styles.filterBtn} ${category === c.id ? styles.filterActive : ''}`}
                onClick={() => setCategory(c.id)}
              >
                {t(c.label, lang)}
              </button>
            ))}
          </div>

          <RevealStagger staggerDelay={0.1}>
            <div className="grid">
              {filtered.map((food, i) => (
                <Card
                  key={food.id || i}
                  image={food.image}
                  title={food.name}
                  subtitle={food.altName}
                  description={food.flavor}
                  tags={(food.ingredients || []).slice(0, 2)}
                  link={`/food/${food.id}`}
                  index={i}
                />
              ))}
            </div>
          </RevealStagger>
        </div>
      </section>

      <PatternDivider variant="cloud" color="cinnabar" />

      {/* 美食故事 / Food Stories */}
      <section className="section" style={{ background: 'var(--rice-paper-warm)' }}>
        <div className="container">
          <SectionTitle
            title={{ zh: '美食故事', en: 'Food Stories' }}
            subtitle={{ zh: '食在杭州 · 味在故事', en: 'Every Dish Tells a Story' }}
            seal="食事"
          />

          <div className="grid">
            {[
              { title: { zh: '东坡肉', en: 'Dongpo Pork' }, desc: { zh: '相传苏轼在杭州任知州时，疏浚西湖修筑苏堤，百姓送来猪肉。苏轼用慢火红烧之法烹制，回赠百姓，由此得名"东坡肉"。肥而不腻，酥烂如花。', en: 'Legend says when Su Shi governed Hangzhou and built the Su Causeway, locals gifted him pork. He braised it slowly with soy sauce and returned it to the people — thus "Dongpo Pork" was born. Tender, aromatic, and meltingly soft.' } },
              { title: { zh: '西湖醋鱼', en: 'Vinegar Fish' }, desc: { zh: '选用西湖草鱼，以糖醋烹制。传说是宋代名厨宋五嫂所创，鱼肉鲜嫩酸甜交织，是杭帮菜的灵魂名菜之一。', en: 'Fresh West Lake grass carp prepared with sugar and vinegar. Attributed to the Song Dynasty chef Sister Song Wu, the fish is tender with a perfect sweet-sour balance — a soul dish of Hangzhou cuisine.' } },
              { title: { zh: '龙井虾仁', en: 'Longjing Shrimp' }, desc: { zh: '将清明节前的龙井新茶嫩芽与鲜虾仁同炒，茶香与虾鲜完美融合。相传是由天外天菜馆的厨师偶然创制而成。', en: 'Fresh shrimp stir-fried with tender pre-Qingming Longjing tea buds, creating a marriage of tea fragrance and seafood sweetness.' } },
            ].map((story, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <div className={styles.storyCard}>
                  <h3 className={styles.storyTitle}>{t(story.title, lang)}</h3>
                  <p className={styles.storyDesc}>{t(story.desc, lang)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PatternDivider variant="double-line" color="gold" />

      {/* CTA to Itineraries */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className={styles.ctaBanner}>
              <h2 className={styles.ctaTitle}>
                {lang === 'zh' ? '美食配美景' : 'Good Food, Great Scenery'}
              </h2>
              <p className={styles.ctaDesc}>
                {lang === 'zh'
                  ? '把美食体验安排进行程，让味蕾也来一场杭州之旅'
                  : 'Weave these food experiences into your itinerary for a flavor-packed Hangzhou journey'}
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