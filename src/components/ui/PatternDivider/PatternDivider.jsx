/**
 * 传统纹样分隔线组件
 * Traditional pattern divider (cloud, wave, or simple line)
 *
 * Props:
 *   variant — 'cloud' | 'wave' | 'line' | 'double-line' | 'none'
 *   color   — 'gold' | 'cinnabar' | 'ink'
 *   className
 */
export default function PatternDivider({
  variant = 'line',
  color = 'gold',
  className = '',
}) {
  if (variant === 'none') return null;

  const colorVar = {
    gold: 'var(--imperial-gold)',
    cinnabar: 'var(--cinnabar)',
    ink: 'var(--ink-line)',
  }[color];

  const renderDivider = () => {
    switch (variant) {
      case 'cloud':
        return (
          <svg
            width="100%"
            height="40"
            viewBox="0 0 400 40"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M0 20 Q40 5 80 20 Q120 35 160 20 Q200 5 240 20 Q280 35 320 20 Q360 5 400 20"
              stroke={colorVar}
              strokeWidth="0.5"
              opacity="0.5"
            />
            <path
              d="M0 20 Q40 35 80 20 Q120 5 160 20 Q200 35 240 20 Q280 5 320 20 Q360 35 400 20"
              stroke={colorVar}
              strokeWidth="0.3"
              opacity="0.3"
            />
          </svg>
        );

      case 'wave':
        return (
          <svg
            width="100%"
            height="30"
            viewBox="0 0 400 30"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M0 15 C50 0, 100 30, 150 15 C200 0, 250 30, 300 15 C350 0, 400 30, 400 15"
              stroke={colorVar}
              strokeWidth="0.6"
              opacity="0.5"
            />
          </svg>
        );

      case 'double-line':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <div style={{ width: '80px', height: '1px', background: colorVar, opacity: 0.6 }} />
            <div style={{ width: '40px', height: '1px', background: colorVar, opacity: 0.4 }} />
          </div>
        );

      case 'line':
      default:
        return (
          <div style={{
            width: '100%',
            height: '1px',
            background: `linear-gradient(to right, transparent, ${colorVar} 20%, ${colorVar} 80%, transparent)`,
            opacity: 0.4,
          }} />
        );
    }
  };

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingBlock: 'var(--space-xl)',
      }}
      aria-hidden="true"
    >
      <div style={{ width: '100%', maxWidth: '600px' }}>
        {renderDivider()}
      </div>
    </div>
  );
}