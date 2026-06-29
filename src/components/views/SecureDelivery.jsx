import { useStore } from '../../store';
import { ENCRYPTED_PAPER, EXAM } from '../../data/mock';
import { combineKeyShares } from '../../lib/crypto';
import {
  LockKeyhole, KeyRound, ShieldCheck, Building2, GraduationCap, Eye, Unlock, FileLock2, ArrowRight,
} from 'lucide-react';

const CUST_ICON = { central: Building2, principal: GraduationCap, observer: Eye };

export default function SecureDelivery() {
  const { state, actions, go } = useStore();
  const released = state.custodians.filter((c) => c.released).length;
  const quorum = released >= 2;

  return (
    <div className="grid view-narrow" style={{ gap: 18 }}>
      <div className="banner warn">
        <FileLock2 size={20} color="var(--warn)" />
        <div>
          <strong>The leak problem:</strong> Question papers are often printed weeks early and held in physical vaults for days — where they can be photographed, copied or stolen before the exam ever starts.
          Pramaan keeps every paper <strong>encrypted until 15 minutes before the exam</strong>, with the key split across three authorities.
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 18 }}>
        {/* custodians */}
        <div className="card card-pad">
          <div className="sec-title" style={{ marginBottom: 4 }}><span className="ico"><KeyRound size={17} /></span> 2-of-3 Key Custodians</div>
          <div className="muted" style={{ fontSize: 12.5, marginBottom: 14 }}>
            Shamir secret-sharing. Any <strong>two</strong> shares reconstruct the AES-256 key — no single person can open the paper alone.
          </div>
          <div className="grid" style={{ gap: 12 }}>
            {state.custodians.map((c) => {
              const Icon = CUST_ICON[c.id];
              return (
                <div className={`keyshare ${c.released ? 'released' : ''}`} key={c.id}>
                  <div className="between">
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                      <div className="st-ico"><Icon size={16} color={c.released ? 'var(--green)' : 'var(--text-dim)'} /></div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 13 }}>{c.role}</div>
                        <div className="faint" style={{ fontSize: 11 }}>{c.holder}</div>
                      </div>
                    </div>
                    {c.released
                      ? <span className="chip ok"><ShieldCheck size={12} /> released</span>
                      : <button className="btn sm" onClick={() => actions.releaseShare(c.id)} disabled={state.unlocked}>Release share</button>}
                  </div>
                  <div className="ks-frag">share = {c.released ? c.frag : '•••• •••• ••••'}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* vault */}
        <div className="card card-pad">
          <div className="sec-title" style={{ marginBottom: 4 }}><span className="ico"><LockKeyhole size={17} /></span> Sealed Question Paper</div>
          <div className="muted" style={{ fontSize: 12.5, marginBottom: 14 }}>
            {EXAM.name} · Paper variant A · pushed to all centres at T-12h, still unreadable.
          </div>

          {!state.unlocked ? (
            <>
              <div className="vault-paper">{ENCRYPTED_PAPER}</div>
              <div className="kv" style={{ marginTop: 14 }}><span className="k">Cipher</span><span className="v">AES-256-GCM</span></div>
              <div className="kv"><span className="k">Key scheme</span><span className="v">Shamir 2-of-3</span></div>
              <div className="kv"><span className="k">Time-lock</span><span className="v">unlock ≥ T-15m</span></div>
              <div className="kv"><span className="k">Shares released</span><span className="v" style={{ color: quorum ? 'var(--green)' : 'var(--warn)' }}>{released} / 3</span></div>
              <button className="btn primary" style={{ width: '100%', marginTop: 16, justifyContent: 'center' }}
                disabled={!quorum} onClick={actions.unlockPaper}>
                <Unlock size={16} /> {quorum ? 'Reconstruct key & decrypt' : 'Need 2 shares to unlock'}
              </button>
            </>
          ) : (
            <div className="rise">
              <div className="banner ok" style={{ marginBottom: 14 }}>
                <ShieldCheck size={20} color="var(--verified)" />
                <div><strong>Decrypted on schedule.</strong> Logged to the Merkle ledger. Leak window for this paper: ~14 minutes.</div>
              </div>
              <div className="script" style={{ background: '#f6f4ec' }}>
                <strong>{EXAM.name} — Paper A · Section II</strong><br />
                <span style={{ fontSize: 12.5 }}>
                  Q14. Explain the mechanism of enzyme action with reference to the lock-and-key and induced-fit models. (5 marks)<br /><br />
                  Q15. Distinguish between mitosis and meiosis with respect to chromosome number and genetic variation. (5 marks)
                </span>
              </div>
              <div className="kv" style={{ marginTop: 14 }}><span className="k">Reconstructed key</span><span className="v" style={{ color: 'var(--green)' }}>{combineKeyShares(state.custodians.filter(c => c.released).map(c => c.frag))}</span></div>
              <button className="btn primary" style={{ width: '100%', marginTop: 14, justifyContent: 'center' }} onClick={() => go('evaluation')}>
                Next: AI grading loop <ArrowRight size={15} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
