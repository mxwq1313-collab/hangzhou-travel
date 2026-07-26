export const arrivalTransport = [
  {
    id: 'flight',
    method: { zh: '飞机', en: 'By Air' },
    detail: { zh: '杭州萧山国际机场（HGH）位于杭州市东部，距市中心约27公里，是中国十大机场之一。开通国内外航线200余条，与国内外100多个城市通航。机场有T1、T2、T3三个航站楼。', en: 'Hangzhou Xiaoshan International Airport (HGH) is 27 km east of downtown, among China\'s top 10 airports with 200+ domestic and international routes connecting to over 100 cities. Three terminals: T1, T2, T3.' },
    tips: [
      { zh: '机场大巴有多条线路前往市区及各主要酒店，票价20元/人', en: 'Airport shuttle buses to downtown and major hotels, ¥20/person' },
      { zh: '地铁1号线/7号线直达机场（萧山国际机场站），约50分钟到市中心', en: 'Metro Lines 1 & 7 run directly to the airport (Xiaoshan International Airport Station), ~50 min to downtown' },
      { zh: '出租车到市中心约100-150元，车程40-60分钟', en: 'Taxi to downtown ~¥100-150, 40-60 minutes' },
      { zh: '网约车（滴滴等）在指定上车点等候', en: 'Ride-hailing (Didi, etc.) available at designated pickup zones' },
    ],
  },
  {
    id: 'train',
    method: { zh: '火车/高铁', en: 'By Train' },
    detail: { zh: '杭州有四大火车站：杭州东站（主要高铁站）、杭州站（城站）、杭州南站和杭州西站。高铁网络连接全国主要城市，上海到杭州仅需45分钟，南京1小时，北京约4.5小时。', en: 'Four major stations: Hangzhou East (main HSR hub), Hangzhou Station (Chengzhan), Hangzhou South, and Hangzhou West. High-speed rail connects to major cities: Shanghai 45 min, Nanjing 1 hr, Beijing ~4.5 hrs.' },
    tips: [
      { zh: '杭州东站是最大最繁忙的车站，大部分高铁在此停靠，地铁1号线/4号线直达', en: 'Hangzhou East is the largest and busiest; most HSR trains stop here; Metro Lines 1 & 4 serve it' },
      { zh: '杭州站（城站）位于市中心，地铁1号线/5号线可达，更方便到达西湖', en: 'Hangzhou Station (Chengzhan) is centrally located near West Lake, served by Metro Lines 1 & 5' },
      { zh: '建议提前在12306官网或APP购票，节假日票源紧张', en: 'Book in advance on 12306.cn or the app; holiday tickets sell out quickly' },
      { zh: '持护照的外国旅客可在车站人工窗口取票', en: 'International travelers with passports can collect tickets at station counters' },
    ],
  },
  {
    id: 'long-distance-bus',
    method: { zh: '长途汽车', en: 'By Bus' },
    detail: { zh: '杭州有汽车西站、汽车北站、汽车南站和客运中心站四个长途汽车站，开通往返长三角及周边省市的大量班线。适合从上海、苏州、黄山等邻近城市乘大巴抵达。', en: 'Four long-distance bus stations (West, North, South, Passenger Center) with routes covering the Yangtze Delta and neighboring provinces. Ideal for travel from Shanghai, Suzhou, Huangshan, and nearby cities.' },
    tips: [
      { zh: '客运中心站与地铁1号线无缝衔接', en: 'Passenger Center Station is directly connected to Metro Line 1' },
      { zh: '从上海出发的长途大巴约2-3小时到达杭州', en: 'Long-distance bus from Shanghai takes about 2-3 hours' },
      { zh: '可在"畅途网"或各客运站官网查询班次并购票', en: 'Check schedules and book on ct-china.com or station websites' },
    ],
  },
];

