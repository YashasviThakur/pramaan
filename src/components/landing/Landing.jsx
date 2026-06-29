import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Hero from './Hero';
import About from './About';
import Features from './Features';
import { useStore } from '../../store';
import '../../landing.css';

const BG_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4';

function Foot() {
  const { enter } = useStore();

  const beats = [
    { n: '01', label: 'Secure launch' },
    { n: '02', label: 'AI grading loop' },
    { n: '03', label: 'Insider attack' },
    { n: '04', label: 'Auto-isolation' },
  ];

  const reveal = {
    hidden: { opacity: 0, y: 20 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
    }),
  };

  return (
    <section className="l-foot">
      <div className="l-foot-inner">
        <div className="l-foot-glow" aria-hidden="true" />
        <motion.div
          className="l-foot-body"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div className="l-foot-eyebrow" variants={reveal} custom={0}>
            <span className="l-foot-rule" />
            The working console
          </motion.div>

          <motion.h3 className="l-foot-head" variants={reveal} custom={1}>
            Don&rsquo;t take our word for it.
            <br />
            Watch it defend a <span className="font-serif">live</span> exam.
          </motion.h3>

          <motion.p className="l-foot-sub" variants={reveal} custom={2}>
            No slides, no mock-ups — the real platform, running end to end.
          </motion.p>

          <motion.ul className="l-foot-beats" variants={reveal} custom={3}>
            {beats.map((b) => (
              <li className="l-foot-beat" key={b.n}>
                <span className="l-foot-beat-n">{b.n}</span>
                <span className="l-foot-beat-l">{b.label}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div className="l-foot-actions" variants={reveal} custom={4}>
            <button className="l-cta" onClick={() => enter('command')}>
              Enter the live console
              <span className="l-cta-circle"><ArrowRight size={18} color="#E1E0CC" /></span>
            </button>
            <button className="l-foot-ghost" onClick={() => enter('ledger')}>
              Inspect the audit trail
              <ArrowRight size={13} style={{ transform: 'rotate(-45deg)' }} />
            </button>
          </motion.div>

          <motion.p className="l-foot-micro" variants={reveal} custom={5}>
            Runs in your browser · No login · ~90 seconds
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default function Landing() {
  return (
    <div className="landing">
      <video className="l-bg-video" autoPlay loop muted playsInline preload="auto" src={BG_VIDEO} />
      <div className="l-bg-scrim" />
      <Hero />
      <About />
      <Features />
      <Foot />
    </div>
  );
}
