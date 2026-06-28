import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Hero from './Hero';
import About from './About';
import Features from './Features';
import { useStore } from '../../store';
import '../../landing.css';

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
      <Hero />
      <About />
      <Features />
      <Foot />
    </div>
  );
}
