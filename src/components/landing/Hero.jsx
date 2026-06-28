import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import WordsPullUp from './WordsPullUp';
import { useStore } from '../../store';

const EASE = [0.16, 1, 0.3, 1];
const HERO_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4';

const NAV = [
  { label: 'Overview', target: 'about' },
  { label: 'Security', target: 'features' },
  { label: 'Transparency', target: 'about' },
  { label: 'Pillars', target: 'features' },
];

export default function Hero() {
  const { enter } = useStore();
  const [videoReady, setVideoReady] = useState(false);
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="l-hero">
      <div className="l-hero-inner">
        <video
          className={`l-hero-video${videoReady ? ' is-ready' : ''}`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          src={HERO_VIDEO}
          onCanPlay={() => setVideoReady(true)}
        />
        <div className="l-noise noise-overlay" />
        <div className="l-hero-grad" />

        <nav className="l-nav">
          {NAV.map((n) => (
            <button key={n.label} onClick={() => scrollTo(n.target)}>{n.label}</button>
          ))}
          <button onClick={() => enter('command')}>Console</button>
        </nav>

        <div className="l-hero-content">
          <div className="l-hero-head">
            <motion.div
              className="l-hero-kicker"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8, ease: EASE }}
            >
              <span className="l-hero-roman">Pramaan</span>
              <span className="l-hero-mean">/ proof · evidence</span>
            </motion.div>
            <WordsPullUp text="प्रमाण" className="l-title l-title-deva" showAsterisk />
          </div>
          <div className="l-hero-right">
            <motion.p
              className="l-hero-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: EASE }}
            >
              Pramaan is a national integrity layer for every examination — binding secure paper
              delivery, AI-assisted evaluation and a tamper-proof trail into one platform, so no
              student is ever failed by a leak again.
            </motion.p>
            <motion.button
              className="l-cta group"
              onClick={() => enter('command')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: EASE }}
            >
              Launch platform
              <span className="l-cta-circle"><ArrowRight size={18} color="#E1E0CC" /></span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
