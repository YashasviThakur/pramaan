import { useStore } from '../../store';
import { merkleRoot } from '../../lib/crypto';
import {
  ListTree, ShieldCheck, KeyRound, Send, Unlock, GraduationCap,
  ShieldX, Zap, AlertTriangle, Hash,
} from 'lucide-react';

const KIND = {
  key:     { icon: KeyRound,     color: 'var(--chakra)' },
  deliver: { icon: Send,         color: 'var(--chakra)' },
  unlock:  { icon: Unlock,       color: 'var(--green)' },
  grade:   { icon: GraduationCap,color: 'var(--green)' },
  tamper:  { icon: AlertTriangle,color: 'var(--alert)' },
  soar:    { icon: Zap,          color: 'var(--warn)' },
};

export default function AuditLedger() {
  const { state } = useStore();
  const broken = state.ledger.some((l) => !l.ok);
  const root = merkleRoot(state.ledger.map((l) => l.h + l.what));

  return (
    <div className="grid view-narrow" style={{ gap: 18, maxWidth: 920 }}>
      <div className={`banner ${broken ? 'alert' : 'ok'}`}>
        {broken ? <ShieldX size={20} color="var(--alert)" /> : <ShieldCheck size={20} color="var(--verified)" />}
        <div style={{ flex: 1 }}>
          <strong>{broken ? 'Chain integrity: BROKEN' : 'Chain integrity: VERIFIED'}.</strong>{' '}
          {broken
            ? 'A retroactive write was detected — the Merkle hash no longer reconciles, so the tampering is provable and cannot be hidden.'
            : 'Every key release, grade, and security action is hashed into a SHA-256 Merkle tree in permanent ink.'}
        </div>
        <div style={{ textAlign: 'right' }}>
          <div className="label">Merkle root</div>
          <div className="mono" style={{ fontSize: 13, color: broken ? 'var(--alert)' : 'var(--green)', display: 'flex', gap: 5, alignItems: 'center' }}>
            <Hash size={12} /> {root}
          </div>
        </div>
      </div>

      <div className="card card-pad">
        <div className="between" style={{ marginBottom: 14 }}>
          <div className="sec-title"><span className="ico"><ListTree size={17} /></span> Tamper-Proof Event Ledger</div>
          <span className="chip">{state.ledger.length} blocks</span>
        </div>

        <div className="ledger" style={{ position: 'relative' }}>
          {/* spine */}
          <div style={{ position: 'absolute', left: 19, top: 6, bottom: 6, width: 2, background: 'var(--line)' }} />
          {state.ledger.map((l) => {
            const meta = KIND[l.kind] || KIND.key;
            const Icon = meta.icon;
            return (
              <div className={`ledger-row ${!l.ok ? 'broken' : ''}`} key={l.id}>
                <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
                  <div className="lk-node" style={{ background: meta.color, borderColor: 'var(--ink-800)', boxShadow: `0 0 8px ${meta.color}`, marginLeft: 0 }} />
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, display: 'flex', gap: 8, alignItems: 'center' }}>
                    <Icon size={14} color={meta.color} /> {l.what}
                  </div>
                  <div className="faint" style={{ fontSize: 11, marginTop: 2 }}>{l.who} · {l.t}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="lk-hash">{l.h}</div>
                  {l.ok
                    ? <span className="chip ok" style={{ fontSize: 9.5, marginTop: 4 }}><ShieldCheck size={11} /> linked</span>
                    : <span className="chip alert" style={{ fontSize: 9.5, marginTop: 4 }}><AlertTriangle size={11} /> chain break</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {broken && (
        <div className="banner warn rise">
          <ShieldCheck size={20} color="var(--warn)" />
          <div>The attempted mark change is now <strong>permanently visible</strong>. SOAR rollback restores the last Merkle-verified snapshot, and the audit trail proves exactly who did what, when.</div>
        </div>
      )}
    </div>
  );
}
