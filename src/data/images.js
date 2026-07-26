/**
 * 杭州旅游网站 — 纯本地中国风渐变图
 * 100% offline, instant load, no external dependencies
 * 如需 Unsplash：设置环境变量 VITE_UNSPLASH_ACCESS_KEY
 */

const svg = (body, w = 800, h = 600) =>
  `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${body}</svg>`)}`;

// 山峦剪影 SVG
const mountains = (topColor, midColor, baseColor) => `
  <polygon points="0,300 60,240 120,280 180,210 240,260 300,190 360,250 420,200 480,270 540,220 600,260 660,190 720,250 800,210 800,400 0,400" fill="${topColor}" opacity="0.4"/>
  <polygon points="0,350 50,300 100,330 160,280 220,320 280,260 340,310 400,270 460,320 520,280 580,330 640,270 700,310 760,280 800,300 800,400 0,400" fill="${midColor}" opacity="0.35"/>
  <polygon points="0,400 800,380 800,400 0,400" fill="${baseColor}" opacity="0.3"/>`;

// 水波纹
const water = (color) => `
  <path d="M0,320 Q50,310 100,320 Q150,330 200,320 Q250,310 300,320 Q350,330 400,320 Q450,310 500,320 Q550,330 600,320 Q650,310 700,320 Q750,330 800,320 L800,400 L0,400 Z" fill="${color}" opacity="0.15"/>
  <path d="M0,350 Q50,340 100,350 Q150,360 200,350 Q250,340 300,350 Q350,360 400,350 Q450,340 500,350 Q550,360 600,350 Q650,340 700,350 Q750,360 800,350 L800,400 L0,400 Z" fill="${color}" opacity="0.1"/>`;

// 云纹
const clouds = (color) => `
  <circle cx="150" cy="80" r="30" fill="${color}" opacity="0.12"/>
  <circle cx="190" cy="75" r="35" fill="${color}" opacity="0.10"/>
  <circle cx="230" cy="80" r="28" fill="${color}" opacity="0.12"/>
  <circle cx="500" cy="60" r="25" fill="${color}" opacity="0.10"/>
  <circle cx="540" cy="55" r="30" fill="${color}" opacity="0.08"/>
  <circle cx="580" cy="60" r="22" fill="${color}" opacity="0.10"/>`;

// 柳条
const willows = (color) => `
  <path d="M60,0 Q70,60 55,120" stroke="${color}" stroke-width="1.5" fill="none" opacity="0.25"/>
  <path d="M65,0 Q80,50 68,110" stroke="${color}" stroke-width="1" fill="none" opacity="0.2"/>
  <path d="M700,0 Q715,55 705,110" stroke="${color}" stroke-width="1.5" fill="none" opacity="0.25"/>
  <path d="M710,0 Q725,45 715,100" stroke="${color}" stroke-width="1" fill="none" opacity="0.2"/>`;

// 花瓣
const petals = (color) => `
  <circle cx="100" cy="150" r="4" fill="${color}" opacity="0.2"/>
  <circle cx="250" cy="100" r="3" fill="${color}" opacity="0.15"/>
  <circle cx="400" cy="180" r="5" fill="${color}" opacity="0.18"/>
  <circle cx="550" cy="120" r="3" fill="${color}" opacity="0.15"/>
  <circle cx="680" cy="160" r="4" fill="${color}" opacity="0.2"/>
  <circle cx="320" cy="200" r="3" fill="${color}" opacity="0.12"/>
  <circle cx="150" cy="220" r="2" fill="${color}" opacity="0.1"/>
  <circle cx="600" cy="200" r="3" fill="${color}" opacity="0.12"/>`;

// 标题文字
const title = (zh, en, zhColor = '#ffffff', enColor = 'rgba(255,255,255,0.5)') => `
  <text x="400" y="280" text-anchor="middle" font-family="'Noto Serif SC','STSong','SimSun',serif" font-size="72" font-weight="600" fill="${zhColor}" opacity="0.85" letter-spacing="12">${zh}</text>
  <text x="400" y="330" text-anchor="middle" font-family="'Cormorant Garamond','Georgia',serif" font-size="22" font-style="italic" fill="${enColor}" opacity="0.7" letter-spacing="4">${en}</text>`;

// 装饰边框
const frame = (color) => `
  <rect x="16" y="16" width="768" height="568" fill="none" stroke="${color}" stroke-width="1" opacity="0.25" rx="4"/>
  <rect x="24" y="24" width="752" height="552" fill="none" stroke="${color}" stroke-width="0.5" opacity="0.12" rx="2"/>`;

// 构建场景图
function scene({ bg, zh, en, lightOverlay = 'rgba(26,22,19,0.2)', accent, decor }, w = 800, h = 600) {
  return svg(`
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${bg[0]}"/>
        <stop offset="50%" style="stop-color:${bg[1]}"/>
        <stop offset="100%" style="stop-color:${bg[2]}"/>
      </linearGradient>
      <linearGradient id="overlay" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:rgba(26,22,19,0.15)"/>
        <stop offset="50%" style="stop-color:rgba(26,22,19,0.08)"/>
        <stop offset="100%" style="stop-color:${lightOverlay}"/>
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#bg)"/>
    <rect width="${w}" height="${h}" fill="url(#overlay)"/>
    ${mountains(accent || bg[0], bg[1], bg[2])}
    ${water(accent || bg[0])}
    ${clouds(accent || '#fff')}
    ${decor || ''}
    ${frame(accent || 'rgba(255,255,255,0.3)')}
    ${title(zh, en)}
  `, w, h);
}

// 食物场景
function foodScene({ bg, zh, en, accent }, w = 800, h = 600) {
  return svg(`
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${bg[0]}"/>
        <stop offset="50%" style="stop-color:${bg[1]}"/>
        <stop offset="100%" style="stop-color:${bg[2]}"/>
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#bg)"/>
    <rect width="${w}" height="${h}" fill="rgba(26,22,19,0.15)"/>
    <circle cx="400" cy="300" r="120" fill="${accent || bg[0]}" opacity="0.15"/>
    <circle cx="400" cy="300" r="90" fill="${accent || bg[0]}" opacity="0.1"/>
    ${frame(accent || 'rgba(255,255,255,0.3)')}
    ${title(zh, en)}
  `, w, h);
}

// 各场景渐变配置
const lakeColors = ['#6fa8c0', '#8db5a0', '#5a8a6a'];
const templeColors = ['#c4a060', '#a08050', '#6b5030'];
const streetColors = ['#d4a060', '#c08040', '#a06030'];
const foodColors = ['#c06040', '#a04030', '#802020'];
const hotelColors = ['#6b5a50', '#4a3a30', '#2b1a10'];
const springColors = ['#f0c0c0', '#e0a0c0', '#c0d8a0'];
const summerColors = ['#80b080', '#508050', '#306030'];
const autumnColors = ['#e0c060', '#c08030', '#905020'];
const winterColors = ['#c0d8e8', '#a0c0d8', '#80b0c8'];

export const IMAGES = {
  // Heroes (1600×900)
  heroWestLake:  scene({ bg: ['#2a5068','#305848','#1a3a30'], zh:'西湖', en:'West Lake', accent:'#8db5c0', lightOverlay:'rgba(26,22,19,0.35)' }, 1600, 900),
  heroLeifeng:   scene({ bg: ['#5a4030','#403028','#2a2018'], zh:'雷峰塔', en:'Leifeng Pagoda', accent:'#c9a060' }, 1600, 900),
  heroLingyin:   scene({ bg: ['#4a3830','#3a2820','#2a1810'], zh:'灵隐寺', en:'Lingyin Temple', accent:'#a08050' }, 1600, 900),
  heroHotel:     scene({ bg: ['#4a3a30','#3a2a20','#2a1a10'], zh:'枕水栖居', en:'Stay by the Water', accent:'#c9a060', lightOverlay:'rgba(26,22,19,0.35)' }, 1600, 900),
  heroTransport: scene({ bg: ['#506070','#405060','#304050'], zh:'出行指南', en:'Getting Around', accent:'#80a0b8', lightOverlay:'rgba(26,22,19,0.25)' }, 1600, 900),
  heroSeason:    scene({ bg: ['#e0d0c0','#d0c0b0','#c0b0a0'], zh:'四季杭州', en:'Four Seasons', accent:'#d4a060', lightOverlay:'rgba(26,22,19,0.15)' }, 1600, 900),
  heroItinerary: scene({ bg: ['#3a4a30','#2a3a20','#1a2a10'], zh:'行程规划', en:'Itineraries', accent:'#80b880', lightOverlay:'rgba(26,22,19,0.3)' }, 1600, 900),
  heroFood:      scene({ bg: ['#5a3020','#4a2010','#3a1000'], zh:'杭州味道', en:'Taste of Hangzhou', accent:'#c06040', lightOverlay:'rgba(26,22,19,0.3)' }, 1600, 900),

  // Attractions (800×600) — each unique gradient
  attrWestLake:      scene({ bg: lakeColors, zh:'西湖', en:'West Lake', accent:'#8db5c0', decor: willows('#8db5c0') }),
  attrLingyin:       scene({ bg: templeColors, zh:'灵隐寺', en:'Lingyin Temple', accent:'#d4b060' }),
  attrLeifeng:       scene({ bg: ['#c0a060','#a08040','#705030'], zh:'雷峰塔', en:'Leifeng Pagoda', accent:'#e0c080' }),
  attrHefang:        scene({ bg: streetColors, zh:'河坊街', en:'Hefang Street', accent:'#e0c080' }),
  attrXixi:          scene({ bg: ['#80a870','#609060','#407040'], zh:'西溪湿地', en:'Xixi Wetland', accent:'#a0c890' }),
  attrCanal:         scene({ bg: ['#6090a0','#507880','#406068'], zh:'大运河', en:'Grand Canal', accent:'#80b0c0' }),
  attrSixHarmonies:  scene({ bg: ['#807060','#605040','#403020'], zh:'六和塔', en:'Six Harmonies', accent:'#a09070' }),
  attrSilkMuseum:    scene({ bg: ['#c0b090','#a09070','#807050'], zh:'丝绸博物馆', en:'Silk Museum', accent:'#d0c0a0' }),

  // Food (800×600) — warm food tones
  foodDongpo:         foodScene({ bg: ['#a04020','#803018','#602010'], zh:'东坡肉', en:'Dongpo Pork', accent:'#c06040' }),
  foodLongjingShrimp: foodScene({ bg: ['#609060','#407040','#305830'], zh:'龙井虾仁', en:'Longjing Shrimp', accent:'#80b080' }),
  foodBeggarChicken:  foodScene({ bg: ['#b05020','#904018','#703010'], zh:'叫花鸡', en:'Beggar Chicken', accent:'#d07040' }),
  foodNoodles:        foodScene({ bg: ['#908060','#706040','#584830'], zh:'片儿川', en:'Pian Er Chuan', accent:'#b0a080' }),
  foodFish:           foodScene({ bg: ['#808060','#606840','#485030'], zh:'西湖醋鱼', en:'Vinegar Fish', accent:'#a0a080' }),
  foodSoup:           foodScene({ bg: ['#c09050','#a07838','#806028'], zh:'宋嫂鱼羹', en:'Fish Soup', accent:'#e0b070' }),
  foodBraisedPork:    foodScene({ bg: ['#704020','#583018','#402010'], zh:'干菜焖肉', en:'Braised Pork', accent:'#906040' }),
  foodLotus:          foodScene({ bg: ['#c0a0b0','#a08090','#806070'], zh:'西湖藕粉', en:'Lotus Pudding', accent:'#d0b0c0' }),
  foodCake:           foodScene({ bg: ['#b08040','#906030','#704820'], zh:'酥油饼', en:'Crispy Cake', accent:'#d0a060' }),
  foodDingSheng:      foodScene({ bg: ['#c08090','#a06070','#804050'], zh:'定胜糕', en:'Ding Sheng Cake', accent:'#e0a0b0' }),

  // Hotels (800×600)
  hotelLuxury:  scene({ bg: ['#4a3a30','#3a2a20','#2a1a10'], zh:'豪华酒店', en:'Luxury Hotel', accent:'#c9a060' }),
  hotelMid:     scene({ bg: ['#5a5040','#4a4030','#3a3020'], zh:'舒适之选', en:'Mid-Range', accent:'#a09070' }),
  hotelBudget:  scene({ bg: ['#6a6048','#5a5038','#4a4028'], zh:'经济实惠', en:'Budget Stay', accent:'#b0a080' }),

  // Seasons (1200×800) — 现状已良好
  seasonSpring: scene({ bg: springColors, zh:'春', en:'Spring', accent:'#e8a0c0', decor: petals('#f0a0c0'), lightOverlay:'rgba(26,22,19,0.1)' }, 1200, 800),
  seasonSummer: scene({ bg: summerColors, zh:'夏', en:'Summer', accent:'#80c080' }, 1200, 800),
  seasonAutumn: scene({ bg: autumnColors, zh:'秋', en:'Autumn', accent:'#e0a040' }, 1200, 800),
  seasonWinter: scene({ bg: winterColors, zh:'冬', en:'Winter', accent:'#c0e0f0', lightOverlay:'rgba(26,22,19,0.08)' }, 1200, 800),
};

export default IMAGES;