/**
 * 杭州旅游网站 — 本地图片资源
 * 所有图片存储在 public/images/，通过 Vite BASE_URL 安全引用
 */

const asset = (path) => `${import.meta.env.BASE_URL}images/${path}`;

const IMAGES = {
  // ── Heroes ──────────────────────────────────────────────────
  heroWestLake:   asset('heroes/hero-westlake.jpg'),
  heroLeifeng:    asset('heroes/hero-leifeng.jpg'),
  heroLingyin:    asset('heroes/hero-lingyin.jpg'),
  heroHotel:      asset('heroes/hero-hotel.jpg'),
  heroTransport:  asset('heroes/hero-transport.jpg'),
  heroSeason:     asset('heroes/hero-season.jpg'),
  heroItinerary:  asset('heroes/hero-itinerary.jpg'),
  heroFood:       asset('heroes/hero-food.jpg'),

  // ── 景点 / Attractions ──────────────────────────────────────
  attrWestLake:      asset('attractions/westlake.jpg'),
  attrLingyin:       asset('attractions/lingyin.jpg'),
  attrLeifeng:       asset('attractions/leifeng.jpg'),
  attrHefang:        asset('attractions/hefang.jpg'),
  attrXixi:          asset('attractions/xixi.jpg'),
  attrCanal:         asset('attractions/canal.jpg'),
  attrSixHarmonies:  asset('attractions/six-harmonies.jpg'),
  attrSilkMuseum:    asset('attractions/silk-museum.jpg'),

  // ── 美食 / Food ─────────────────────────────────────────────
  foodDongpo:         asset('food/dongpo-pork.jpg'),
  foodLongjingShrimp: asset('food/longjing-shrimp.jpg'),
  foodBeggarChicken:  asset('food/beggars-chicken.jpg'),
  foodNoodles:        asset('food/noodles.jpg'),
  foodFish:           asset('food/vinegar-fish.jpg'),
  foodSoup:           asset('food/fish-soup.jpg'),
  foodBraisedPork:    asset('food/braised-pork.jpg'),
  foodLotus:          asset('food/lotus-root.jpg'),
  foodCake:           asset('food/crispy-cake.jpg'),
  foodDingSheng:      asset('food/ding-sheng-cake.jpg'),

  // ── 住宿 / Accommodation（每间酒店独立图片）─────────────────
  accAmanfayun:      asset('accommodation/hotel-amanfayun.jpg'),
  accFourSeasons:    asset('accommodation/hotel-fourseasons.jpg'),
  accParkHyatt:      asset('accommodation/hotel-parkhyatt.jpg'),
  accZen:            asset('accommodation/hotel-zen.jpg'),
  accLanting:        asset('accommodation/hotel-lanting.jpg'),
  accWatermark:      asset('accommodation/hotel-watermark.jpg'),
  accYouthHostel:    asset('accommodation/hotel-youth.jpg'),
  accHomeInn:        asset('accommodation/hotel-homeinn.jpg'),
  accGreenTea:       asset('accommodation/hotel-greentea.jpg'),

  // ── 四季 / Seasons ────────────────────────────────────────
  seasonSpring: asset('seasons/spring.jpg'),
  seasonSummer: asset('seasons/summer.jpg'),
  seasonAutumn: asset('seasons/autumn.jpg'),
  seasonWinter: asset('seasons/winter.jpg'),
};

export default IMAGES;
export { IMAGES };