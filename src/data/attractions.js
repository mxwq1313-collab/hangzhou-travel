import { IMAGES } from './images';
export const attractions = [
  {
    id: 'west-lake',
    image: IMAGES.attrWestLake,
    tags: [{ zh: '世界遗产', en: 'World Heritage' }, { zh: '5A景区', en: '5A Site' }],
    name: { zh: '西湖', en: 'West Lake' },
    subtitle: { zh: '淡妆浓抹总相宜', en: 'Always Alluring, Rain or Shine' },
    intro: {
      zh: '西湖是中国十大风景名胜之一，也是中国唯一一个湖泊类世界文化遗产。景区总面积约60平方公里，以一山、二塔、三岛、三堤、五湖为基本格局，分布着100多处景点。苏堤春晓、断桥残雪、雷峰夕照等"西湖十景"闻名遐迩，历代文人墨客在此留下了无数脍炙人口的诗篇。',
      en: 'West Lake is one of China\'s top ten scenic areas and the country\'s only lake-type UNESCO World Heritage site. Covering about 60 km², it features iconic causeways, pagodas, and islands. The "Ten Scenes of West Lake" — including Spring Dawn at Su Causeway and Lingering Snow on Broken Bridge — have inspired countless poets and artists over the centuries.'
    },
    history: {
      zh: '西湖形成于约2000年前，原为钱塘江的一个浅海湾，后因泥沙淤积形成泻湖。唐代白居易任杭州刺史时修筑堤坝，宋代苏轼疏浚西湖并筑苏堤，"西湖"之名始于唐代。2011年列入世界文化遗产。',
      en: 'West Lake formed about 2,000 years ago as a shallow bay of the Qiantang River before silt deposits created a lagoon. Tang Dynasty poet Bai Juyi built causeways as Hangzhou\'s governor, while Su Shi (Su Dongpo) dredged the lake and built Su Causeway during the Song Dynasty. It became a UNESCO site in 2011.'
    },
    highlights: [
      { zh: '苏堤春晓 — 春日苏堤桃红柳绿，最宜漫步', en: 'Spring Dawn at Su Causeway — perfect for spring strolls' },
      { zh: '断桥残雪 — 冬日雪后桥面似断非断的奇景', en: 'Lingering Snow on Broken Bridge — magical winter scene' },
      { zh: '雷峰夕照 — 夕阳余晖中的雷峰塔与湖光山色', en: 'Leifeng Pagoda in Evening Glow — sunset over the lake' },
      { zh: '三潭印月 — 湖中三座石塔，中秋赏月胜地', en: 'Three Pools Mirroring the Moon — iconic pagodas in the lake' },
      { zh: '花港观鱼 — 牡丹园与红鲤池相映成趣', en: 'Viewing Fish at Flower Harbor — peonies and koi ponds' },
    ],
    practical: {
      address: { zh: '杭州市西湖区龙井路1号', en: 'No.1 Longjing Road, Xihu District' },
      hours: { zh: '全天开放（沿湖区域）', en: 'Open 24 hours (lakeside area)' },
      ticket: { zh: '环湖免费，部分景点收费（10-40元不等）', en: 'Lake area free; some sites ¥10-40' },
      bestTime: { zh: '春秋两季最佳（3-5月，9-11月）', en: 'Best in spring (Mar-May) and autumn (Sep-Nov)' },
      transport: { zh: '地铁1号线龙翔桥站/凤起路站步行可达', en: 'Metro Line 1: Longxiangqiao or Fengqi Road stations' },
    },
  },
  {
    id: 'lingyin-temple',
    image: IMAGES.attrLingyin,
    tags: [{ zh: '千年古刹', en: 'Ancient Temple' }, { zh: '佛教圣地', en: 'Buddhist Site' }],
    name: { zh: '灵隐寺', en: 'Lingyin Temple' },
    subtitle: { zh: '仙灵所隐 · 禅宗祖庭', en: 'Where Immortals Dwell in Seclusion' },
    intro: {
      zh: '灵隐寺又名云林寺，始建于东晋咸和元年（公元326年），距今近1700年历史，是中国佛教禅宗十大古刹之一。寺庙背靠北高峰，面朝飞来峰，古木参天，环境清幽。寺内大雄宝殿高达33.6米，供奉释迦牟尼佛像，是中国最高的木雕坐佛之一。飞来峰上有五代至元代石刻造像470余尊，为全国重点文物保护单位。',
      en: 'Lingyin Temple (Temple of the Soul\'s Retreat), founded in 326 AD during the Eastern Jin Dynasty, is one of China\'s ten great Chan Buddhist temples with nearly 1,700 years of history. Nestled against Beigao Peak and facing Feilai Peak, the temple features a 33.6m-tall Main Hall housing an enormous seated Buddha. Feilai Peak contains over 470 stone carvings dating from the Five Dynasties to the Yuan Dynasty.'
    },
    history: { zh: '东晋咸和元年印度僧人慧理创建，历经多次毁坏与重建。现存建筑主要为清代重建，建国后多次修缮。', en: 'Founded by Indian monk Huili in 326 AD. Rebuilt multiple times; current structures largely Qing Dynasty with modern restorations.' },
    highlights: [
      { zh: '大雄宝殿 — 33.6米高，中国最高木雕坐佛', en: 'Main Hall — 33.6m tall, China\'s tallest wooden seated Buddha' },
      { zh: '飞来峰造像 — 470余尊五代至元代石刻', en: 'Feilai Peak carvings — 470+ stone statues across dynasties' },
      { zh: '一线天 — 飞来峰上的天然奇观', en: 'Thread of Sky — natural rock crevice wonder' },
      { zh: '五百罗汉堂 — 形态各异的五百罗汉塑像', en: 'Hall of 500 Arhats — uniquely expressive statues' },
    ],
    practical: {
      address: { zh: '杭州市西湖区法云弄1号', en: 'No.1 Fayun Lane, Xihu District' },
      hours: { zh: '7:00-18:15（随季节调整）', en: '7:00-18:15 (varies by season)' },
      ticket: { zh: '飞来峰45元，灵隐寺30元', en: 'Feilai Peak ¥45; Temple ¥30' },
      bestTime: { zh: '全年皆宜，清晨人少更为清静', en: 'Year-round; early morning is quietest' },
      transport: { zh: '公交7路/807路灵隐站', en: 'Bus 7 or 807 to Lingyin stop' },
    },
  },
  {
    id: 'leifeng-pagoda',
    image: IMAGES.attrLeifeng,
    tags: [{ zh: '西湖十景', en: 'Top 10 Scene' }, { zh: '地标建筑', en: 'Landmark' }],
    name: { zh: '雷峰塔', en: 'Leifeng Pagoda' },
    subtitle: { zh: '雷峰夕照 · 千年传奇', en: 'Evening Glow, Millennium Legend' },
    intro: {
      zh: '雷峰塔位于西湖南岸夕照山上，因《白蛇传》传说而家喻户晓。原塔建于公元975年（北宋），1924年倒塌，2002年重建。新塔高71米，是一座铜制仿古建筑，塔内保留有原塔遗址。登塔可俯瞰西湖全景，尤其黄昏时分，"雷峰夕照"为西湖十景之一。',
      en: 'Leifeng Pagoda sits on Sunset Hill on West Lake\'s southern shore, famous worldwide through the Legend of the White Snake. The original pagoda was built in 975 AD (Northern Song) and collapsed in 1924. The 71m-tall reconstruction (2002) preserves the original ruins within. The panoramic lake view, especially at sunset, is one of the top ten West Lake scenes.'
    },
    history: { zh: '原塔建于北宋开宝八年（975年），吴越国王为庆祝王妃生子而建。1924年倒塌，2002年重建开放。', en: 'Built in 975 AD by the King of Wuyue to celebrate his consort\'s childbirth. Collapsed in 1924; reconstructed and reopened in 2002.' },
    highlights: [
      { zh: '塔顶观景台 — 360度俯瞰西湖全景', en: 'Observation deck — 360° panoramic West Lake views' },
      { zh: '原塔遗址 — 在塔内可见千年古塔残基', en: 'Original ruins — visible ancient pagoda foundations inside' },
      { zh: '白蛇传壁画 — 精美的东阳木雕讲述传说', en: 'White Snake murals — exquisite Dongyang wood carvings' },
      { zh: '雷峰夕照 — 黄昏时分金色阳光洒落湖面', en: 'Sunset glow — golden light across the lake at dusk' },
    ],
    practical: {
      address: { zh: '杭州市西湖区南山路15号', en: 'No.15 Nanshan Road, Xihu District' },
      hours: { zh: '8:00-20:00（夏季延至20:30）', en: '8:00-20:00 (extended to 20:30 in summer)' },
      ticket: { zh: '40元', en: '¥40' },
      bestTime: { zh: '下午4-5点登塔，正好看日落', en: '4-5 PM for the best sunset views' },
      transport: { zh: '公交4路/51路/52路净寺站', en: 'Bus 4/51/52 to Jingsi stop' },
    },
  },
  {
    id: 'hefang-street',
    image: IMAGES.attrHefang,
    tags: [{ zh: '历史文化街区', en: 'Historic Street' }, { zh: '购物美食', en: 'Shopping & Food' }],
    name: { zh: '河坊街', en: 'Hefang Street' },
    subtitle: { zh: '南宋余韵 · 市井繁华', en: 'Southern Song Echoes, Bustling Bazaar' },
    intro: {
      zh: '河坊街位于吴山脚下，是杭州最著名的历史文化街区之一。这条始建于南宋的古街，曾是杭州的商贸中心。如今街道两旁林立着明清风格的古建筑，汇集了百年老店、传统手工艺、特色小吃，是体验老杭州风情的最佳去处。',
      en: 'Hefang Street, at the foot of Wu Hill, is one of Hangzhou\'s most famous historic streets. Dating back to the Southern Song Dynasty, it was once the city\'s commercial heart. Today, Ming and Qing-style buildings line the street, hosting century-old shops, traditional crafts, and local snacks — the best place to experience old Hangzhou.'
    },
    history: { zh: '始建于南宋，明清时期成为杭州最繁华的商业街。2002年经过保护性修缮后重新开放。', en: 'Established during the Southern Song Dynasty; became Hangzhou\'s busiest commercial street in Ming-Qing times. Restored and reopened in 2002.' },
    highlights: [
      { zh: '胡庆余堂 — 清代"红顶商人"胡雪岩创办的百年药号', en: 'Hu Qing Yu Tang — century-old pharmacy founded by Hu Xueyan' },
      { zh: '回春堂 — 杭州最古老的中药铺之一', en: 'Huichun Hall — one of Hangzhou\'s oldest herbal medicine shops' },
      { zh: '朱炳仁铜雕艺术博物馆 — 精美的铜雕作品展示', en: 'Zhu Bingren Copper Museum — exquisite copper artworks' },
      { zh: '小吃街 — 定胜糕、葱包桧、猫耳朵等地道美食', en: 'Snack alley — Ding Sheng Cake, Cong Bao Hui, and more' },
    ],
    practical: {
      address: { zh: '杭州市上城区河坊街', en: 'Hefang Street, Shangcheng District' },
      hours: { zh: '全天开放（店铺一般为9:00-22:00）', en: 'Always open (most shops 9:00-22:00)' },
      ticket: { zh: '免费', en: 'Free' },
      bestTime: { zh: '下午到晚上最为热闹', en: 'Afternoon to evening is the liveliest' },
      transport: { zh: '地铁1号线定安路站步行10分钟', en: 'Metro Line 1 Ding\'an Road Station, 10-min walk' },
    },
  },
  {
    id: 'xixi-wetland',
    image: IMAGES.attrXixi,
    tags: [{ zh: '湿地公园', en: 'Wetland Park' }, { zh: '5A景区', en: '5A Site' }],
    name: { zh: '西溪国家湿地公园', en: 'Xixi National Wetland Park' },
    subtitle: { zh: '一曲溪流一曲烟', en: 'A Stream, A Wisp of Mist' },
    intro: {
      zh: '西溪湿地是中国首个国家湿地公园，距西湖仅5公里，总面积约11.5平方公里。这里水道纵横、渚岛棋布，拥有丰富的湿地生态资源和深厚的文化底蕴。泛舟其间，芦苇丛生、白鹭翩跹，仿佛进入一幅水墨江南画卷。',
      en: 'Xixi is China\'s first national wetland park, just 5 km from West Lake, covering ~11.5 km². With its maze of waterways, islets, and rich wetland ecology, a boat ride through reeds and egrets feels like entering a living ink-wash painting of Jiangnan.'
    },
    history: { zh: '西溪湿地有1800多年的人文历史。宋高宗曾想在此建都，留下"西溪且留下"的名句。2005年正式开放为国家湿地公园。', en: 'Xixi has 1,800+ years of human history. Song Emperor Gaozong famously said "Xixi, let us stay here." Opened as a national wetland park in 2005.' },
    highlights: [
      { zh: '秋芦飞雪 — 秋季芦苇花开如雪，最为壮观', en: 'Autumn Reed Snow — spectacular reed flowers in fall' },
      { zh: '渔村烟雨 — 传统渔村在烟雨中的水墨意境', en: 'Fishing Village in Mist — poetic ink-wash scenery' },
      { zh: '龙舟胜会 — 端午节传统龙舟竞渡表演', en: 'Dragon Boat Festival — traditional races and celebrations' },
      { zh: '梅花林 — 初春数千株梅花竞相开放', en: 'Plum Blossom Grove — thousands of plum trees in early spring' },
    ],
    practical: {
      address: { zh: '杭州市西湖区天目山路518号', en: 'No.518 Tianmushan Road, Xihu District' },
      hours: { zh: '8:00-17:30（旺季延至18:30）', en: '8:00-17:30 (extended to 18:30 in peak season)' },
      ticket: { zh: '80元（含船票）', en: '¥80 (including boat ride)' },
      bestTime: { zh: '秋季（10-11月）芦苇最美', en: 'Autumn (Oct-Nov) for the best reed scenery' },
      transport: { zh: '公交193路/310路/356路西溪湿地站', en: 'Bus 193/310/356 to Xixi Wetland stop' },
    },
  },
  {
    id: 'grand-canal-hangzhou',
    image: IMAGES.attrCanal,
    tags: [{ zh: '世界遗产', en: 'World Heritage' }, { zh: '运河文化', en: 'Canal Culture' }],
    name: { zh: '京杭大运河（杭州段）', en: 'Grand Canal (Hangzhou)' },
    subtitle: { zh: '千年水道 · 流动的文化', en: 'Millennium Waterway of Living Culture' },
    intro: {
      zh: '京杭大运河全长约1794公里，是世界上里程最长、工程最大的古代运河，2014年列入世界文化遗产。杭州段是运河最南端的标志，拱宸桥一带保留了大量运河历史街区。乘水上巴士穿行于古运河上，可以感受千年漕运文化的魅力。',
      en: 'The Grand Canal stretches ~1,794 km — the world\'s longest and largest ancient canal, becoming a UNESCO World Heritage site in 2014. The Hangzhou section at its southern terminus preserves historic canal neighborhoods around Gongchen Bridge. A water bus ride evokes the ancient grain transport era.'
    },
    history: { zh: '始建于春秋时期（公元前5世纪），隋代大业年间（605-610年）全线贯通，元明清三代持续扩建。', en: 'Began in the Spring & Autumn period (5th century BC), fully connected during the Sui Dynasty (605-610 AD), and expanded through Yuan, Ming, and Qing dynasties.' },
    highlights: [
      { zh: '拱宸桥 — 杭州现存最高最长的古石拱桥', en: 'Gongchen Bridge — tallest and longest ancient stone arch bridge in Hangzhou' },
      { zh: '运河文化广场 — 运河博物馆和文化展示中心', en: 'Canal Culture Square — museum and cultural center' },
      { zh: '水上巴士 — 仅需3元即可体验运河游船', en: 'Water bus — canal cruise for just ¥3' },
      { zh: '小河直街 — 运河边保存完好的历史街区', en: 'Xiaohe Straight Street — well-preserved canal-side historic district' },
    ],
    practical: {
      address: { zh: '杭州市拱墅区运河文化广场', en: 'Canal Culture Square, Gongshu District' },
      hours: { zh: '全天开放', en: 'Open 24 hours' },
      ticket: { zh: '免费（水上巴士3元）', en: 'Free (water bus ¥3)' },
      bestTime: { zh: '傍晚乘水上巴士看两岸灯火', en: 'Evening water bus for riverside lights' },
      transport: { zh: '地铁5号线拱宸桥东站', en: 'Metro Line 5 Gongchen Bridge East Station' },
    },
  },
  {
    id: 'six-harmonies-pagoda',
    image: IMAGES.attrSixHarmonies,
    tags: [{ zh: '古建筑', en: 'Historic Tower' }, { zh: '钱塘江', en: 'Qiantang River' }],
    name: { zh: '六和塔', en: 'Six Harmonies Pagoda' },
    subtitle: { zh: '钱塘江畔 · 千年守望', en: 'Millennium Sentinel by Qiantang River' },
    intro: {
      zh: '六和塔位于钱塘江北岸月轮山上，始建于北宋开宝三年（970年），是杭州最著名的古塔之一。塔高59.89米，为八角形楼阁式砖木结构，共13层（外观7层）。最初为镇钱塘江潮而建，如今是观赏钱塘江大桥和潮水的最佳位置。',
      en: 'Six Harmonies Pagoda on Yuelun Hill by the Qiantang River was built in 970 AD (Northern Song). At 59.89m tall with 13 interior levels (7 visible), this octagonal brick-and-wood pagoda was originally built to subdue the river\'s tidal bore. It offers the best views of the Qiantang River Bridge and tidal waves.'
    },
    history: { zh: '北宋开宝三年（970年）由吴越国王为镇潮而建，历经多次修缮，现存砖构为南宋遗存，外部木构为清代重修。', en: 'Built in 970 AD by the King of Wuyue to control tides. The brick core dates from the Southern Song; the wooden exterior was rebuilt in the Qing Dynasty.' },
    highlights: [
      { zh: '登塔观潮 — 农历八月十八钱塘江大潮最佳观赏点', en: 'Tidal bore viewing — best spot for the autumn tidal wave' },
      { zh: '钱塘江大桥 — 中国第一座自行设计的双层大桥', en: 'Qiantang Bridge — China\'s first self-designed double-deck bridge' },
      { zh: '塔内壁画 — 历代佛教故事的砖雕和壁画', en: 'Interior murals — brick carvings of Buddhist tales through dynasties' },
    ],
    practical: {
      address: { zh: '杭州市西湖区之江路16号', en: 'No.16 Zhijiang Road, Xihu District' },
      hours: { zh: '6:30-18:00', en: '6:30-18:00' },
      ticket: { zh: '30元（含登塔）', en: '¥30 (including tower climb)' },
      bestTime: { zh: '农历八月十五至二十观潮最佳', en: 'Best for tidal bore around the Mid-Autumn Festival' },
      transport: { zh: '公交4路/318路六和塔站', en: 'Bus 4/318 to Six Harmonies Pagoda stop' },
    },
  },
  {
    id: 'china-silk-museum',
    image: IMAGES.attrSilkMuseum,
    tags: [{ zh: '博物馆', en: 'Museum' }, { zh: '丝绸文化', en: 'Silk Culture' }],
    name: { zh: '中国丝绸博物馆', en: 'China National Silk Museum' },
    subtitle: { zh: '丝绸之路 · 锦绣中华', en: 'Silk Road, Splendid China' },
    intro: {
      zh: '中国丝绸博物馆位于西湖南岸玉皇山脚下，是中国最大的丝绸专业博物馆。馆藏涵盖从新石器时代到现代的丝绸文物，展示了中国五千年的丝绸文化。展馆包括蚕桑馆、织造馆、修复馆等多个展厅，游客还可以观看传统织机操作演示。',
      en: 'At the foot of Yuhuang Hill near West Lake, this is China\'s largest silk museum. Its collection spans from Neolithic times to modern day, showcasing 5,000 years of silk culture. Galleries cover sericulture, weaving, and textile restoration, with live demonstrations of traditional looms.'
    },
    history: { zh: '1992年正式开馆，2016年完成改扩建。馆址位于南宋籍田遗址附近，与杭州作为"丝绸之府"的历史相呼应。', en: 'Opened in 1992 and renovated in 2016. Located near a Southern Song imperial farmland site, echoing Hangzhou\'s history as the "Silk Capital."' },
    highlights: [
      { zh: '蚕桑馆 — 了解从蚕到丝的全过程', en: 'Sericulture Hall — the complete silkworm-to-silk journey' },
      { zh: '织造馆 — 现场演示传统织机操作', en: 'Weaving Hall — live traditional loom demonstrations' },
      { zh: '修复馆 — 文物级丝绸的修复与保护展示', en: 'Restoration Hall — conservation of historical textiles' },
      { zh: '时尚展厅 — 当代丝绸时装设计展览', en: 'Fashion Gallery — contemporary silk fashion exhibitions' },
    ],
    practical: {
      address: { zh: '杭州市西湖区玉皇山路73-1号', en: 'No.73-1 Yuhuangshan Road, Xihu District' },
      hours: { zh: '9:00-17:00（周一12:00开馆）', en: '9:00-17:00 (opens at 12:00 on Mondays)' },
      ticket: { zh: '免费', en: 'Free' },
      bestTime: { zh: '工作日人少，可安静参观', en: 'Weekdays are quieter for a relaxed visit' },
      transport: { zh: '公交12路/42路丝绸博物馆站', en: 'Bus 12/42 to Silk Museum stop' },
    },
  },
];