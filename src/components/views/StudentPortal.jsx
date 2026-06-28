import { useState } from 'react';
import { useStore } from '../../store';
import { SCRIPT } from '../../data/mock';
import {
  GraduationCap, ShieldCheck, FileText, Flag, EyeOff, Sparkles, Check, Hash,
} from 'lucide-react';
import { shortHash } from '../../lib/crypto';

export default function StudentPortal() {
  const { state } = useStore();
  const [disputed, setDisputed] = useState(false);
  const final = state.approved ? state.finalScore : SCRIPT.aiScore;

  return (
    <div className="grid view-narrow" style={{ gap: 18, maxWidth: 920 }}>
      <div className="banner ok">
        <GraduationCap size={20} color="var(--verified)" />
        <div><strong>Result day — total transparency.</strong> The student sees their own scanned script, the marks, and the AI's notes. Disagree? One click routes that question to a senior examiner for a blind re-check — minutes, not months.</div>
      </div>

      <div className="card card-pad">
        {/* student header */}
        <div className="between" style={{ borderBottom: '1px solid var(--line-soft)', paddingBottom: 14, marginBottom: 16 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <div className="brand-mark" style={{ width: 42, height: 42 }}><GraduationCap size={19} color="#fff" /></div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 15 }}>Aarav Kumar</div>
              <div className="faint" style={{ fontSize: 12 }}>{SCRIPT.candidate} · NEET-UG 2026</div>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span className="chip ok"><ShieldCheck size={12} /> paper authenticity verified</span>
            <div className="lk-hash" style={{ marginTop: 6, display: 'flex', gap: 5, justifyContent: 'flex-end', alignItems: 'center' }}>
              <Hash size={11} /> {shortHash('paperA-2406A-11827')}
            </div>
          </div>
        </div>

        {/* the question */}
        <div className="between" style={{ marginBottom: 10 }}>
          <div className="sec-title"><span className="ico"><FileText size={16} /></span> Q14 · Enzyme action</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span className="muted" style={{ fontSize: 12 }}>your marks</span>
            <span className="score-ring" style={{ fontSize: 20 }}>{final}<span className="faint" style={{ fontSize: 12 }}>/5</span></span>
          </div>
        </div>

        <div className="script">
          {SCRIPT.answer.map((seg, i) => {
            const r = SCRIPT.rubric.find((x) => x.id === seg.r);
            if (seg.r && r?.hit) return <span key={i} className="hl">{seg.t}</span>;
            return <span key={i}>{seg.t}</span>;
          })}
        </div>

        {/* per-question transparency: marks + AI note + dispute */}
        <div className="grid g2" style={{ marginTop: 16, gap: 14 }}>
          <div className="card" style={{ background: 'var(--ink-780)', padding: 14 }}>
            <div className="label" style={{ marginBottom: 8 }}>How marks were awarded</div>
            <div className="grid" style={{ gap: 6 }}>
              {SCRIPT.rubric.map((r) => (
                <div key={r.id} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12.5 }}>
                  <span className={`rubric-check ${r.hit ? 'hit' : 'miss'}`} style={{ width: 17, height: 17 }}>
                    {r.hit ? <Check size={11} color="#04130d" /> : <span style={{ color: 'var(--alert)', fontSize: 11 }}>—</span>}
                  </span>
                  <span style={{ flex: 1, color: r.hit ? 'var(--text)' : 'var(--text-mute)' }}>{r.text}</span>
                  <span className="faint">{r.hit ? `+${r.points}` : '0'}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ background: 'var(--ink-780)', padding: 14, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: 8, fontSize: 11, color: 'var(--chakra)', fontWeight: 600, marginBottom: 6 }}>
              <Sparkles size={13} /> WHY THIS SCORE
            </div>
            <div className="muted" style={{ fontSize: 12.3, lineHeight: 1.55, flex: 1 }}>{SCRIPT.aiNote}</div>

            {!disputed ? (
              <button className="btn danger" style={{ marginTop: 12, justifyContent: 'center' }} onClick={() => setDisputed(true)}>
                <Flag size={14} /> Dispute this question
              </button>
            ) : (
              <div className="banner ok rise" style={{ marginTop: 12, padding: '10px 12px' }}>
                <EyeOff size={18} color="var(--verified)" />
                <div style={{ fontSize: 12 }}>
                  <strong>Sent for blind re-check.</strong> Your identity ({SCRIPT.candidate}) was stripped; only the anonymised answer + rubric went to a senior examiner. Ticket <span className="mono">RC-{shortHash('dispute-q14').toUpperCase()}</span>.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid g3">
        {[
          { t: 'Months → minutes', d: 'No paperwork, no waiting for re-evaluation' },
          { t: 'Blind & fair', d: 'Identity stripped before senior review' },
          { t: 'Provable', d: 'Every mark + change chained to the Merkle ledger' },
        ].map((x) => (
          <div className="card card-pad" key={x.t}>
            <div style={{ fontWeight: 700, fontSize: 13.5, marginBottom: 4 }}>{x.t}</div>
            <div className="muted" style={{ fontSize: 12 }}>{x.d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
