import { useStore } from '../../store';
import { ACCOUNTS, ATTACK_FACTORS, ADVISORIES, PLAYBOOK } from '../../data/mock';
import {
  ShieldAlert, Activity, Bug, ShieldCheck, Zap, FileWarning, Lock,
  UserX, ServerCrash, AlertTriangle, Check,
} from 'lucide-react';

function ScoreBar({ value }) {
  const color = value >= 70 ? 'var(--alert)' : value >= 30 ? 'var(--warn)' : 'var(--green)';
  return (
    <div className="bar-track" style={{ flex: 1 }}>
      <div className="bar-fill" style={{ width: `${value}%`, background: color }} />
    </div>
  );
}

export default function SecurityShield() {
  const { state, actions } = useStore();
  const attacking = state.incident.active;
  const contained = state.incident.stage === 'contained';
  const steps = state.incident.steps;
  const gateStep = PLAYBOOK.find((p) => p.mode === 'gate');
  const autoDone = PLAYBOOK.filter((p) => p.mode === 'auto').every((p) => steps[p.id]);

  return (
    <div className="grid view-narrow" style={{ gap: 18 }}>
      {/* trigger / status banner */}
      {!attacking ? (
        <div className="banner warn">
          <ShieldAlert size={20} color="var(--warn)" />
          <div style={{ flex: 1 }}>
            <strong>Pillar 2 · The AI Security Shield.</strong> Every examiner & admin is behaviourally baselined. Trigger the red-team test to simulate a corrupt insider altering marks at 3 AM.
          </div>
          <button className="btn danger" onClick={actions.triggerAttack}><Bug size={15} /> Simulate insider attack</button>
        </div>
      ) : !contained ? (
        <div className="banner alert">
          <AlertTriangle size={20} color="var(--alert)" className="pulse" />
          <div style={{ flex: 1 }}>
            <strong>ACTIVE BREACH — admin-007 @ centre BR-1142.</strong> Direct marks-table write at 03:07 IST from a Dubai IP. No malware signature — caught by behaviour.
          </div>
          <button className="btn danger" onClick={actions.contain}><Zap size={15} /> Execute containment (PB-07)</button>
        </div>
      ) : (
        <div className="banner ok">
          <ShieldCheck size={20} color="var(--verified)" />
          <div><strong>Threat contained in 4.2s.</strong> BR-1142 isolated · session revoked · keys frozen. The other 4,749 centres ran uninterrupted — no re-exam needed.</div>
        </div>
      )}

      <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 18 }}>
        {/* UEBA */}
        <div className="card card-pad">
          <div className="sec-title" style={{ marginBottom: 12 }}><span className="ico"><Activity size={17} /></span> Insider Threat Analytics (UEBA)</div>

          {/* the attacked account */}
          <div className={`anomaly-card ${attacking ? 'flagged' : ''}`} style={{ marginBottom: 12 }}>
            <div className="between" style={{ marginBottom: attacking ? 12 : 0 }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <div className="st-ico"><UserX size={16} color={attacking ? 'var(--alert)' : 'var(--text-dim)'} /></div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 13 }}>admin-007 · D. Kumar</div>
                  <div className="faint" style={{ fontSize: 11 }}>key-ops · Ranchi · baseline 09:00–18:00</div>
                </div>
              </div>
              {attacking
                ? <span className="chip alert"><AlertTriangle size={12} /> anomaly 94</span>
                : <span className="chip ok">score 12 · normal</span>}
            </div>
            {attacking && (
              <div className="grid" style={{ gap: 8 }}>
                {ATTACK_FACTORS.map((f) => (
                  <div key={f.k} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: 11.5, width: 92, color: 'var(--text-dim)' }}>{f.k}</span>
                    <ScoreBar value={f.s} />
                    <span className="mono" style={{ fontSize: 10.5, width: 130, textAlign: 'right', color: 'var(--alert)' }}>{f.v}</span>
                  </div>
                ))}
                <div className="faint" style={{ fontSize: 11, marginTop: 4 }}>
                  Explainability: flagged on a <strong>90%+ variance</strong> in login hour, geo, export volume & a direct DB write — not a known signature.
                </div>
              </div>
            )}
          </div>

          {/* other normal accounts */}
          {ACCOUNTS.slice(0, 2).map((a) => (
            <div className="anomaly-card" key={a.id} style={{ marginBottom: 10 }}>
              <div className="between">
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <div className="st-ico"><Activity size={15} color="var(--green)" /></div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 12.5 }}>{a.name}</div>
                    <div className="faint" style={{ fontSize: 10.5 }}>{a.baseline}</div>
                  </div>
                </div>
                <span className="chip ok">score {a.score}</span>
              </div>
            </div>
          ))}
        </div>

        {/* RAG + SOAR */}
        <div className="grid" style={{ gap: 18 }}>
          {/* CERT-In RAG */}
          <div className="card card-pad">
            <div className="sec-title" style={{ marginBottom: 10 }}><span className="ico"><FileWarning size={17} color="var(--chakra)" /></span> CERT-In Threat Intelligence (RAG)</div>
            {!attacking ? (
              <div className="muted" style={{ fontSize: 12.5 }}>Indexed against the national CERT-In advisory corpus. When an event fires, the AI matches the log pattern to the corpus and explains it in plain language.</div>
            ) : (
              <div className="grid" style={{ gap: 8 }}>
                {ADVISORIES.map((ad) => (
                  <div key={ad.id} className="rubric-item" style={{ borderColor: ad.match > 0.95 ? 'rgba(240,89,110,.4)' : 'var(--line)' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 12.3, fontWeight: 500 }}>{ad.title}</div>
                      <div className="faint mono" style={{ fontSize: 10.5, marginTop: 2 }}>{ad.id} · severity {ad.sev}</div>
                    </div>
                    <span className={`chip ${ad.match > 0.95 ? 'alert' : 'info'}`} style={{ fontSize: 10 }}>{Math.round(ad.match * 100)}% match</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* SOAR */}
          <div className="card card-pad">
            <div className="sec-title" style={{ marginBottom: 12 }}><span className="ico"><Zap size={17} /></span> SOAR Containment · PB-07</div>
            <div className="timeline">
              {PLAYBOOK.map((p, i) => {
                const done = steps[p.id];
                const isGate = p.mode === 'gate';
                return (
                  <div className={`tl-step ${done ? 'done' : ''}`} key={p.id}>
                    <div className={`tl-bullet ${done ? 'done' : isGate ? 'gate' : ''}`}>
                      {done ? <Check size={13} /> : isGate ? <Lock size={11} /> : i + 1}
                    </div>
                    <div>
                      <div style={{ fontSize: 12.8, fontWeight: 600, display: 'flex', gap: 8, alignItems: 'center' }}>
                        {p.title}
                        {isGate && !done && <span className="chip warn" style={{ fontSize: 9.5 }}>human gate</span>}
                        {!isGate && <span className="chip" style={{ fontSize: 9.5 }}>auto</span>}
                      </div>
                      <div className="faint" style={{ fontSize: 11, marginTop: 2 }}>{p.detail}</div>
                      {isGate && attacking && !done && (
                        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                          <button className="btn success sm" onClick={() => actions.runPlaybookStep(p.id)}><Check size={12} /> Approve rollback</button>
                          <button className="btn sm">Hold</button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            {attacking && !contained && (
              <button className="btn primary" style={{ width: '100%', marginTop: 8, justifyContent: 'center' }} onClick={actions.contain}>
                <Zap size={15} /> Run all auto steps & contain
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
