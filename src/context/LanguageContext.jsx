import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const LanguageContext = createContext(null);

/**
 * 获取初始语言：localStorage > 浏览器语言 > 默认中文
 * Get initial language: localStorage > browser preference > default zh
 */
function getInitialLang() {
  try {
    const stored = localStorage.getItem('hangzhou-travel-lang');
    if (stored === 'en' || stored === 'zh') return stored;
  } catch {}

  const browserLang = navigator.language?.toLowerCase() || '';
  if (browserLang.startsWith('zh')) return 'zh';
  if (browserLang.startsWith('en')) return 'en';

  return 'zh'; // 默认中文 / default Chinese
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang);

  const setLang = useCallback((newLang) => {
    setLangState(newLang);
    try { localStorage.setItem('hangzhou-travel-lang', newLang); } catch {}
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === 'zh' ? 'en' : 'zh');
  }, [lang, setLang]);

  // 同步到 document 以支持 :lang() CSS 选择器和屏幕阅读器
  // Sync to document for :lang() CSS selector and screen readers
  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

/** 获取当前语言 / Get current language */
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}

/**
 * 解析双语文本的辅助函数
 * Helper to resolve bilingual text (components use this or <T>)
 * @param {string|{zh:string,en:string}} obj
 * @param {'zh'|'en'} lang
 * @returns {string}
 */
export function t(obj, lang) {
  if (!obj) return '';
  if (typeof obj === 'string') return obj;
  return obj[lang] ?? obj.en ?? obj.zh ?? '';
}