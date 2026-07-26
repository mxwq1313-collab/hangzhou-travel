import { useState } from 'react';
import IMAGES from '../../data/images';
import { motion } from 'framer-motion';
import { attractions } from '../../data/attractions';
import Hero from '../../components/ui/Hero/Hero';
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle';
import Tabs from '../../components/ui/Tabs/Tabs';
import Card from '../../components/ui/Card/Card';

const tabItems = [
  { id: 'all', label: { zh: '全部景点', en: 'All Sites' } },
  { id: 'heritage', label: { zh: '世界遗产', en: 'World Heritage' } },
  { id: 'temple', label: { zh: '古刹寺院', en: 'Temples' } },
  { id: 'nature', label: { zh: '自然风光', en: 'Nature' } },
  { id: 'culture', label: { zh: '文化博物', en: 'Culture' } },
];

function filterAttractions(id) {
  const all = attractions || [];
  if (id === 'all') return all;
  if (id === 'heritage') return all.filter(a => (a.tags || []).some(t => (t.zh || '').includes('世界遗产')));
  if (id === 'temple') return all.filter(a => (a.tags || []).some(t => (t.zh || '').includes('寺庙') || (t.zh || '').includes('佛教')));
  if (id === 'nature') return all.filter(a => (a.tags || []).some(t => (t.zh || '').includes('自然') || (t.zh || '').includes('湿地')));
  if (id === 'culture') return all.filter(a => (a.tags || []).some(t => (t.zh || '').includes('博物') || (t.zh || '').includes('文化')));
  return all;
}

export default function Attractions() {
  const [activeId, setActiveId] = useState('all');
  const filtered = filterAttractions(activeId);

  return (
    <>
      <Hero
        image={IMAGES.heroWestLake}
        title={{ zh: '杭州景点', en: 'Attractions' }}
        subtitle={{ zh: '山水如诗 · 人文荟萃', en: 'Poetic Landscapes, Rich Heritage' }}
        description={{
          zh: '杭州拥有三处世界文化遗产，点击卡片查看各景点详细信息。',
          en: 'Hangzhou boasts three UNESCO World Heritage sites. Tap any card for details.'
        }}
        height="large"
      />

      <section className="section">
        <div className="container">
          <SectionTitle
            title={{ zh: '探索名胜', en: 'Discover Landmarks' }}
            subtitle={{ zh: '千年胜迹 · 步步皆景', en: 'Every Step Reveals a Masterpiece' }}
            seal="胜迹"
          />

          <Tabs items={tabItems} activeId={activeId} onChange={setActiveId}>
            <div className="grid">
              {filtered.map((attr, i) => (
                <motion.div
                  key={attr.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Card
                    image={attr.image}
                    title={attr.name}
                    subtitle={attr.subtitle}
                    description={{ zh: ((attr.intro?.zh || '').slice(0, 60) + (attr.intro?.zh?.length > 60 ? '…' : '')), en: ((attr.intro?.en || '').slice(0, 80) + (attr.intro?.en?.length > 80 ? '…' : '')) }}
                    tags={(attr.tags || []).slice(0, 2)}
                    link={`/attractions/${attr.id}`}
                    index={i}
                  />
                </motion.div>
              ))}
            </div>
          </Tabs>
        </div>
      </section>
    </>
  );
}