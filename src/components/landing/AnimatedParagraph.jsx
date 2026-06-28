import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function AnimatedLetter({ char, progress, range }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return <motion.span style={{ opacity }}>{char === ' ' ? ' ' : char}</motion.span>;
}

export default function AnimatedParagraph({ text, className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] });
  const chars = text.split('');
  const total = chars.length;

  return (
    <p ref={ref} className={className}>
      {chars.map((c, i) => {
        const cp = i / total;
        return <AnimatedLetter key={i} char={c} progress={scrollYProgress} range={[cp - 0.1, cp + 0.05]} />;
      })}
    </p>
  );
}
