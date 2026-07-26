import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage, t } from '../../context/LanguageContext';
import { foods } from '../../data/food';
import SafeImage from '../../components/shared/SafeImage';
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle';
import PageTransition from '../../components/ui/PageTransition';
import styles from './FoodDetail.module.css';

export default function FoodDetail() {
  const { id } = useParams();
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const food = (foods || []).find(f => f.id === id);

  if (!food) {
    return (
      <PageTransition>
        <div className={styles.notFound}>
          <p>{lang === 'zh' ? '美食未找到' : 'Dish not found'}</p>
          <Link to="/food" className="btn btn--outline">
            {lang === 'zh' ? '返回美食列表' : 'Back to Cuisine'}
          </Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className={styles.hero}>
        <SafeImage src={food.image} alt={t(food.name, lang)} className={styles.heroImg} seed={2} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <button className={styles.backBtn} onClick={() => navigate('/food')}>
            ← {lang === 'zh' ? '返回' : 'Back'}
          </button>
          <h1 className={styles.title}>{t(food.name, lang)}</h1>
          <p className={styles.subtitle}>{t(food.altName, lang)}</p>
        </div>
      </div>

      <section className="section">
        <div className="container container--narrow">
          {/* 故事 / Story */}
          <SectionTitle
            title={{ zh: '美食故事', en: 'The Story' }}
            subtitle={{ zh: '每一道菜都有传奇', en: 'Every Dish Has a Legend' }}
            seal="典故"
          />
          <div className="bilingual-block">
            <p className="zh">{food.story?.zh}</p>
            <p className="en">{food.story?.en}</p>
          </div>

          {/* 信息卡片 / Info Cards */}
          <div className={styles.infoGrid}>
            <motion.div
              className={styles.infoCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className={styles.infoEmoji}>👅</span>
              <h4>{lang === 'zh' ? '口味' : 'Flavor'}</h4>
              <p>{t(food.flavor, lang)}</p>
            </motion.div>

            <motion.div
              className={styles.infoCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <span className={styles.infoEmoji}>🥬</span>
              <h4>{lang === 'zh' ? '食材' : 'Ingredients'}</h4>
              <div className={styles.ingredients}>
                {(food.ingredients || []).map((ing, i) => (
                  <span key={i} className="tag">{t(ing, lang)}</span>
                ))}
              </div>
            </motion.div>

            {food.pairing && (
              <motion.div
                className={styles.infoCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className={styles.infoEmoji}>🍵</span>
                <h4>{lang === 'zh' ? '搭配建议' : 'Pairing'}</h4>
                <p>{t(food.pairing, lang)}</p>
              </motion.div>
            )}

            {food.price && (
              <motion.div
                className={styles.infoCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <span className={styles.infoEmoji}>💰</span>
                <h4>{lang === 'zh' ? '价格范围' : 'Price'}</h4>
                <p>{t(food.price, lang)}</p>
              </motion.div>
            )}

            {food.whereToEat && (
              <motion.div
                className={styles.infoCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <span className={styles.infoEmoji}>📍</span>
                <h4>{lang === 'zh' ? '推荐去处' : 'Where to Eat'}</h4>
                <p>{t(food.whereToEat, lang)}</p>
              </motion.div>
            )}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
            <Link to="/food" className="btn btn--outline">
              ← {lang === 'zh' ? '返回美食列表' : 'All Dishes'}
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}