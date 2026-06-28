import { useState, useRef, useEffect } from 'react';
import { useStore } from '../store';
import { Sparkles, X, Send, FileText } from 'lucide-react';

const SUGGEST = ['How does JIT delivery stop leaks?', 'Why was admin-007 flagged?', 'How does dispute work?'];

export default function Copilot() {
  const { state, copilot } = useStore();
  const [q, setQ] = useState('');
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [state.copilotMsgs, state.copilotTyping]);

  const submit = (text) => {
    const t = (text ?? q).trim();
    if (!t) return;
    copilot.ask(t);
    setQ('');
  };

  return (
    <>
      {!state.copilotOpen && (
        <button className="cp-fab" onClick={() => copilot.toggle(true)} title="Open Pramaan Copilot">
          <Sparkles size={22} />
        </button>
      )}
      <div className={`copilot ${state.copilotOpen ? 'open' : ''}`}>
        <div className="copilot-head">
          <div style={{ width: 30, height: 30, borderRadius: 9, display: 'grid', placeItems: 'center',
            background: 'linear-gradient(140deg,var(--chakra),var(--chakra-d))' }}>
            <Sparkles size={17} color="#fff" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 14 }}>Pramaan Copilot</div>
            <div className="faint" style={{ fontSize: 10.5 }}>AI integrity analyst · explainable</div>
          </div>
          <button className="btn sm ghost" onClick={() => copilot.toggle(false)}><X size={15} /></button>
        </div>

        <div className="copilot-body" ref={bodyRef}>
          {state.copilotMsgs.map((m) => (
            <div key={m.id} className={`msg ${m.role}`}>
              <div className="av">{m.role === 'ai' ? <Sparkles size={15} /> : <span style={{ fontSize: 11, fontWeight: 700 }}>You</span>}</div>
              <div className="bubble">
                {m.text}
                {m.cite && <div className="cite"><FileText size={11} /> {m.cite}</div>}
              </div>
            </div>
          ))}
          {state.copilotTyping && (
            <div className="msg ai">
              <div className="av"><Sparkles size={15} /></div>
              <div className="bubble typing"><span /><span /><span /></div>
            </div>
          )}
        </div>

        <div className="copilot-foot">
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 10 }}>
            {SUGGEST.map((s) => (
              <button key={s} className="chip" style={{ cursor: 'pointer' }} onClick={() => submit(s)}>{s}</button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <input
              value={q} onChange={(e) => setQ(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && submit()}
              placeholder="Ask the Copilot…"
              style={{ flex: 1, background: 'var(--ink-900)', border: '1px solid var(--line)',
                borderRadius: 10, padding: '10px 12px', color: 'var(--text)', fontSize: 13, outline: 'none', fontFamily: 'inherit' }}
            />
            <button className="btn primary" onClick={() => submit()}><Send size={15} /></button>
          </div>
        </div>
      </div>
    </>
  );
}
