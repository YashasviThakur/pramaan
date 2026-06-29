import { motion } from 'framer-motion';
import { ArrowRight, Check, Hash } from 'lucide-react';
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
      <motion.div
        className="l-foot-inner"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="l-foot-glow" aria-hidden="true" />

        {/* left — editorial lead */}
        <div className="l-foot-lead">
          <motion.div className="l-foot-eyebrow" variants={reveal} custom={0}>
            <span className="l-foot-rule" />
            The working console
          </motion.div>

          <motion.h3 className="l-foot-head" variants={reveal} custom={1}>
            Don&rsquo;t take our word for it. Watch it defend a <span className="font-serif">live</span> exam.
          </motion.h3>

          <motion.p className="l-foot-sub" variants={reveal} custom={2}>
            No slides, no mock-ups — the real platform, running end to end.
          </motion.p>

          <motion.div className="l-foot-actions" variants={reveal} custom={3}>
            <button className="l-cta" onClick={() => enter('command')}>
              Enter the live console
              <span className="l-cta-circle"><ArrowRight size={18} color="#E1E0CC" /></span>
            </button>
            <button className="l-foot-ghost" onClick={() => enter('ledger')}>
              Inspect the audit trail
              <ArrowRight size={13} style={{ transform: 'rotate(-45deg)' }} />
            </button>
          </motion.div>

          <motion.p className="l-foot-micro" variants={reveal} custom={4}>
            Runs in your browser · No login · ~90 seconds
          </motion.p>
        </div>

        {/* right — the integrity certificate */}
        <motion.div className="l-cert" variants={reveal} custom={2}>
          <div className="l-cert-bar">
            <div>
              <div className="l-cert-kicker">Pramaan · Live run</div>
              <div className="l-cert-title">Integrity Certificate</div>
            </div>
            <div className="l-stamp">
              <div className="l-stamp-1">VERIFIED</div>
              <div className="l-stamp-2">TAMPER-PROOF</div>
            </div>
          </div>

          <div className="l-cert-rows">
            <div className="l-cert-row"><span className="k">Exam</span><span className="v">NEET-UG 2026</span></div>
            <div className="l-cert-row"><span className="k">Centres</span><span className="v">4,750</span></div>
            <div className="l-cert-row"><span className="k">Integrity</span><span className="v ok">100.0%</span></div>
            <div className="l-cert-row"><span className="k">Re-exams ordered</span><span className="v ok">0</span></div>
          </div>

          <div className="l-cert-checks">
            {beats.map((b) => (
              <div className="l-cert-check" key={b.n}>
                <Check size={13} color="#76d3a1" />
                <span className="l-cert-check-n">{b.n}</span>
                <span className="l-cert-check-l">{b.label}</span>
              </div>
            ))}
          </div>

          <div className="l-cert-hash">
            <div className="l-cert-hash-k">SHA-256 Merkle root</div>
            <div className="l-cert-hash-v"><Hash size={11} /> 9f2a·c41e·7b88·a3d0·e71c·5f6b·22ad·0c93</div>
          </div>
        </motion.div>
      </motion.div>
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
