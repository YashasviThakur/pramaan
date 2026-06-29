import { useState, useEffect, useRef } from 'react';
import { ShieldCheck } from 'lucide-react';
import { useStore } from '../store';
import './FeatureCarousel.css';

// same cinematic clip as the landing page background
const BG_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4';

const CARD_VIDEOS = [
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260506_030111_a9e15665-d379-4a7f-8116-695bbe452ad1.mp4',
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_171347_f640c30d-ec21-426a-98bc-77e07c2c60cb.mp4',
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260503_104800_bc43ae09-f494-43e3-97d7-2f8c1692cfd7.mp4',
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4',
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_115655_b4d9cd77-feed-43cd-a198-af78ebdf1f7a.mp4',
];

// Each card = one Pramaan platform feature
const FEATURES = [
  { key: 'delivery',   name: 'Secure Delivery', pillar: 'Pillar 01 · Education', code: 'JIT · 2-OF-3 KEYS',
    desc: 'Papers stay AES-256 encrypted until T-15min, unlocked only by a 2-of-3 key quorum.' },
  { key: 'evaluation', name: 'AI Evaluation',   pillar: 'Pillar 01 · Education', code: 'AI + HUMAN GATE',
    desc: 'AI maps each script to the rubric and explains every mark; a teacher approves the final score.' },
  { key: 'student',    name: 'Student Portal',  pillar: 'Pillar 01 · Education', code: 'BLIND RE-CHECK',
    desc: 'Students see their script and the AI notes; one click routes a blind senior re-check.' },
  { key: 'security',   name: 'Security Shield', pillar: 'Pillar 02 · Security',  code: 'UEBA · CERT-IN · SOAR',
    desc: 'Behavioural baselining flags insiders; SOAR isolates a breached centre in seconds.' },
  { key: 'ledger',     name: 'Audit Ledger',    pillar: 'Pillar 03 · Trust',    code: 'SHA-256 MERKLE',
    desc: 'Every action is hashed into a tamper-proof Merkle ledger — any tampering is provable.' },
];

const cardCount = FEATURES.length;
// dense parallel slices build real volumetric thickness
const thicknessLayers = [-1.47, -0.73, 0, 0.73, 1.47];

