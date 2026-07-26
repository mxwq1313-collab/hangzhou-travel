import { useState } from 'react';
import IMAGES from '../../data/images';
import { useLanguage, t } from '../../context/LanguageContext';
import { arrivalTransport, localTransport } from '../../data/transportation';
import Hero from '../../components/ui/Hero/Hero';
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle';
import Tabs from '../../components/ui/Tabs/Tabs';
import Reveal from '../../components/ui/Reveal/Reveal';
import PatternDivider from '../../components/ui/PatternDivider/PatternDivider';
import styles from './Transportation.module.css';

export default function Transportation() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('arrival');

  const tabItems = [
    { id: 'arrival', label: { zh: '抵达杭州', en: 'Getting Here' } },
    { id: 'local', label: { zh: '市内交通', en: 'Getting Around' } },
  ];

  const currentData = activeTab === 'arrival' ? (arrivalTransport || []) : (localTransport || []);

  const transportIcons = {
    flight: '✈️', train: '🚄', 'long-distance-bus': '🚌',
    metro: '🚇', bus: '🚌', taxi: '🚕', bike: '🚲', 'water-bus': '⛴️',
  };

  return (
    <>
      <Hero
        image={IMAGES.heroTransport}
        title={{ zh: '杭州交通', en: 'Transportation' }}
        subtitle={{ zh: '四通八达 · 便利出行', en: 'Well-Connected & Convenient' }}
        description={{
          zh: '杭州拥有完善的立体交通网络：萧山国际机场、高铁枢纽、地铁网络覆盖全城，让您的旅程畅通无阻。',
          en: 'Hangzhou has a comprehensive transportation network: Xiaoshan International Airport, high-speed rail hubs, and metro lines covering the entire city, ensuring seamless travel.'
        }}
        height="large"
      />

      <section className="section">
        <div className="container">
          <SectionTitle
            title={{ zh: '出行指南', en: 'Travel Guide' }}
            subtitle={{ zh: '轻松抵达 · 自在畅游', en: 'Arrive with Ease, Explore with Joy' }}
            seal="出行"
          />

          <Tabs items={tabItems} activeId={activeTab} onChange={setActiveTab}>
            <div className={styles.transportGrid}>
              {currentData.map((item, i) => (
                <Reveal key={item.id || i} delay={i * 0.1}>
                  <div className={styles.transportCard}>
                    <div className={styles.transportHeader}>
                      <span className={styles.transportIcon}>
                        {transportIcons[item.id] || '🚗'}
                      </span>
                      <h3 className={styles.transportTitle}>
                        {t(item.method, lang)}
                      </h3>
                    </div>

                    <p className={styles.transportDetail}>
                      {t(item.detail, lang)}
                    </p>

                    {item.tips && item.tips.length > 0 && (
                      <div className={styles.tipsList}>
                        <h4 className={styles.tipsTitle}>
                          {lang === 'zh' ? '实用提示' : 'Tips'}
                        </h4>
                        <ul>
                          {item.tips.map((tip, j) => (
                            <li key={j}>💡 {t(tip, lang)}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.lines && (
                      <div className={styles.linesInfo}>
                        <h4 className={styles.tipsTitle}>
                          {lang === 'zh' ? '线路信息' : 'Lines'}
                        </h4>
                        <p>{t(item.lines, lang)}</p>
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </Tabs>
        </div>
      </section>

      <PatternDivider variant="wave" color="gold" />

      {/* 交通贴士总结 / Summary */}
      <section className="section" style={{ background: 'var(--ink-deep)', color: 'var(--rice-paper-cool)' }}>
        <div className="container">
          <SectionTitle
            title={{ zh: '交通贴士', en: 'Travel Tips' }}
            subtitle={{ zh: '让您的旅程更轻松', en: 'Make Your Journey Smoother' }}
            seal="贴士"
            light
          />

          <div className="grid">
            {[
              {
                title: { zh: '地铁出行', en: 'Metro Travel' },
                desc: {
                  zh: '杭州地铁已开通多条线路，覆盖主要景点和商圈。推荐使用支付宝乘车码扫码进出站，方便快捷。',
                  en: 'Hangzhou Metro operates multiple lines covering major attractions and commercial areas. Alipay transit QR code is recommended for tap-and-go convenience.'
                },
              },
              {
                title: { zh: '移动支付', en: 'Mobile Payment' },
                desc: {
                  zh: '杭州全城支持支付宝和微信支付，公交、地铁、出租车均可使用移动支付，无需携带现金。',
                  en: 'Mobile payment (Alipay/WeChat Pay) is accepted citywide including buses, metro, and taxis. No cash needed.'
                },
              },
              {
                title: { zh: '共享单车', en: 'Bike Sharing' },
                desc: {
                  zh: '哈啰、美团等共享单车遍布全城，西湖周边骑行是最佳游览方式之一，扫码即可使用。',
                  en: 'Hello Bike, Meituan Bike and others are everywhere. Cycling around West Lake is one of the best ways to explore — just scan and ride.'
                },
              },
            ].map((tip, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <div className={styles.tipCard}>
                  <h3 className={styles.tipCardTitle}>{t(tip.title, lang)}</h3>
                  <p className={styles.tipCardDesc}>{t(tip.desc, lang)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}