import { useStore } from '../../store';
import IndiaMap from '../IndiaMap';
import { EXAM, HEADLINE_STATS } from '../../data/mock';
import {
  ShieldCheck, Clock3, GraduationCap, ShieldX, ArrowRight,
  LockKeyhole, ScanLine, ShieldAlert, ListTree, Activity, Landmark,
} from 'lucide-react';

const STAT_ICONS = { sealed: ShieldCheck, leakwin: Clock3, graded: GraduationCap, threats: ShieldX };

const DEMO = [
  { n: 1, view: 'delivery', title: 'Secure Launch', desc: 'Combine 2-of-3 keys, decrypt the paper on time', icon: LockKeyhole },
  { n: 2, view: 'evaluation', title: 'AI Grading Loop', desc: 'AI reads a script, fills the rubric, teacher adjusts', icon: ScanLine },
  { n: 3, view: 'security', title: 'Simulated Attack', desc: 'An insider tampers with the marks table at 3 AM', icon: ShieldAlert },
  { n: 4, view: 'security', title: 'Automated Isolation', desc: 'SOAR isolates the node — nation keeps running', icon: ShieldX },
];

const TONE_ICON = { ok: ShieldCheck, info: Activity, warn: ShieldAlert, alert: ShieldX };

export default function CommandCenter() {
  const { state, go } = useStore();

  return (
    <div className="grid view-narrow" style={{ gap: 18 }}>
      {/* masthead */}
      <div className="card cc-mast">
        <div className="cc-mast-top">
          <span className="cc-index">01 / National Overview</span>
          <span className="chip"><Landmark size={13} /> {EXAM.body}</span>
        </div>
        <h1 className="cc-mast-title">
          {EXAM.name} — national integrity, <em className="font-serif">secured end to end</em>
        </h1>
        <div className="cc-mast-meta">
          <span><b>{EXAM.candidates.toLocaleString('en-IN')}</b> candidates</span>
          <span className="sep">/</span>
          <span><b>{EXAM.centers.toLocaleString('en-IN')}</b> centres</span>
          <span className="sep">/</span>
          <span><b>{EXAM.cities}</b> cities</span>
          <span className="sep">/</span>
          <span>window <b>{EXAM.window}</b></span>
        </div>
        <div className="cc-mast-actions">
          <button className="btn primary" onClick={() => go('delivery')}>
            Run demo <ArrowRight size={15} />
          </button>
        </div>
        <div className="cc-mast-rule" />
      </div>

      {/* stat row */}
      <div className="grid g4">
        {HEADLINE_STATS.map((s, i) => {
          const Icon = STAT_ICONS[s.key];
          const breached = s.key === 'threats' && state.incident.active;
          return (
            <div className="card stat" key={s.key}>
              <div className="st-top">
                <div className="st-ico"><Icon size={18} color={breached ? 'var(--alert)' : 'var(--saffron)'} /></div>
                {(breached || s.tone === 'ok')
                  ? <span className={`chip ${breached ? 'alert' : 'ok'}`} style={{ fontSize: 10 }}>{breached ? 'active' : 'nominal'}</span>
                  : <span className="st-idx">{String(i + 1).padStart(2, '0')}</span>}
              </div>
              <div className="st-val" style={{ color: breached ? 'var(--alert)' : undefined }}>
                {s.key === 'threats' && state.incident.active && state.incident.stage !== 'contained' ? '1' : s.value}
              </div>
              <div className="st-lbl">{s.label}</div>
              <div className="st-delta" style={{ color: 'var(--verified)' }}>{s.delta}</div>
            </div>
          );
        })}
      </div>

      {/* map + feed */}
      <div className="grid" style={{ gridTemplateColumns: '1.4fr 1fr', gap: 18 }}>
        <div className="card card-pad">
          <div className="between" style={{ marginBottom: 6 }}>
            <div className="sec-title"><span className="ico"><Activity size={17} /></span> National Centre Grid</div>
            {state.incident.active && <span className="chip alert">incident active</span>}
          </div>
          <IndiaMap />
        </div>

        <div className="card card-pad">
          <div className="sec-title" style={{ marginBottom: 10 }}><span className="ico"><Activity size={17} /></span> Integrity Feed</div>
          <div className="feed">
            {state.events.map((e) => {
              const Icon = TONE_ICON[e.tone] || Activity;
              return (
                <div className="feed-item rise" key={e.id}>
                  <div className="feed-ic"><Icon size={15} color={`var(--${e.tone === 'alert' ? 'alert' : e.tone === 'warn' ? 'warn' : e.tone === 'ok' ? 'verified' : 'chakra'})`} /></div>
                  <div className="feed-bd">
                    <div className="feed-msg">{e.msg}</div>
                    <div className="feed-meta"><span>{e.meta}</span></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* demo runner */}
      <div className="card card-pad">
        <div className="between" style={{ marginBottom: 12 }}>
          <div className="sec-title"><span className="ico"><ListTree size={17} /></span> Demo Workflow — what the judges see</div>
          <span className="muted" style={{ fontSize: 12 }}>{state.demoStep}/4 complete</span>
        </div>
        <div className="grid g2">
          {DEMO.map((d) => {
            const Icon = d.icon;
            const done = state.demoStep >= d.n;
            return (
              <div className={`demo-step ${done ? 'done' : ''}`} key={d.n}>
                <div className="num">{done ? '✓' : d.n}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 13.5, display: 'flex', gap: 8, alignItems: 'center' }}>
                    <Icon size={15} color="var(--saffron)" /> {d.title}
                  </div>
                  <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>{d.desc}</div>
                </div>
                <button className="btn sm" onClick={() => go(d.view)}>Go <ArrowRight size={13} /></button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
