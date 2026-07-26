import { useLanguage, t } from '../../context/LanguageContext';

/**
 * 双语文本组件
 * Bilingual text component — resolves {zh, en} objects based on current language
 *
 * Usage:
 *   <T obj={item.name} />           — renders a {zh, en} object
 *   <T obj={item.name} as="h2" />   — renders as a specific element
 *   <T obj={item.name} className="my-class" />
 *   <T en="Hello" zh="你好" />      — inline shorthand
 */
export default function BilingualText({
  obj,
  zh,
  en,
  as: Tag = 'span',
  className = '',
  ...rest
}) {
  const { lang } = useLanguage();

  // Support both inline {zh, en} props and a single obj prop
  const text = obj ? t(obj, lang) : (lang === 'zh' ? zh : en) ?? '';

  return (
    <Tag
      className={className}
      {...rest}
    >
      {text}
    </Tag>
  );
}

/**
 * T 简写组件，默认为 span
 * Shorthand for <BilingualText as="span" />
 */
export function T({ obj, zh, en, as, className, ...rest }) {
  const { lang } = useLanguage();
  const text = obj ? t(obj, lang) : (lang === 'zh' ? zh : en) ?? '';
  const Tag = as || 'span';

  return (
    <Tag className={className} {...rest}>
      {text}
    </Tag>
  );
}