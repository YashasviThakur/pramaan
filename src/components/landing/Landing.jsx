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
  return (
    <section className="l-foot">
      <div className="l-foot-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3>See it defend a live exam.</h3>
          <p>Walk the secure launch, AI grading loop, a simulated insider attack, and automated isolation — in the working console.</p>
          <button className="l-cta" onClick={() => enter('command')}>
            Launch platform
            <span className="l-cta-circle"><ArrowRight size={18} color="#E1E0CC" /></span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default function Landing() {
  return (
    <div className="landing">
      <video className="l-bg-video" autoPlay loop muted playsInline src={BG_VIDEO} />
      <div className="l-bg-scrim" />
      <Hero />
      <About />
      <Features />
      <Foot />
    </div>
  );
}
