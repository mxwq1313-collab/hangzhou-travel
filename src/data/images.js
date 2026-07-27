/**
 * 杭州旅游网站 — 实景照片 (Unsplash)
 */

const u = (id, w, h) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80`;

const IMAGES = {
  // Heroes (1600×900)
  heroWestLake:   u('1547981609-4b6bfe67ca0b', 1600, 900),
  heroLeifeng:    u('1588252910189-9c9f5535646b', 1600, 900),
  heroLingyin:    u('1567975789927-dfaf473ca06e', 1600, 900),
  heroHotel:      u('1611892440504-42a5e0a8e32b', 1600, 900),
  heroTransport:  u('1524410286-08d4cf7dc2ef', 1600, 900),
  heroSeason:     u('1558422719-d6982435e4e4', 1600, 900),
  heroItinerary:  u('1486573338004-4dcd200269f2', 1600, 900),
  heroFood:       u('1540189549334-b0c031eb6445', 1600, 900),

  // Attractions (800×600)
  attrWestLake:      u('1547981609-4b6bfe67ca0b', 800, 600),
  attrLingyin:       u('1697553308664-5aed18530490', 800, 600),
  attrLeifeng:       u('1633373764736-1a06f2f4caa5', 800, 600),
  attrHefang:        u('1586862118451-efc84a66e704', 800, 600),
  attrXixi:          u('1669532055370-b0c282cb115f', 800, 600),
  attrCanal:         u('1587153662967-c9d9977bf8d3', 800, 600),
  attrSixHarmonies:  u('1629536666798-d5b3565cd728', 800, 600),
  attrSilkMuseum:    u('1729177859947-8a707e0b0b38', 800, 600),

  // Food (800×600)
  foodDongpo:         u('1623836506940-1db1f8fbcbcd', 800, 600),
  foodLongjingShrimp: u('1726703062028-e43d2eec8080', 800, 600),
  foodBeggarChicken:  u('1658763094617-df6cec01a0b1', 800, 600),
  foodNoodles:        u('1675764031141-80368d518cc4', 800, 600),
  foodFish:           u('1712632036092-5bc1bd933d12', 800, 600),
  foodSoup:           u('1747798678108-ba9a8606d58b', 800, 600),
  foodBraisedPork:    u('1708224001664-11632716fda7', 800, 600),
  foodLotus:          u('1696254220126-5cc760031ead', 800, 600),
  foodCake:           u('1672991727809-0f98ba5a7373', 800, 600),
  foodDingSheng:      u('1556761915-3fd5f6f66407', 800, 600),

  // Hotels (800×600)
  hotelLuxury:  u('1611892440504-42a5e0a8e32b', 800, 600),
  hotelMid:     u('1608124729560-7dc653f179c2', 800, 600),
  hotelBudget:  u('1676487419872-c7febf5e1e86', 800, 600),

  // Seasons (1200×800)
  seasonSpring: u('1692060352649-47d41599aeed', 1200, 800),
  seasonSummer: u('1757400338008-e320710c553a', 1200, 800),
  seasonAutumn: u('1736048218994-9d1d5375333f', 1200, 800),
  seasonWinter: u('1757400338008-e320710c553a', 1200, 800),
};

export default IMAGES;
export { IMAGES };