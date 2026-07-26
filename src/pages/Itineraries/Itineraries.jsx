import { useLanguage, t } from '../../context/LanguageContext';
import IMAGES from '../../data/images';
import { itineraries } from '../../data/itineraries';
import Hero from '../../components/ui/Hero/Hero';
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle';
import Accordion from '../../components/ui/Accordion/Accordion';
import Reveal from '../../components/ui/Reveal/Reveal';
import PatternDivider from '../../components/ui/PatternDivider/PatternDivider';
import styles from './Itineraries.module.css';

export default function Itineraries() {
  const { lang } = useLanguage();

  const accordionItems = (itineraries || []).map((plan) => ({
    id: plan.id,
    title: plan.title,
    content: (
      <div>
        <p className={styles.summary}>
          {t(plan.summary, lang)}
        </p>

        <div className={styles.suitable}>
          <span className={styles.suitableLabel}>
            {lang === 'zh' ? '适合' : 'Suitable for'}:{' '}
          </span>
          {t(plan.suitable, lang)}
        </div>

        {/* Days */}
        <div className={styles.daysGrid}>
          {(plan.days || []).map((day) => (
            <div key={day.day} className={styles.dayCard}>
              <div className={styles.dayHeader}>
                <span className={styles.dayNumber}>
                  {lang === 'zh' ? '第' : 'Day '}{day.day}{lang === 'zh' ? '天' : ''}
                </span>
                <span className={styles.dayTheme}>
                  {t(day.theme, lang)}
                </span>
              </div>

              <div className={styles.schedule}>
                {(day.schedule || []).map((item, i) => (
                  <div key={i} className={styles.scheduleItem}>
                    <div className={styles.scheduleTime}>
                      {t(item.time, lang)}
                    </div>
                    <div className={styles.scheduleContent}>
                      <h5 className={styles.scheduleTitle}>
                        {t(item.activity, lang)}
                      </h5>
                      <p className={styles.scheduleDetail}>
                        {t(item.detail, lang)}
                      </p>
                      {item.tips && (
                        <p className={styles.scheduleTips}>
                          💡 {t(item.tips, lang)}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Practical Info */}
        {plan.budget && (
          <div className={styles.practical}>
            <h4 className={styles.practicalTitle}>
              {lang === 'zh' ? '预算参考' : 'Budget Estimate'}
            </h4>
            <p className={styles.practicalValue}>
              {t(plan.budget, lang)}
            </p>
          </div>
        )}

        {plan.notes && (
          <div className={styles.notes}>
            <h4 className={styles.practicalTitle}>
              {lang === 'zh' ? '注意事项' : 'Notes'}
            </h4>
            <ul className={styles.notesList}>
              {(plan.notes || []).map((note, i) => (
                <li key={i}>{t(note, lang)}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    ),
  }));

  return (
    <>
      <Hero
        image={IMAGES.heroItinerary}
        title={{ zh: '行程规划', en: 'Itineraries' }}
        subtitle={{ zh: '精心设计 · 畅游无忧', en: 'Well-Planned, Worry-Free' }}
        description={{
          zh: '我们为您准备了一日游、两日游、三日游三种行程方案，覆盖杭州最经典的景点和体验，让您的杭州之旅充实而从容。',
          en: 'We\'ve prepared one-day, two-day, and three-day itineraries covering Hangzhou\'s most classic attractions and experiences, ensuring a fulfilling and relaxed journey.'
        }}
        height="large"
      />

      <section className="section">
        <div className="container">
          <SectionTitle
            title={{ zh: '行程方案', en: 'Travel Plans' }}
            subtitle={{ zh: '量身定制您的杭州之旅', en: 'Tailor-Made Hangzhou Journeys' }}
            seal="行程"
          />

          <div className={styles.accordionWrap}>
            <Accordion items={accordionItems} />
          </div>
        </div>
      </section>

      <PatternDivider variant="cloud" color="gold" />

      {/* Custom Tips */}
      <section className="section" style={{ background: 'var(--rice-paper-warm)' }}>
        <div className="container">
          <SectionTitle
            title={{ zh: '旅行锦囊', en: 'Travel Tips' }}
            subtitle={{ zh: '让旅途更完美的细节', en: 'Details That Make It Perfect' }}
            seal="锦囊"
          />

          <div className="grid">
            {[
              {
                title: { zh: '景点预约', en: 'Book in Advance' },
                desc: {
                  zh: '热门景点如灵隐寺、雷峰塔建议提前在线预约购票，尤其是节假日期间。可通过"杭州旅游"官方小程序预约。',
                  en: 'Popular sites like Lingyin Temple and Leifeng Pagoda recommend advance online booking, especially during holidays. Use the official "Hangzhou Tourism" mini-program.'
                },
              },
              {
                title: { zh: '穿着建议', en: 'What to Wear' },
                desc: {
                  zh: '杭州游览以步行为主，建议穿着舒适的平底鞋。春秋季早晚温差大，带一件薄外套；夏季注意防晒。',
                  en: 'Hangzhou sightseeing involves lots of walking — wear comfortable flat shoes. Spring/autumn has temperature swings, bring a light jacket. Sun protection in summer.'
                },
              },
              {
                title: { zh: '美食时间', en: 'Dining Times' },
                desc: {
                  zh: '推荐午餐11:30前或13:00后避开高峰。热门餐厅如楼外楼、知味观排队较长，建议提前30分钟到达。',
                  en: 'For lunch, go before 11:30 or after 13:00 to avoid crowds. Popular restaurants like Louwailou and Zhiweiguan have long queues — arrive 30 min early.'
                },
              },
              {
                title: { zh: '购物提示', en: 'Shopping Tips' },
                desc: {
                  zh: '龙井茶建议在龙井村或梅家坞茶园直接购买，品质更有保证。丝绸制品可去中国丝绸城选购。',
                  en: 'Buy Longjing tea directly at Longjing Village or Meijiawu plantations for guaranteed quality. For silk products, visit China Silk City.'
                },
              },
              {
                title: { zh: '文化礼仪', en: 'Cultural Etiquette' },
                desc: {
                  zh: '进入寺庙请保持安静，拍摄佛像前确认是否允许。品茶时可学习"三龙护鼎"的持杯方式。',
                  en: 'Keep quiet in temples and check before photographing Buddha statues. Learn the "three dragons protecting the tripod" teacup holding technique during tea tasting.'
                },
              },
              {
                title: { zh: '紧急联系', en: 'Emergency Contacts' },
                desc: {
                  zh: '报警110、火警119、急救120。旅游投诉：12301。杭州旅游服务热线：96123。',
                  en: 'Police 110, Fire 119, Ambulance 120. Tourist complaint: 12301. Hangzhou tourist hotline: 96123.'
                },
              },
            ].map((tip, i) => (
              <Reveal key={i} delay={i * 0.1}>
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