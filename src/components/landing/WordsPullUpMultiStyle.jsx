import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

// segments: [{ text, className }]
export default function WordsPullUpMultiStyle({ segments, className = '', justify = 'center', delayStart = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const words = [];
  segments.forEach((seg) => {
    seg.text.split(' ').filter(Boolean).forEach((w) => words.push({ w, cls: seg.className || '' }));
  });

  return (
    <span
      ref={ref}
      className={className}
      style={{ display: 'inline-flex', flexWrap: 'wrap', justifyContent: justify }}
    >
      {words.map((item, i) => (
        <motion.span
          key={i}
          className={item.cls}
          style={{ display: 'inline-block', marginRight: '0.26em' }}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: delayStart + i * 0.08, duration: 0.6, ease: EASE }}
        >
          {item.w}
        </motion.span>
      ))}
    </span>
  );
}
