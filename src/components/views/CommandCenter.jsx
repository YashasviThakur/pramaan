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
      {/* hero strip */}
      <div className="card card-pad between" style={{ background: 'linear-gradient(110deg, rgba(24,24,24,.60), rgba(8,8,8,.68) 60%)' }}>
        <div>
          <div className="chip" style={{ marginBottom: 10 }}><Landmark size={13} /> {EXAM.body}</div>
          <h1 style={{ fontSize: 24, marginBottom: 4 }}>{EXAM.name} — national integrity, secured end-to-end</h1>
          <div className="muted" style={{ fontSize: 13.5 }}>
            {EXAM.candidates.toLocaleString('en-IN')} candidates · {EXAM.centers.toLocaleString('en-IN')} centres · {EXAM.cities} cities · exam window {EXAM.window}
          </div>
        </div>
        <button className="btn primary" onClick={() => go('delivery')}>
          Run demo <ArrowRight size={15} />
        </button>
      </div>

      {/* stat row */}
      <div className="grid g4">
        {HEADLINE_STATS.map((s) => {
          const Icon = STAT_ICONS[s.key];
          const breached = s.key === 'threats' && state.incident.active;
          return (
            <div className="card stat" key={s.key}>
              <div className="st-top">
                <div className="st-ico"><Icon size={18} color={breached ? 'var(--alert)' : 'var(--saffron)'} /></div>
                {(breached || s.tone === 'ok') && (
                  <span className={`chip ${breached ? 'alert' : 'ok'}`} style={{ fontSize: 10 }}>
                    {breached ? 'active' : 'nominal'}
                  </span>
                )}
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
