export const itineraries = [
  {
    id: '1day', title: { zh: '一日精华游', en: 'One-Day Highlights' },
    summary: { zh: '用一天时间打卡杭州最经典的景点，从西湖到灵隐寺，感受杭州的精华所在。适合时间紧张但想体验核心景点的旅行者。', en: 'Hit Hangzhou\'s most iconic sights in one day — from West Lake to Lingyin Temple. Perfect for travelers on a tight schedule who want the essential experience.' },
    suitable: { zh: '时间紧凑的商务出行者或路过杭州的游客', en: 'Business travelers on tight schedules or visitors passing through Hangzhou' },
    days: [{
      day: 1, theme: { zh: '西湖环游 + 古刹探访', en: 'West Lake Loop + Ancient Temple' },
      schedule: [
        { time: { zh: '7:30', en: '7:30 AM' }, activity: { zh: '西湖日出 + 早餐', en: 'West Lake Sunrise & Breakfast' }, detail: { zh: '前往断桥附近看日出，在湖边小店吃一碗片儿川作为早餐', en: 'Watch sunrise near Broken Bridge, enjoy Pian Er Chuan noodles for breakfast' }, tips: { zh: '清晨西湖人少，是拍照的最佳时间', en: 'Early morning is the best photo opportunity with fewer crowds' } },
        { time: { zh: '8:30', en: '8:30 AM' }, activity: { zh: '乘船游西湖', en: 'West Lake Boat Cruise' }, detail: { zh: '在湖滨码头乘船，游览三潭印月、湖心亭，约1小时', en: 'Board at Hubin Pier, visit Three Pools Mirroring the Moon and Mid-Lake Pavilion (~1 hour)' }, tips: { zh: '选择手划船更有江南韵味（150元/小时）', en: 'Opt for a traditional hand-rowed boat for the full Jiangnan experience (¥150/hr)' } },
        { time: { zh: '10:30', en: '10:30 AM' }, activity: { zh: '灵隐寺', en: 'Lingyin Temple' }, detail: { zh: '参观飞来峰石刻造像和大雄宝殿，感受千年佛教文化', en: 'Explore Feilai Peak stone carvings and the majestic Main Hall' } },
        { time: { zh: '13:00', en: '1:00 PM' }, activity: { zh: '午餐 — 楼外楼', en: 'Lunch — Louwailou' }, detail: { zh: '品尝东坡肉、龙井虾仁、西湖醋鱼三大名菜', en: 'Try the three classics: Dongpo Pork, Longjing Shrimp, West Lake Vinegar Fish' }, tips: { zh: '提前到或错峰用餐，楼外楼是百年老店，人气很旺', en: 'Arrive early or off-peak — this century-old restaurant is always busy' } },
        { time: { zh: '14:30', en: '2:30 PM' }, activity: { zh: '雷峰塔', en: 'Leifeng Pagoda' }, detail: { zh: '登塔俯瞰西湖全景，参观原塔遗址', en: 'Climb for panoramic lake views; see the original pagoda ruins' } },
        { time: { zh: '16:30', en: '4:30 PM' }, activity: { zh: '河坊街 + 南宋御街', en: 'Hefang Street & Imperial Street' }, detail: { zh: '逛逛老杭州的市井风情，品尝定胜糕、葱包桧等小吃，购买伴手礼', en: 'Stroll old Hangzhou streets, sample snacks, buy souvenirs' } },
        { time: { zh: '19:00', en: '7:00 PM' }, activity: { zh: '西湖音乐喷泉', en: 'West Lake Musical Fountain' }, detail: { zh: '在湖滨路观看音乐喷泉表演（如开放），为一天的旅程画上完美句号', en: 'Enjoy the musical fountain show at Hubin Road (if operating) to cap off the day' } },
      ],
    }],
    budget: { zh: '约 ¥500-800 /人（含门票、三餐、交通）', en: 'Approx. ¥500-800/person (incl. tickets, 3 meals, transport)' },
    notes: [{ zh: '穿舒适的平底鞋，这一天的步数会非常多', en: 'Wear comfortable walking shoes — this is a high-step-count day' }, { zh: '提前在12306或各景点小程序预约灵隐寺门票', en: 'Book Lingyin Temple tickets in advance via mini-programs' }, { zh: '手划船在湖滨路码头或苏堤均有码头', en: 'Hand-rowed boats available at Hubin Road and Su Causeway piers' }],
  },
  {
    id: '2day', title: { zh: '两日深度游', en: 'Two-Day Deep Dive' },
    summary: { zh: '两天时间可以更从容地体验杭州的自然与人文。第一天游西湖和古刹，第二天深入茶园和湿地，感受杭州的慢生活。', en: 'Two days to explore Hangzhou\'s natural beauty and cultural depth at a relaxed pace. Day 1 covers the lake and temples; Day 2 goes deep into tea country and wetlands.' },
    suitable: { zh: '周末休闲游的情侣、朋友或小家庭', en: 'Weekend getaway for couples, friends, or small families' },
    days: [
      {
        day: 1, theme: { zh: '西湖经典 + 灵隐禅意', en: 'Classic West Lake + Lingyin Zen' },
        schedule: [
          { time: { zh: '8:00', en: '8:00 AM' }, activity: { zh: '苏堤漫步', en: 'Su Causeway Stroll' }, detail: { zh: '从北山街入口进入苏堤，沿途经过六座桥，约3公里步行路线', en: 'Enter from Beishan Road, cross six bridges along the ~3km causeway' } },
          { time: { zh: '10:00', en: '10:00 AM' }, activity: { zh: '花港观鱼 + 乘船', en: 'Flower Harbor & Boat Ride' }, detail: { zh: '赏牡丹和红鲤，从花港码头乘船游湖', en: 'View peonies and koi, then board a boat from the Flower Harbor pier' } },
          { time: { zh: '12:00', en: '12:00 PM' }, activity: { zh: '午餐 — 知味观', en: 'Lunch — Zhiweiguan' }, detail: { zh: '知味观总店在仁和路，品尝猫耳朵、小笼包等杭州点心', en: 'Visit Zhiweiguan\'s main branch on Renhe Road for Hangzhou dim sum' } },
          { time: { zh: '14:00', en: '2:00 PM' }, activity: { zh: '灵隐寺 + 永福寺', en: 'Lingyin & Yongfu Temples' }, detail: { zh: '参观灵隐寺后沿山路步行至永福寺，更为清静', en: 'After Lingyin, walk the mountain path to the quieter Yongfu Temple' } },
          { time: { zh: '17:30', en: '5:30 PM' }, activity: { zh: '青芝坞晚餐', en: 'Dinner at Qingzhiwu' }, detail: { zh: '浙大附近的青芝坞是美食街区，有不少特色杭帮菜馆', en: 'Qingzhiwu near Zhejiang University has many local restaurants' } },
        ],
      },
      {
        day: 2, theme: { zh: '茶园体验 + 湿地泛舟', en: 'Tea Experience + Wetland Cruise' },
        schedule: [
          { time: { zh: '8:30', en: '8:30 AM' }, activity: { zh: '龙井村/梅家坞', en: 'Longjing Village / Meijiawu' }, detail: { zh: '在龙井茶园漫步，参观茶农制茶，品尝正宗明前龙井', en: 'Walk through tea terraces, watch tea processing, taste authentic Longjing' }, tips: { zh: '茶园品茶一般免费，购买茶叶价格差异大，建议多比较', en: 'Tea tasting is usually free; prices for buying vary greatly — compare before buying' } },
          { time: { zh: '12:00', en: '12:00 PM' }, activity: { zh: '农家午餐', en: 'Farmhouse Lunch' }, detail: { zh: '在梅家坞农家乐吃一顿地道的农家菜', en: 'Enjoy authentic farmhouse cuisine at a Meijiawu family restaurant' } },
          { time: { zh: '14:00', en: '2:00 PM' }, activity: { zh: '西溪湿地', en: 'Xixi Wetland' }, detail: { zh: '乘船穿行于芦苇荡和水道中，感受"城市绿肺"的宁静', en: 'Boat through reed marshes and waterways in this "urban green lung"' } },
          { time: { zh: '18:00', en: '6:00 PM' }, activity: { zh: '钱江新城夜景', en: 'Qianjiang CBD Night View' }, detail: { zh: '欣赏钱塘江两岸的灯光秀，结束两天的旅程', en: 'Enjoy the riverside light show to conclude your two-day trip' } },
        ],
      },
    ],
    budget: { zh: '约 ¥1000-1600 /人（含住宿一晚、门票、餐饮、交通）', en: 'Approx. ¥1000-1600/person (incl. 1 night hotel, tickets, meals, transport)' },
    notes: [{ zh: '第二天需要较早起，梅家坞在西湖西南方向', en: 'Day 2 starts early — Meijiawu is southwest of West Lake' }, { zh: '西溪湿地较大，建议预留至少3小时', en: 'Xixi Wetland is large — allow at least 3 hours' }, { zh: '茶园到西溪湿地建议打车，约30-40分钟', en: 'Taxi from tea village to Xixi takes about 30-40 minutes' }],
  },
  {
    id: '3day', title: { zh: '三日全景游', en: 'Three-Day Grand Tour' },
    summary: { zh: '三天时间可以全方位体验杭州——从西湖到运河，从茶山到博物馆，从美食到购物，深入了解这座"人间天堂"的方方面面。', en: 'Three days to experience Hangzhou comprehensively — from West Lake to the Grand Canal, tea hills to museums, cuisine to shopping. A thorough immersion in "Paradise on Earth."' },
    suitable: { zh: '有充足时间、想深度体验杭州文化的旅行者', en: 'Travelers with ample time who want deep cultural immersion' },
    days: [
      {
        day: 1, theme: { zh: '西湖经典线', en: 'West Lake Classics' },
        schedule: [
          { time: { zh: '7:30', en: '7:30 AM' }, activity: { zh: '苏堤晨跑/漫步', en: 'Morning stroll on Su Causeway' }, detail: { zh: '清晨的苏堤人烟稀少，是感受西湖之美的最佳时刻', en: 'Early morning Su Causeway is nearly empty — the best time to feel West Lake\'s beauty' } },
          { time: { zh: '9:00', en: '9:00 AM' }, activity: { zh: '断桥 + 白堤', en: 'Broken Bridge & Bai Causeway' }, detail: { zh: '从断桥出发沿白堤步行至孤山，途经平湖秋月', en: 'Walk from Broken Bridge along Bai Causeway to Solitary Hill, passing Autumn Moon' } },
          { time: { zh: '11:00', en: '11:00 AM' }, activity: { zh: '浙江省博物馆（孤山馆）', en: 'Zhejiang Provincial Museum' }, detail: { zh: '了解浙江七千年历史，馆藏《富春山居图》剩山卷', en: 'Explore 7,000 years of Zhejiang history; see "Dwelling in the Fuchun Mountains" fragment' } },
          { time: { zh: '13:00', en: '1:00 PM' }, activity: { zh: '楼外楼午餐', en: 'Lunch at Louwailou' }, detail: { zh: '品尝经典杭帮菜：东坡肉、龙井虾仁、西湖醋鱼、叫花鸡', en: 'Classic Hangzhou feast: Dongpo Pork, Longjing Shrimp, Vinegar Fish, Beggar\'s Chicken' } },
          { time: { zh: '15:00', en: '3:00 PM' }, activity: { zh: '雷峰塔 + 净慈寺', en: 'Leifeng Pagoda & Jingci Temple' }, detail: { zh: '登雷峰塔看全景，旁边净慈寺是"南屏晚钟"所在地', en: 'Climb the pagoda for panoramic views; adjacent Jingci Temple is home to "Evening Bell at Nanping"' } },
          { time: { zh: '18:00', en: '6:00 PM' }, activity: { zh: '湖滨步行街 + 银泰晚餐', en: 'Hubin Pedestrian Street & Dinner' }, detail: { zh: '在湖滨银泰商圈选择餐厅，观赏西湖夜景', en: 'Choose from many restaurants at Hubin Intime, enjoy evening lake views' } },
        ],
      },
      {
        day: 2, theme: { zh: '禅茶一味 + 运河文化', en: 'Zen Tea & Canal Culture' },
        schedule: [
          { time: { zh: '8:00', en: '8:00 AM' }, activity: { zh: '灵隐寺 + 飞来峰', en: 'Lingyin Temple & Feilai Peak' }, detail: { zh: '清晨探访灵隐，在晨钟暮鼓中感受禅意', en: 'Visit Lingyin in the peaceful morning, feel Zen in the temple atmosphere' } },
          { time: { zh: '11:00', en: '11:00 AM' }, activity: { zh: '龙井村/中国茶叶博物馆', en: 'Longjing Village / Tea Museum' }, detail: { zh: '参观茶叶博物馆了解茶文化，随后在龙井村品茶', en: 'Learn tea culture at the museum, then taste tea in Longjing Village' } },
          { time: { zh: '13:00', en: '1:00 PM' }, activity: { zh: '茶园农家午餐', en: 'Farmhouse Lunch at Tea Village' }, detail: { zh: '在茶园环绕中享用农家土菜', en: 'Enjoy rustic farmhouse dishes surrounded by tea terraces' } },
          { time: { zh: '15:00', en: '3:00 PM' }, activity: { zh: '京杭大运河', en: 'Grand Canal Tour' }, detail: { zh: '在武林门码头乘水上巴士到拱宸桥，逛运河博物馆和小河直街', en: 'Water bus from Wulinmen Pier to Gongchen Bridge; explore canal museum and Xiaohe Street' } },
          { time: { zh: '18:30', en: '6:30 PM' }, activity: { zh: '胜利河美食街', en: 'Victory River Food Street' }, detail: { zh: '杭州最热闹的美食夜市之一，烧烤、小龙虾、小吃应有尽有', en: 'One of Hangzhou\'s liveliest night food streets — BBQ, crayfish, snacks galore' } },
        ],
      },
      {
        day: 3, theme: { zh: '西溪野趣 + 丝绸文化 + 告别晚餐', en: 'Wetland Adventure & Silk Culture' },
        schedule: [
          { time: { zh: '8:30', en: '8:30 AM' }, activity: { zh: '西溪国家湿地公园', en: 'Xixi National Wetland Park' }, detail: { zh: '上午泛舟西溪，感受江南湿地生态，游览秋雪庵等景点', en: 'Morning boat ride through the wetland ecosystem; visit Autumn Snow Hermitage' } },
          { time: { zh: '12:30', en: '12:30 PM' }, activity: { zh: '外婆家西溪店午餐', en: 'Lunch at Grandma\'s Home' }, detail: { zh: '连锁杭帮菜代表，价廉物美，推荐茶香鸡和外婆红烧肉', en: 'Affordable and popular Hangzhou chain — try Tea-Aroma Chicken and Braised Pork' } },
          { time: { zh: '14:30', en: '2:30 PM' }, activity: { zh: '中国丝绸博物馆', en: 'China National Silk Museum' }, detail: { zh: '了解杭州丝绸文化，可购买丝绸制品作纪念', en: 'Discover Hangzhou\'s silk heritage; shop for silk souvenirs' } },
          { time: { zh: '17:00', en: '5:00 PM' }, activity: { zh: '中国丝绸城购物', en: 'China Silk City Shopping' }, detail: { zh: '杭州最大的丝绸市场，各种丝巾、睡衣、旗袍可挑选', en: 'Hangzhou\'s largest silk market — scarves, sleepwear, qipao dresses' } },
          { time: { zh: '19:00', en: '7:00 PM' }, activity: { zh: '告别晚餐 — 山外山', en: 'Farewell Dinner — Shanwaishan' }, detail: { zh: '在植物园内的山外山菜馆享用告别宴，环境优雅，菜品精致', en: 'Farewell dinner at Shanwaishan inside the Botanical Garden — elegant setting, refined dishes' } },
        ],
      },
    ],
    budget: { zh: '约 ¥2000-3500 /人（含两晚住宿、门票、餐饮、交通、购物）', en: 'Approx. ¥2000-3500/person (incl. 2 nights hotel, tickets, meals, transport, shopping)' },
    notes: [{ zh: '三天行程较为充实，建议第四天上午留作休息和缓冲', en: 'This is an intensive 3-day plan — consider a rest morning on Day 4' }, { zh: '如遇下雨，可用中国伞博物馆、中国扇博物馆等室内场馆替代', en: 'On rainy days, swap outdoor sites for museums like the Umbrella or Fan Museums' }, { zh: '丝绸城可以讲价，一般能在报价基础上打7-8折', en: 'You can bargain at Silk City — typically 20-30% off the initial price' }],
  },
];