export const localTransport = [
  {
    id: 'metro',
    method: { zh: '地铁', en: 'Metro' },
    detail: { zh: '杭州地铁运营线路已超过12条，覆盖市区主要区域。运行时间约为6:00-23:00，票价2元起步。可使用支付宝、微信乘车码扫码进站。', en: 'Hangzhou Metro operates 12+ lines covering all major urban areas. Operating hours ~6:00-23:00; fares start at ¥2. Alipay/WeChat transit QR codes accepted at all stations.' },
    lines: { zh: '核心线路：1号线（南北-东西）、2号线（西北-东南）、5号线（贯穿东西），另有4/6/7/9/16号线等。', en: 'Key lines: Line 1 (N-S/E-W), Line 2 (NW-SE), Line 5 (cross-city E-W), plus Lines 4/6/7/9/16 and more.' },
    tips: [
      { zh: '下载"杭州地铁"APP或使用支付宝出行板块扫码进站', en: 'Download "Hangzhou Metro" app or use Alipay transit section for QR code entry' },
      { zh: '高峰期（7:30-9:00，17:30-19:00）1号线较为拥挤', en: 'Line 1 is crowded during peak hours (7:30-9:00, 17:30-19:00)' },
      { zh: '1号线龙翔桥站是距离西湖最近的地铁站', en: 'Longxiangqiao Station (Line 1) is the closest metro station to West Lake' },
    ],
  },
  {
    id: 'bus',
    method: { zh: '公交车', en: 'Bus' },
    detail: { zh: '杭州公交网络四通八达，票价为2-3元。其中Y字头（游线）专为游客设计，串联主要景点。"水上巴士"也是一种独特的公交方式。', en: 'Hangzhou\'s extensive bus network costs ¥2-3 per ride. Routes prefixed with "Y" (tourist lines) connect major attractions. Water buses are also a unique public transit option.' },
    tips: [
      { zh: 'Y2/Y4/Y9游线覆盖西湖环线主要景点', en: 'Tourist buses Y2/Y4/Y9 cover the West Lake ring route' },
      { zh: '可在支付宝领取"杭州通"电子公交卡', en: 'Get a virtual "Hangzhou Pass" bus card on Alipay' },
      { zh: '部分景点区间有免费接驳巴士', en: 'Free shuttle buses available between some attraction zones' },
    ],
  },
  {
    id: 'taxi',
    method: { zh: '出租车/网约车', en: 'Taxi / Ride-Hailing' },
    detail: { zh: '杭州出租车起步价11元（含3公里），之后每公里2.5元。滴滴出行、高德打车等网约车平台使用非常方便。', en: 'Taxi flag-down rate starts at ¥11 (first 3 km), then ¥2.5/km. Didi, Amap, and other ride-hailing platforms are widely used and convenient.' },
    tips: [
      { zh: '高峰期和雨雪天打车较难，建议提前叫车', en: 'Hard to hail during peak hours and bad weather; book in advance via apps' },
      { zh: '西湖景区部分路段节假日限行，网约车需确认上车点', en: 'Some West Lake scenic roads restrict vehicles on holidays; confirm pickup points' },
      { zh: '出租车可使用支付宝/微信支付，现金也接受', en: 'Taxis accept Alipay/WeChat Pay; cash also accepted' },
    ],
  },
  {
    id: 'bike',
    method: { zh: '共享单车', en: 'Bike Sharing' },
    detail: { zh: '杭州是中国共享单车最普及的城市之一。哈啰单车（蓝色）、美团单车（黄色）遍布街头，扫码即骑。西湖周边有专门的骑行绿道，是游览西湖的最佳方式之一。', en: 'Hangzhou is one of China\'s most bike-friendly cities. Hello Bike (blue) and Meituan Bike (yellow) are everywhere — scan and ride. Dedicated bike lanes around West Lake offer the best way to explore.' },
    tips: [
      { zh: '西湖环湖骑行约15公里，一般需要1.5-2小时', en: 'A full West Lake loop is ~15 km, taking 1.5-2 hours by bike' },
      { zh: '共享单车需在指定区域停放，景区内有电子围栏', en: 'Bikes must be parked in designated zones; scenic areas have e-fences' },
      { zh: '杭州公共自行车（小红车）1小时内免费', en: 'Hangzhou public bikes (red) are free for the first hour' },
    ],
  },
  {
    id: 'water-bus',
    method: { zh: '水上巴士', en: 'Water Bus' },
    detail: { zh: '杭州水上巴士沿京杭大运河和市区河道运营，票价仅3元，是体验杭州水乡风情的独特方式。1号线（运河线）最受欢迎，从武林门码头到拱宸桥。', en: 'Water buses run along the Grand Canal and city waterways for only ¥3 per ride — a unique way to experience Hangzhou\'s canal culture. Line 1 (Canal Line) from Wulinmen Pier to Gongchen Bridge is the most popular.' },
    tips: [
      { zh: '1号线7:00-18:00运营，约30分钟一班', en: 'Line 1 operates 7:00-18:00, roughly every 30 minutes' },
      { zh: '刷卡/扫码支付，不接受现金', en: 'Card/QR code payment only; no cash accepted' },
      { zh: '建议避开早晚高峰，享受悠闲的运河之旅', en: 'Avoid rush hours for a more relaxed canal experience' },
    ],
  },
];