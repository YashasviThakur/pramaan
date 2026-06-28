import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

export default function WordsPullUp({ text, className = '', showAsterisk = false, delayStart = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const words = text.split(' ');

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <span key={i} className="l-title-word">
            <motion.span
              style={{ display: 'inline-block' }}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: delayStart + i * 0.08, duration: 0.6, ease: EASE }}
            >
              {word}
            </motion.span>
            {showAsterisk && isLast && <span className="l-asterisk">*</span>}
            {!isLast && ' '}
          </span>
        );
      })}
    </span>
  );
}