function ChipSVG({ i }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd"
        d="M20 8H40V14C40.0016 14.5299 40.2128 15.0377 40.5875 15.4125C40.9623 15.7872 41.4701 15.9984 42 16H59V24H42C41.4701 24.0016 40.9623 24.2128 40.5875 24.5875C40.2128 24.9623 40.0016 25.4701 40 26V52H20V8ZM18 8H8.00039C4.47435 8 1.56576 10.6083 1.08 14H18V8ZM1 16V24V26V34V36V44H18V36H1V34H18V26H1V24H18V16H1ZM1.08 46C1.56576 49.3917 4.47435 52 8.00039 52H18V46H1.08ZM42 14V8H52.0004C55.5264 8 58.4342 10.6084 58.92 14H42ZM59 26H42V34H59V26ZM59 36H42V44H59V36ZM52.0004 52H42V46H58.92C58.4342 49.3916 55.5264 52 52.0004 52Z"
        fill={`url(#fc_chip_${i})`} />
      <defs>
        <linearGradient id={`fc_chip_${i}`} x1="30" y1="8" x2="30" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="#999999" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function FeatureCarousel() {
  const { go } = useStore();
  const cardsRefs = useRef([]);
  const frameId = useRef(0);
  const progress = useRef(0);
  const progressTarget = useRef(0); // driven by scroll; carousel eases toward it
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const [metrics, setMetrics] = useState({ cardW: 336, cardH: 211 });

  // interactive 3D parallax tilt with inertia damping
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rx = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const ry = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      mouse.current.targetX = Math.max(-1, Math.min(1, rx));
      mouse.current.targetY = Math.max(-1, Math.min(1, ry));
    };
    const handleMouseLeave = () => { mouse.current.targetX = 0; mouse.current.targetY = 0; };
    // scroll advances the carousel (no autoplay) — wheel delta nudges the target
    const handleWheel = (e) => { progressTarget.current += e.deltaY * 0.0024; };
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  // responsive card dimensions
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      let cardW = Math.round(w * 0.16 + 130);
      const heightFactor = Math.min(1.0, Math.max(0.65, h / 850));
      cardW = Math.round(cardW * heightFactor);
      cardW = Math.min(336, Math.max(150, cardW));
      const cardH = Math.round(cardW / 1.5925); // standard credit-card ratio
      setMetrics({ cardW, cardH });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 60fps render loop — positions, rotations, perspective culling
  useEffect(() => {
    const renderLoop = () => {
      // no autoplay — ease toward the scroll-driven target
      progress.current += (progressTarget.current - progress.current) * 0.10;
      mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.08;
      mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.08;

      const cards = cardsRefs.current;
      const h = window.innerHeight;
      const { cardH } = metrics;

      const continuousProgress = progress.current;
      const roundedIndex = Math.round(continuousProgress);
      const diffFromRound = continuousProgress - roundedIndex;
      // magnetic dwell at front-centre, then accelerate
      const easedDiff = Math.sign(diffFromRound) * Math.pow(Math.abs(diffFromRound) * 2, 4.2) / 2;
      const virtualActiveIndex = roundedIndex + easedDiff;

      for (let i = 0; i < cardCount; i++) {
        const card = cards[i];
        if (!card) continue;

        let offset = i - virtualActiveIndex;
        const halfCount = cardCount / 2;
        while (offset > halfCount) offset -= cardCount;
        while (offset < -halfCount) offset += cardCount;

        const absOffset = Math.abs(offset);
        const sign = Math.sign(offset);

        if (absOffset > 3.0) { card.style.visibility = 'hidden'; continue; }
        card.style.visibility = 'visible';

        const gap = 36;
        const peekAmount = -55;
        const D = 1350;

        let y = 0; let z = 0; let rot = 0;

        if (absOffset <= 1) {
          const t = absOffset;
          const easedT = t * t * (3 - 2 * t);
          const targetY = cardH + gap;
          y = -sign * (easedT * targetY);
          z = 400 + easedT * (220 - 400);
          rot = easedT * 132;
        } else if (absOffset <= 2) {
          const t = absOffset - 1;
          const easedT = t * t * (3 - 2 * t);
          const yStart = cardH + gap;
          const zStart = 220;
          const rotStart = 132;
          const zEnd = -60;
          const rotEnd = 175;
          const sEnd = D / (D - zEnd);
          const yEnd = (h / 2 - peekAmount) / sEnd - (cardH / 2);
          const currentY = yStart + easedT * (yEnd - yStart);
          y = -sign * currentY;
          z = zStart + easedT * (zEnd - zStart);
          rot = rotStart + easedT * (rotEnd - rotStart);
        } else {
          const t = Math.min(absOffset - 2, 1);
          const easedT = t * t * (3 - 2 * t);
          const zStart = -60;
          const rotStart = 175;
          const zEnd3 = -250;
          const rotEnd3 = 195;
          const sEnd2 = D / (D - zStart);
          const yEnd2 = (h / 2 - peekAmount) / sEnd2 - (cardH / 2);
          const sEnd3 = D / (D - zEnd3);
          const yEnd3 = (h / 2 + 100) / sEnd3 + (cardH / 2);
          const currentY = yEnd2 + easedT * (yEnd3 - yEnd2);
          y = -sign * currentY;
          z = zStart + easedT * (zEnd3 - zStart);
          rot = rotStart + easedT * (rotEnd3 - rotStart);
        }

        const localCardRotation = -sign * rot;
        const centerFactor = Math.max(0, 1 - absOffset);
        const maxTiltY = 15;
        const maxTiltX = 12;
        const activeTiltX = -mouse.current.y * maxTiltX * centerFactor;
        const activeTiltY = mouse.current.x * maxTiltY * centerFactor;
        const totalRotX = localCardRotation + activeTiltX;
        const totalRotY = activeTiltY;

        card.style.zIndex = Math.round(z).toString();
        card.style.opacity = '1';
        card.style.transform =
          `translateY(${y.toFixed(2)}px) translateZ(${z.toFixed(2)}px) rotateX(${totalRotX.toFixed(2)}deg) rotateY(${totalRotY.toFixed(2)}deg) rotateZ(-3deg)`;
      }
    };

    renderLoop(); // lay the cards out immediately so they're positioned before the first frame
    const tick = () => { renderLoop(); frameId.current = requestAnimationFrame(tick); };
    frameId.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId.current);
  }, [metrics]);

  return (
    <div className="fc-scene">
      <video className="fc-bg-video" src={BG_VIDEO} autoPlay loop muted playsInline preload="auto" />
      <div className="fc-bg-scrim" />

      <div className="fc-perspective" style={{ perspective: '1350px' }}>
        <div className="fc-viewport" style={{ width: metrics.cardW, height: metrics.cardH, transformStyle: 'preserve-3d' }}>
          {FEATURES.map((f, i) => {
            const videoSrc = CARD_VIDEOS[i % CARD_VIDEOS.length];
            return (
              <div
                key={f.key}
                ref={(el) => { cardsRefs.current[i] = el; }}
                className="fc-card"
                onClick={() => go(f.key)}
                style={{ width: metrics.cardW, height: metrics.cardH, transformStyle: 'preserve-3d', backfaceVisibility: 'visible' }}
              >
                {thicknessLayers.map((zOffset, layerIdx) => {
                  const isFront = layerIdx === thicknessLayers.length - 1;
                  const isBack = layerIdx === 0;

                  if (!isFront && !isBack) {
                    return <div key={layerIdx} className="fc-layer fc-layer-mid" style={{ transform: `translateZ(${zOffset}px)` }} />;
                  }

                  if (isFront) {
                    return (
                      <div key={layerIdx} className="fc-face" style={{ transform: `translateZ(${zOffset}px)` }}>
                        <video className="fc-video" src={videoSrc} autoPlay loop muted playsInline />
                        <div className="fc-front-overlay">
                          <div className="fc-chip"><ChipSVG i={i} /></div>
                          <div className="fc-brand">
                            <span className="fc-brand-mark"><ShieldCheck size={11} color="#1a1205" /></span>
                            <span className="fc-brand-name">Pramaan</span>
                          </div>
                          <div className="fc-circles">
                            <span className="fc-circle c1" />
                            <span className="fc-circle c2" />
                          </div>
                          <div className="fc-feature">
                            <div className="fc-feature-pillar">{f.pillar}</div>
                            <div className="fc-feature-name">{f.name}</div>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  // back face
                  return (
                    <div key={layerIdx} className="fc-face" style={{ transform: `translateZ(${zOffset}px) rotateX(180deg)` }}>
                      <div className="fc-back-blur">
                        <video className="fc-video" src={videoSrc} autoPlay loop muted playsInline />
                      </div>
                      <div className="fc-stripe" />
                      <div className="fc-info">
                        <div className="fc-info-name">{f.name}</div>
                        <div className="fc-info-desc">{f.desc}</div>
                        <div className="fc-info-code"><span>{f.code}</span><span className="open">OPEN →</span></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <div className="fc-hint">Each card is a pillar feature · click to open · move your cursor to tilt</div>
    </div>
  );
}
