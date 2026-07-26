import { IMAGES } from './images';
export const seasons = [
  {
    id: 'spring',
    name: { zh: '春', en: 'Spring' },
    months: { zh: '3月 — 5月', en: 'March — May' },
    temp: { zh: '10°C — 25°C', en: '50°F — 77°F' },
    description: {
      zh: '杭州的春天是一年中最美的季节。西湖边桃红柳绿，樱花如云，苏堤春晓更是美不胜收。龙井茶园里新芽初绽，空气中弥漫着龙井新茶的清香。太子湾公园的郁金香花海、花港观鱼的牡丹园，处处皆是花的盛宴。春风和煦，最适合泛舟西湖，感受"暖风熏得游人醉"的诗意。',
      en: 'Hangzhou\'s spring is the most beautiful season. Peach blossoms and cherry trees bloom around West Lake, with Su Causeway at its most enchanting. New tea buds sprout in Longjing plantations, filling the air with fresh tea fragrance. The tulip fields at Taiziwan Park and peony gardens at Flower Harbor create a floral paradise. Perfect weather for a West Lake boat ride.'
    },
    highlights: [
      { zh: '苏堤春晓 — 桃红柳绿，春意盎然', en: 'Spring Dawn at Su Causeway — blossoms in full glory' },
      { zh: '太子湾郁金香 — 数十万株郁金香盛放', en: 'Taiziwan Tulips — hundreds of thousands in bloom' },
      { zh: '龙井问茶 — 清明前后正是采茶好时节', en: 'Longjing tea harvest — the best time around Qingming Festival' },
      { zh: '樱花季 — 太子湾、植物园樱花盛开', en: 'Cherry blossom season — Taiziwan and Botanical Garden' },
    ],
    festivals: [
      { title: { zh: '清明节', en: 'Qingming Festival' }, date: { zh: '4月初', en: 'Early April' }, desc: { zh: '踏青扫墓，品明前龙井的最佳时机', en: 'Spring outing and tomb sweeping; the best time for pre-Qingming Longjing tea' } },
      { title: { zh: '西湖花会', en: 'West Lake Flower Expo' }, date: { zh: '3月-5月', en: 'Mar-May' }, desc: { zh: '西湖周边公园举办各种花卉展览', en: 'Various flower exhibitions around West Lake parks' } },
    ],
    travelTips: [
      { zh: '早晚温差大，带一件薄外套或针织衫', en: 'Large temperature swings — bring a light jacket or cardigan' },
      { zh: '清明前后是旅游高峰，提前预订酒店', en: 'Peak tourist season around Qingming — book hotels early' },
      { zh: '龙井村可体验采茶，建议提前预约', en: 'Tea picking in Longjing Village — reserve in advance' },
    ],
    rating: 5,
    image: IMAGES.seasonSpring,
  },
  {
    id: 'summer',
    name: { zh: '夏', en: 'Summer' },
    months: { zh: '6月 — 8月', en: 'June — August' },
    temp: { zh: '25°C — 38°C', en: '77°F — 100°F' },
    description: {
      zh: '杭州的夏天炎热潮湿，但有"接天莲叶无穷碧，映日荷花别样红"的美景。西湖曲院风荷是赏荷最佳去处，满池荷花盛开，清香扑面。傍晚在湖边散步乘凉，或去西溪湿地泛舟，感受水上森林的清凉。九溪十八涧是夏日避暑的绝佳去处，溪水潺潺，绿树成荫。',
      en: 'Summer is hot and humid, but offers the spectacular sight of endless lotus leaves. Quyuan Garden (Breeze-Ruffled Lotus) is the prime spot for lotus viewing. Evening lakeside strolls or a boat ride through Xixi Wetland offer cool respite. Nine Creeks and Eighteen Gullies is a perfect summer escape with shaded streams.'
    },
    highlights: [
      { zh: '曲院风荷 — 十里荷花，香飘满湖', en: 'Breeze-Ruffled Lotus — miles of fragrant lotus blooms' },
      { zh: '九溪十八涧 — 清凉溪水，夏日避暑', en: 'Nine Creeks — cool streams, summer paradise' },
      { zh: '西湖夜游 — 傍晚湖边散步，看音乐喷泉', en: 'West Lake night stroll — musical fountain shows at dusk' },
      { zh: '云栖竹径 — 竹林蔽日，清凉幽静', en: 'Bamboo-lined Path — shaded and serene' },
    ],
    festivals: [
      { title: { zh: '端午节', en: 'Dragon Boat Festival' }, date: { zh: '农历五月初五', en: '5th day of 5th lunar month' }, desc: { zh: '西溪湿地举办龙舟竞渡，热闹非凡', en: 'Dragon boat races at Xixi Wetland — a spectacular event' } },
      { title: { zh: '西湖荷花节', en: 'West Lake Lotus Festival' }, date: { zh: '6月-8月', en: 'Jun-Aug' }, desc: { zh: '曲院风荷和郭庄举办荷花展览', en: 'Lotus exhibitions at Quyuan Garden and Guo\'s Villa' } },
    ],
    travelTips: [
      { zh: '注意防暑防晒，带好遮阳伞和水', en: 'Protect against heat and sun — bring an umbrella and water' },
      { zh: '中午最热时段建议参观博物馆等室内景点', en: 'Visit indoor attractions (museums) during the midday heat' },
      { zh: '梅雨季（6月中下旬）多雨，随身带伞', en: 'Plum rain season (late June) brings frequent showers — carry an umbrella' },
    ],
    rating: 3,
    image: IMAGES.seasonSummer,
  },
  {
    id: 'autumn',
    name: { zh: '秋', en: 'Autumn' },
    months: { zh: '9月 — 11月', en: 'September — November' },
    temp: { zh: '12°C — 28°C', en: '54°F — 82°F' },
    description: {
      zh: '秋天是杭州最舒适的季节，天高云淡，桂花飘香。满觉陇的"满陇桂雨"是杭州秋日最美的风景，整条山谷弥漫着桂花甜香。西溪湿地的芦花如雪，平湖秋月的月色如水，都是不可错过的秋日胜景。这个季节最适合徒步和骑行，在西湖边尽情享受秋日的惬意。',
      en: 'Autumn is Hangzhou\'s most comfortable season — crisp air, blue skies, and the intoxicating fragrance of osmanthus. Manjuelong\'s "Osmanthus Rain" is the quintessential autumn scene. Xixi Wetland\'s reed flowers turn snowy white, and "Autumn Moon over the Calm Lake" is breathtaking. Perfect for hiking and cycling around West Lake.'
    },
    highlights: [
      { zh: '满陇桂雨 — 满山桂花，甜香醉人', en: 'Osmanthus Rain at Manjuelong — intoxicating fragrance' },
      { zh: '平湖秋月 — 中秋赏月最佳地点', en: 'Autumn Moon — the best moon-viewing spot for Mid-Autumn' },
      { zh: '西溪芦花 — 芦苇花开如飞雪', en: 'Xixi Reed Flowers — snowy reed fields' },
      { zh: '北山街梧桐 — 金色梧桐落叶铺满街道', en: 'Beishan Road plane trees — golden leaves carpeting the street' },
    ],
    festivals: [
      { title: { zh: '中秋节', en: 'Mid-Autumn Festival' }, date: { zh: '农历八月十五', en: '15th day of 8th lunar month' }, desc: { zh: '平湖秋月、三潭印月是赏月胜地，西湖边有灯会', en: 'Prime moon-viewing at West Lake with lantern displays' } },
      { title: { zh: '杭州桂花节', en: 'Hangzhou Osmanthus Festival' }, date: { zh: '9月下旬-10月', en: 'Late Sep-Oct' }, desc: { zh: '满觉陇举办桂花节，可品尝桂花糕、桂花酒', en: 'Osmanthus festival at Manjuelong — try osmanthus cake and wine' } },
    ],
    travelTips: [
      { zh: '满觉陇在桂花季人气极旺，建议清晨前往避开人潮', en: 'Manjuelong is packed during osmanthus season — go early morning' },
      { zh: '秋天的杭州是最佳旅行时间，提前预订住宿', en: 'The absolute best season — book everything well in advance' },
      { zh: '钱塘江大潮在农历八月十八最壮观（位于海宁盐官）', en: 'Tidal bore peaks on the 18th day of the 8th lunar month (Haining Yanguan)' },
    ],
    rating: 5,
    image: IMAGES.seasonAutumn,
  },
  {
    id: 'winter',
    name: { zh: '冬', en: 'Winter' },
    months: { zh: '12月 — 2月', en: 'December — February' },
    temp: { zh: '0°C — 10°C', en: '32°F — 50°F' },
    description: {
      zh: '杭州的冬天湿冷但别有风韵。如果幸运遇到下雪，西湖雪景是难得一见的美景——"断桥残雪"是西湖十景中最具诗意的一景。雪后的孤山梅花暗香浮动，灵隐寺在白雪映衬下更显庄严肃穆。这个季节游客较少，酒店价格实惠，适合安静地感受杭州的另一面。',
      en: 'Winter is damp and cold but uniquely charming. With luck and a snowfall, West Lake transforms into a rare wonder — "Lingering Snow on Broken Bridge" is the most poetic of the Ten Scenes. Plum blossoms on Solitary Hill add a subtle fragrance; Lingyin Temple looks majestic against white snow. Fewer tourists and lower hotel prices make this ideal for experiencing Hangzhou\'s quiet side.'
    },
    highlights: [
      { zh: '断桥残雪 — 雪后西湖最富诗意的景致', en: 'Snow on Broken Bridge — West Lake\'s most poetic winter scene' },
      { zh: '孤山赏梅 — 梅妻鹤子，暗香疏影', en: 'Solitary Hill plums — "plum wife, crane child" poetry' },
      { zh: '灵隐禅意 — 雪中古寺更显清幽', en: 'Lingyin Temple in snow — serene and majestic' },
      { zh: '龙井茶园雪景 — 银装素裹的茶山', en: 'Snowy tea terraces — silver-coated Longjing hills' },
    ],
    festivals: [
      { title: { zh: '春节', en: 'Spring Festival' }, date: { zh: '农历正月初一', en: '1st day of lunar new year' }, desc: { zh: '各大寺庙香火旺盛，河坊街有传统年俗表演', en: 'Temples are lively with worshippers; Hefang Street has traditional New Year shows' } },
      { title: { zh: '元宵节', en: 'Lantern Festival' }, date: { zh: '农历正月十五', en: '15th day of 1st lunar month' }, desc: { zh: '西湖边和运河广场有灯会', en: 'Lantern displays around West Lake and Canal Square' } },
    ],
    travelTips: [
      { zh: '杭州冬天没有集中供暖，室内较冷，注意保暖', en: 'No central heating — dress warmly, even indoors' },
      { zh: '下雪天西湖最美，但杭州下雪并不多见', en: 'West Lake is most beautiful in snow, but snowfall is rare' },
      { zh: '春节前后大部分餐厅会关门休息1-3天', en: 'Most restaurants close for 1-3 days around Chinese New Year' },
    ],
    rating: 3,
    image: IMAGES.seasonWinter,
  },
];