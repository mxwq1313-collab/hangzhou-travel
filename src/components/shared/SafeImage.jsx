import { useState } from 'react';

const pool = [
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

export default function SafeImage({ src, alt = '', className = '', style = {}, seed = 0 }) {
  const [failed, setFailed] = useState(false);
  const fallbackGrad = pool[Math.abs(seed) % pool.length];

  if (failed || !src) {
    return (
      <div
        className={className}
        style={{
          background: fallbackGrad,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          ...style,
        }}
        aria-label={alt}
        role="img"
      >
        <span style={{
          fontSize: '2.5rem',
          opacity: 0.4,
          filter: 'grayscale(0.3)',
        }}>🏯</span>
        {/* 金色边框装饰 */}
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
      style={style}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}