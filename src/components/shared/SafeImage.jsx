import { useEffect, useRef, useState } from 'react';

/**
 * 安全图片组件 — 加载失败时自动重试，最终失败显示本地 fallback 渐变
 * Safe image with retry on flaky networks, fallback gradient on final error
 *
 * Props:
 *   src          — 图片 URL
 *   alt          — 无障碍描述
 *   className    — CSS class
 *   style        — 内联样式
 *   seed         — 用于选择 fallback 渐变色（使同一失败图片保持相同色调）
 *   width        — 图片宽度 (px)
 *   height       — 图片高度 (px)
 *   aspectRatio  — 宽高比，如 "16/9"、"4/3"
 *   loading      — "lazy" | "eager"（默认 "lazy"）
 *   fallbackIcon — 失败时显示的 emoji 图标（默认 🏯）
 *   onLoad       — 加载成功回调
 *   onError      — 加载失败回调
 */

// 失败重试配置 — 应对 github.io 等 CDN 偶发连接失败
// Retry config — for flaky CDN connections (e.g. intermittent resets)
const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 1000;

const FALLBACK_GRADIENTS = [
  'linear-gradient(135deg, #8db5c0 0%, #5a8a7a 100%)',
  'linear-gradient(135deg, #c9a96e 0%, #8b5a4b 100%)',
  'linear-gradient(135deg, #8b7355 0%, #4a3728 100%)',
  'linear-gradient(135deg, #d4a76a 0%, #b84a3a 100%)',
  'linear-gradient(135deg, #87a96b 0%, #4a7c59 100%)',
  'linear-gradient(135deg, #7ba4b8 0%, #3d6b80 100%)',
  'linear-gradient(135deg, #c4894a 0%, #a02520 100%)',
  'linear-gradient(135deg, #e8c9a0 0%, #c9a14a 100%)',
  'linear-gradient(135deg, #8fbc8f 0%, #4a7c59 100%)',
  'linear-gradient(135deg, #c8b898 0%, #8b7d6b 100%)',
];

export default function SafeImage({
  src,
  alt = '',
  className = '',
  style = {},
  seed = 0,
  width,
  height,
  aspectRatio,
  loading = 'lazy',
  fallbackIcon = '🏯',
  onLoad,
  onError,
}) {
  const [failed, setFailed] = useState(false);
  const [retrySrc, setRetrySrc] = useState(src);
  const retriesRef = useRef(0);
  const timerRef = useRef(null);
  const gradient = FALLBACK_GRADIENTS[Math.abs(seed) % FALLBACK_GRADIENTS.length];

  // src 变化时重置状态 / Reset state when the image source changes
  useEffect(() => {
    setFailed(false);
    setRetrySrc(src);
    retriesRef.current = 0;
    clearTimeout(timerRef.current);
    return () => clearTimeout(timerRef.current);
  }, [src]);

  const handleError = () => {
    // 先自动重试（绕过缓存），重试耗尽后再回退
    // Retry with cache-busting first; fall back only after retries exhausted
    if (retriesRef.current < MAX_RETRIES) {
      retriesRef.current += 1;
      timerRef.current = setTimeout(() => {
        const sep = src.includes('?') ? '&' : '?';
        setRetrySrc(`${src}${sep}retry=${retriesRef.current}`);
      }, RETRY_DELAY_MS * retriesRef.current);
      return;
    }
    setFailed(true);
    if (onError) onError();
  };

  const handleLoad = () => {
    if (onLoad) onLoad();
  };

  const baseStyle = {
    width: width ? `${width}px` : undefined,
    height: height ? `${height}px` : undefined,
    aspectRatio: aspectRatio || undefined,
    objectFit: 'cover',
    ...style,
  };

  if (failed || !src) {
    return (
      <div
        className={className}
        style={{
          background: gradient,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          ...baseStyle,
        }}
        aria-label={alt}
        role="img"
      >
        <span style={{
          fontSize: '2.5rem',
          opacity: 0.4,
          filter: 'grayscale(0.3)',
        }}>{fallbackIcon}</span>
        <span style={{
          position: 'absolute',
          inset: '8px',
          border: '1px solid rgba(201,161,74,0.2)',
          borderRadius: '2px',
          pointerEvents: 'none',
        }} />
      </div>
    );
  }

  return (
    <img
      src={retrySrc}
      alt={alt}
      className={className}
      style={baseStyle}
      loading={loading}
      width={width}
      height={height}
      onError={handleError}
      onLoad={handleLoad}
    />
  );
}