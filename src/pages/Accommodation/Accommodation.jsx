import { useState } from 'react';
import { useLanguage, t } from '../../context/LanguageContext';
import { accommodations } from '../../data/accommodation';
import IMAGES from '../../data/images';
import Hero from '../../components/ui/Hero/Hero';
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle';
import Card from '../../components/ui/Card/Card';
import Reveal, { RevealStagger } from '../../components/ui/Reveal/Reveal';
import PatternDivider from '../../components/ui/PatternDivider/PatternDivider';
import styles from './Accommodation.module.css';

export default function Accommodation() {
  const { lang } = useLanguage();
  const [type, setType] = useState('all');
  const filters = [
    { id: 'all', label: { zh: '全部区域', en: 'All Areas' } },
    { id: 'scenic', label: { zh: '湖山度假', en: 'Scenic' } },
    { id: 'central', label: { zh: '市中心', en: 'Central' } },
    { id: 'business', label: { zh: '商务出行', en: 'Business' } },
    { id: 'transit', label: { zh: '交通中转', en: 'Transit' } },
  ];
  const filtered = type === 'all' ? accommodations : accommodations.filter((stay) => stay.type === type);

  return (
    <>
      <Hero
        image={IMAGES.heroHotel}
        title={{ zh: '杭州住哪里', en: 'Where to Stay in Hangzhou' }}
        subtitle={{ zh: '先选区域，再选酒店', en: 'Choose the Area Before the Hotel' }}
        description={{
          zh: '湖滨方便、灵隐清幽、钱江新城现代、东站适合中转。用真实区域照片和交通取舍，帮你避开“名字在西湖、实际离很远”的误区。',
          en: 'Compare real neighbourhoods, transport and trade-offs—from convenient Hubin to quiet Lingyin and modern Qianjiang New City.',
        }}
        height="large"
      />

      <section className="section">
        <div className="container">
          <SectionTitle title={{ zh: '住宿区域指南', en: 'Area Guide' }} subtitle={{ zh: '按行程选择落脚点', en: 'Match Your Base to Your Itinerary' }} seal="栖居" />
          <div className={styles.filter}>
            {filters.map((item) => (
              <button key={item.id} className={`${styles.filterBtn} ${type === item.id ? styles.filterActive : ''}`} onClick={() => setType(item.id)}>
                {t(item.label, lang)}
              </button>
            ))}
          </div>

          <RevealStagger staggerDelay={0.08}>
            <div className="grid">
              {filtered.map((stay, index) => (
                <Card
                  key={stay.id}
                  image={stay.image}
                  title={stay.name}
                  subtitle={stay.area}
                  description={{ zh: `${stay.desc.zh.slice(0, 72)}…`, en: `${stay.desc.en.slice(0, 100)}…` }}
                  tags={(stay.features || []).slice(0, 2)}
                  link={`/accommodation/${stay.id}`}
                  index={index}
                />
              ))}
            </div>
          </RevealStagger>
        </div>
      </section>

      <PatternDivider variant="cloud" color="gold" />
      <section className="section" style={{ background: 'var(--rice-paper-warm)' }}>
        <div className="container">
          <SectionTitle title={{ zh: '订房前检查', en: 'Before You Book' }} subtitle={{ zh: '看地图、看近期照片、看真实通勤', en: 'Map, Recent Photos and Real Travel Time' }} seal="锦囊" />
          <div className="grid">
            {[
              { title: { zh: '不要只看直线距离', en: 'Ignore Straight-Line Distance' }, desc: { zh: '西湖、湿地和车站范围都很大。把酒店地址放进地图，分别测算到地铁口和首个景点的步行路线。', en: 'West Lake, Xixi and the rail station are large. Map the actual walking route to both a metro entrance and your first sight.' } },
              { title: { zh: '节假日提前订', en: 'Book Holiday Dates Early' }, desc: { zh: '小长假、暑期和赏桂季价格波动明显。优先选择可取消订单，并在出发前再次确认入住规则。', en: 'Rates move sharply around public holidays and peak seasons. Prefer refundable bookings and reconfirm check-in rules.' } },
              { title: { zh: '查看近三个月实拍', en: 'Check Recent Guest Photos' }, desc: { zh: '重点看房间窗景、卫生间、隔音、潮湿和装修年份，不要只依据酒店宣传图或旧评价。', en: 'Inspect recent room, bathroom, soundproofing and renovation photos instead of relying on marketing images.' } },
            ].map((tip, index) => (
              <Reveal key={tip.title.en} delay={index * 0.12}>
                <div className={styles.tipCard}><h3 className={styles.tipTitle}>{t(tip.title, lang)}</h3><p className={styles.tipDesc}>{t(tip.desc, lang)}</p></div>
              </Reveal>
            ))}
          </div>
          <p style={{ marginTop: '2rem', textAlign: 'center', color: 'var(--ink-light)', fontSize: '0.9rem' }}>
            {lang === 'zh' ? '价格为常见区间参考，会随日期和房型变化；预订前请以平台与住宿方最新信息为准。' : 'Price bands are indicative and vary by date and room type; verify current details before booking.'}
          </p>
        </div>
      </section>
    </>
  );
}
