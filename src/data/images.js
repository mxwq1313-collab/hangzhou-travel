/**
 * 杭州旅行网站本地图片资源。
 * 照片均为对应地点或菜品的实景图，来源与许可见 public/images/ATTRIBUTION.md。
 */
const asset = (path) => `${import.meta.env.BASE_URL}images/${path}`;

const IMAGES = {
  heroWestLake: asset('attractions/westlake.jpg'),
  heroLeifeng: asset('attractions/leifeng.jpg'),
  heroLingyin: asset('attractions/lingyin.jpg'),
  heroHotel: asset('accommodation/qianjiang.jpg'),
  heroTransport: asset('heroes/hero-transport.jpg'),
  heroSeason: asset('seasons/summer.jpg'),
  heroItinerary: asset('attractions/canal.jpg'),
  heroFood: asset('food/dongpo-pork.jpg'),

  attrWestLake: asset('attractions/westlake.jpg'),
  attrLingyin: asset('attractions/lingyin.jpg'),
  attrLeifeng: asset('attractions/leifeng.jpg'),
  attrHefang: asset('attractions/hefang.jpg'),
  attrXixi: asset('attractions/xixi.jpg'),
  attrCanal: asset('attractions/canal.jpg'),
  attrSixHarmonies: asset('attractions/six-harmonies.jpg'),
  attrSilkMuseum: asset('attractions/silk-museum.jpg'),

  foodDongpo: asset('food/dongpo-pork.jpg'),
  foodLongjingShrimp: asset('food/longjing-shrimp.jpg'),
  foodBeggarChicken: asset('food/beggars-chicken.jpg'),
  foodNoodles: asset('food/noodles.jpg'),
  foodFish: asset('food/vinegar-fish.jpg'),
  foodSoup: asset('food/fish-soup.jpg'),
  foodBraisedPork: asset('food/braised-pork.jpg'),
  foodLotus: asset('food/lotus-root.jpg'),

  accLakeside: asset('attractions/westlake.jpg'),
  accBeishan: asset('attractions/leifeng.jpg'),
  accLingyin: asset('attractions/lingyin.jpg'),
  accQianjiang: asset('accommodation/qianjiang.jpg'),
  accWulin: asset('accommodation/wulin.jpg'),
  accCanal: asset('attractions/canal.jpg'),
  accLongjing: asset('accommodation/longjing.jpg'),
  accXixi: asset('attractions/xixi.jpg'),
  accEastStation: asset('accommodation/east-station.jpg'),

  seasonSpring: asset('seasons/spring.jpg'),
  seasonSummer: asset('seasons/summer.jpg'),
  seasonAutumn: asset('seasons/autumn.jpg'),
  seasonWinter: asset('seasons/winter.jpg'),
};

export default IMAGES;
export { IMAGES };
