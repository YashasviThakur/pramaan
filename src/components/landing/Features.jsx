import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';
import { useStore } from '../../store';

const EASE = [0.22, 1, 0.36, 1];
const SHOWCASE_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4';

const PILLARS = [
  { title: 'Secure Delivery.', num: '01', view: 'delivery',
    items: ['Shamir 2-of-3 key custodians', 'AES-256 time-locked papers', 'Decryption only at T-15 minutes', 'Leak window: weeks → minutes'] },
  { title: 'AI Evaluation.', num: '02', view: 'evaluation',
    items: ['AI rubric analysis with explanations', 'Human-in-the-loop final approval', '~70% less grading time'] },
  { title: 'Tamper-Proof Trust.', num: '03', view: 'ledger',
    items: ['SHA-256 Merkle audit ledger', 'Instant retroactive-tamper detection', 'One-click transparent disputes'] },
];

export default function Features() {
  const { enter } = useStore();

  return (
    <section id="features" className="l-features">
      <div className="l-features-noise bg-noise" />
      <div className="l-features-inner">
        <div className="l-features-head">
          <WordsPullUpMultiStyle
            justify="flex-start"
            segments={[{ text: 'Studio-grade integrity for every examination.', className: '' }]}
          />
          <br />
          <WordsPullUpMultiStyle
            justify="flex-start"
            delayStart={0.2}
            segments={[{ text: 'Built for trust. Powered by AI.', className: 'l-head-muted' }]}
          />
        </div>

        {/* single cinematic showcase — all three pillars written over the video */}
        <motion.div
          className="l-showcase"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <video className="l-showcase-video" autoPlay loop muted playsInline src={SHOWCASE_VIDEO} />
          <div className="l-showcase-grad" />
          <div className="l-showcase-overlay">
            <div className="l-showcase-title font-serif">Your exam, secured.</div>
            <div className="l-pillars">
              {PILLARS.map((p) => (
                <button className="l-pillar" key={p.num} onClick={() => enter(p.view)}>
                  <div className="l-pillar-top">
                    <span className="l-pillar-title">{p.title}</span>
                    <span className="l-pillar-num">{p.num}</span>
                  </div>
                  <div className="l-pillar-list">
                    {p.items.map((it) => (
                      <div className="l-check" key={it}>
                        <Check size={14} color="var(--primary)" />
                        <span>{it}</span>
                      </div>
                    ))}
                  </div>
                  <span className="l-pillar-learn">
                    Learn more <ArrowRight size={13} style={{ transform: 'rotate(-45deg)' }} />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
