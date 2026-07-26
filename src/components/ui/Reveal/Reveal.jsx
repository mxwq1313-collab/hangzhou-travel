import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion';

/**
 * 滚动揭示组件
 * Scroll-triggered reveal animation wrapper
 *
 * Props:
 *   children  — content to reveal
 *   as        — HTML element / motion component (default 'div')
 *   delay     — animation delay in seconds
 *   direction — 'up' | 'down' | 'left' | 'right' | 'none'
 *   duration  — animation duration in seconds
 *   className — additional class
 */
export default function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  direction = 'up',
  duration = 0.6,
  className = '',
  once = true,
  ...rest
}) {
  const prefersReduced = usePrefersReducedMotion();

  const directionMap = {
    up:    { y: 40, x: 0 },
    down:  { y: -40, x: 0 },
    left:  { y: 0, x: 40 },
    right: { y: 0, x: -40 },
    none:  { y: 0, x: 0 },
  };

  const offset = directionMap[direction] || directionMap.up;

  // 如果用户偏好减少动画，直接渲染内容
  if (prefersReduced) {
    return <Tag className={className} {...rest}>{children}</Tag>;
  }

  const Component = motion[Tag] || motion.div;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once, margin: '-80px' }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.45, 0.35, 1],
      }}
      {...rest}
    >
      {children}
    </Component>
  );
}

/**
 * 交错子元素揭示（用于列表/网格）
 * Staggered children reveal for lists/grids
 */
export function RevealStagger({
  children,
  className = '',
  staggerDelay = 0.1,
  direction = 'up',
}) {
  const prefersReduced = usePrefersReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: staggerDelay },
        },
      }}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <RevealChild key={i} direction={direction}>
              {child}
            </RevealChild>
          ))
        : children}
    </motion.div>
  );
}

function RevealChild({ children, direction = 'up' }) {
  const dirMap = { up: 30, down: -30, left: 30, right: -30 };
  const offset = dirMap[direction] ?? 30;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: offset },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.25, 0.45, 0.35, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}