import { motion } from 'framer-motion';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';

const PRINCIPLES = [
  { n: '01', t: 'Sealed', d: 'Every paper stays encrypted until fifteen minutes before the exam, its key split across three authorities.' },
  { n: '02', t: 'Assisted', d: 'AI reads each script and explains every mark — but a human examiner approves the final score.' },
  { n: '03', t: 'Provable', d: 'Each key release, grade and security action is hashed into a tamper-proof Merkle trail.' },
];

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 } }),
};

export default function About() {
  return (
    <section id="about" className="l-about">
      <div className="l-about-inner">
        <div className="l-kicker l-about-label">
          <span className="l-kicker-rule" />Exam integrity<span className="l-kicker-rule r" />
        </div>

        <WordsPullUpMultiStyle
          className="l-about-heading"
          segments={[
            { text: 'Pramaan secures the entire exam lifecycle,', className: '' },
            { text: 'from sealed paper to final score.', className: 'font-serif' },
          ]}
        />

        <motion.div
          className="l-principles"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {PRINCIPLES.map((p, i) => (
            <motion.div className="l-principle" key={p.n} variants={reveal} custom={i}>
              <div className="l-principle-n">{p.n}</div>
              <div className="l-principle-t">{p.t}</div>
              <div className="l-principle-d">{p.d}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
