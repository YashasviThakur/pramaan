import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';
import { useStore } from '../../store';

const CARD_EASE = [0.22, 1, 0.36, 1];
const CARD_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4';
const ICON = {
  delivery: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
  eval: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
  ledger: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
};

const CARDS = [
  { icon: ICON.delivery, title: 'Secure Delivery.', num: '01', view: 'delivery',
    items: ['Shamir 2-of-3 key custodians', 'AES-256 time-locked papers', 'Decryption only at T-15 minutes', 'Leak window: weeks → minutes'] },
  { icon: ICON.eval, title: 'AI Evaluation.', num: '02', view: 'evaluation',
    items: ['AI rubric analysis with explanations', 'Human-in-the-loop final approval', '~70% less grading time'] },
  { icon: ICON.ledger, title: 'Tamper-Proof Trust.', num: '03', view: 'ledger',
    items: ['SHA-256 Merkle audit ledger', 'Instant retroactive-tamper detection', 'One-click transparent disputes'] },
];

function FeatureCard({ index, children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <motion.div
      ref={ref}
      className="l-card"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6, ease: CARD_EASE }}
    >
      {children}
    </motion.div>
  );
}

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

        <div className="l-cards">
          {/* Card 1 — video */}
          <FeatureCard index={0}>
            <video className="l-card-video" autoPlay loop muted playsInline src={CARD_VIDEO} />
            <div className="l-card-vid-grad" />
            <div className="l-card-video-text">Your exam, secured.</div>
          </FeatureCard>

          {/* Cards 2-4 — feature cards */}
          {CARDS.map((c, i) => (
            <FeatureCard index={i + 1} key={c.num}>
              <div className="l-card-feat">
                <img className="l-card-icon" src={c.icon} alt="" />
                <div className="l-card-titlewrap">
                  <div className="l-card-title">{c.title}</div>
                  <div className="l-card-num">{c.num}</div>
                </div>
                <div className="l-check-list">
                  {c.items.map((it) => (
                    <div className="l-check" key={it}>
                      <Check size={15} color="var(--primary)" />
                      <span>{it}</span>
                    </div>
                  ))}
                </div>
                <button className="l-learn" onClick={() => enter(c.view)}>
                  Learn more <ArrowRight size={14} style={{ transform: 'rotate(-45deg)' }} />
                </button>
              </div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
}
