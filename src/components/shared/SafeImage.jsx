import { useState } from 'react';

/**
 * 安全图片组件 — 加载失败时显示本地 fallback 渐变
 * Safe image with fallback gradient on error
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
  const gradient = FALLBACK_GRADIENTS[Math.abs(seed) % FALLBACK_GRADIENTS.length];

  const handleError = () => {
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
      src={src}
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