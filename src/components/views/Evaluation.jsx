import { useState } from 'react';
import { useStore } from '../../store';
import { SCRIPT } from '../../data/mock';
import {
  ScanLine, Sparkles, Check, X, UserCheck, ArrowRight, Pencil, FileText,
} from 'lucide-react';

export default function Evaluation() {
  const { state, actions, go } = useStore();
  const [score, setScore] = useState(SCRIPT.aiScore);
  const graded = state.graded;

  return (
    <div className="grid view-narrow" style={{ gap: 18 }}>
      <div className="banner warn">
        <UserCheck size={20} color="var(--warn)" />
        <div><strong>AI assists, humans decide.</strong> The Copilot reads the script and pre-fills the rubric with an explanation. The examiner approves in one click or overrides — cutting grading time ~70% while keeping a person accountable.</div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: '1.15fr 1fr', gap: 18 }}>
        {/* scanned script */}
        <div className="card card-pad">
          <div className="between" style={{ marginBottom: 12 }}>
            <div className="sec-title"><span className="ico"><FileText size={17} /></span> Scanned Answer Script</div>
            <span className="chip">{SCRIPT.candidate}</span>
          </div>
          <div className="muted" style={{ fontSize: 12.5, marginBottom: 10 }}>{SCRIPT.question}</div>
          <div className="script">
            {SCRIPT.answer.map((seg, i) => {
              const r = SCRIPT.rubric.find((x) => x.id === seg.r);
              if (graded && seg.r && r?.hit) return <span key={i} className="hl" title={r.text}>{seg.t}</span>;
              return <span key={i}>{seg.t}</span>;
            })}
            {graded && (
              <span className="hl miss" style={{ display: 'inline-block', marginTop: 8, padding: '2px 6px' }} title="Missing: effect of temperature / pH">
                ⚠ no mention of temperature / pH effect
              </span>
            )}
          </div>
          {graded && (
            <div className="faint" style={{ fontSize: 11.5, marginTop: 10, display: 'flex', gap: 14 }}>
              <span><span className="hl" style={{ padding: '0 5px' }}>green</span> = rubric point satisfied</span>
              <span><span className="hl miss" style={{ padding: '0 5px' }}>red</span> = missing</span>
            </div>
          )}
        </div>

        {/* rubric + AI */}
        <div className="card card-pad">
          <div className="between" style={{ marginBottom: 12 }}>
            <div className="sec-title"><span className="ico"><Sparkles size={17} color="var(--chakra)" /></span> AI Rubric Analysis</div>
            {!graded
              ? <button className="btn primary sm" onClick={actions.runGrading}><ScanLine size={14} /> Analyze</button>
              : <span className="chip info"><Sparkles size={12} /> {SCRIPT.aiScore}/{SCRIPT.maxScore} recommended</span>}
          </div>

          {!graded ? (
            <div className="muted" style={{ fontSize: 13, padding: '30px 10px', textAlign: 'center' }}>
              <ScanLine size={30} color="var(--text-mute)" style={{ marginBottom: 10 }} /><br />
              Click <strong>Analyze</strong> to let the AI read this handwriting and map it to the rubric.
            </div>
          ) : (
            <div className="rise">
              <div className="grid" style={{ gap: 8 }}>
                {SCRIPT.rubric.map((r) => (
                  <div className={`rubric-item ${r.hit ? 'hit' : 'miss'}`} key={r.id}>
                    <div className={`rubric-check ${r.hit ? 'hit' : 'miss'}`}>
                      {r.hit ? <Check size={13} color="#04130d" /> : <X size={13} color="var(--alert)" />}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 12.8 }}>{r.text}</div>
                      <div className="faint" style={{ fontSize: 11, marginTop: 2 }}>
                        {r.points} mark · {r.hit ? 'found in script' : 'not addressed'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card" style={{ background: 'var(--ink-780)', padding: 13, marginTop: 14, borderColor: 'rgba(91,141,239,.25)' }}>
                <div style={{ display: 'flex', gap: 8, fontSize: 11, color: 'var(--chakra)', fontWeight: 600, marginBottom: 6 }}>
                  <Sparkles size={13} /> AI EXPLANATION
                </div>
                <div className="muted" style={{ fontSize: 12.5, lineHeight: 1.55 }}>{SCRIPT.aiNote}</div>
              </div>

              {/* human in the loop */}
              <div style={{ marginTop: 16 }}>
                <div className="label" style={{ marginBottom: 8 }}>Examiner decision (final marks)</div>
                {!state.approved ? (
                  <>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                      <Pencil size={15} color="var(--text-dim)" />
                      <input type="range" min="0" max="5" value={score} onChange={(e) => setScore(+e.target.value)} style={{ flex: 1, accentColor: 'var(--saffron)' }} />
                      <span className="score-ring" style={{ fontSize: 22, minWidth: 56, textAlign: 'right' }}>{score}<span className="faint" style={{ fontSize: 13 }}>/5</span></span>
                    </div>
                    <div style={{ display: 'flex', gap: 10 }}>
                      <button className="btn success" style={{ flex: 1, justifyContent: 'center' }} onClick={() => actions.approveScore(SCRIPT.aiScore)}>
                        <Check size={15} /> Approve AI score (4/5)
                      </button>
                      <button className="btn" style={{ justifyContent: 'center' }} onClick={() => actions.approveScore(score)}>
                        <UserCheck size={15} /> Submit {score}/5
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="banner ok rise">
                    <UserCheck size={20} color="var(--verified)" />
                    <div style={{ flex: 1 }}>
                      <strong>Final score {state.finalScore}/5 approved</strong> by examiner · chained to ledger.
                    </div>
                    <button className="btn sm" onClick={() => go('security')}>Next <ArrowRight size={13} /></button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
