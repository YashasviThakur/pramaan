import { useStore } from '../store';
import { EXAM } from '../data/mock';
import { RotateCcw, Clock } from 'lucide-react';

const TITLES = {
  command: ['01', 'Command Center', 'National exam-integrity overview'],
  delivery: ['02', 'Secure Delivery', 'Pillar 1 · Just-in-time encrypted paper unlock'],
  evaluation: ['03', 'AI Evaluation', 'Pillar 1 · AI grading copilot + human-in-the-loop'],
  student: ['04', 'Student Portal', 'Pillar 1 · Transparent re-evaluation'],
  security: ['05', 'Security Shield', 'Pillar 2 · UEBA · CERT-In RAG · SOAR'],
  ledger: ['06', 'Audit Ledger', 'Pillar 3 · Tamper-proof Merkle trail'],
};

export default function Topbar() {
  const { state, actions } = useStore();
  const [idx, title, sub] = TITLES[state.view] || ['00', 'Pramaan', ''];
  const breach = state.incident.active && state.incident.stage !== 'contained';
  return (
    <header className="topbar">
      <div>
        <div className="tb-head">
          <span className="tb-index">{idx}</span>
          <h2>{title}</h2>
        </div>
        <div className="crumb">{sub}</div>
      </div>
      <div className="top-spacer" />
      <div className="tb-live">
        <span className={`dot ${breach ? 'alert' : 'ok'}`} /> {breach ? 'Breach' : 'Secure'}
      </div>
      <div className="statusline">
        <Clock size={14} /> {EXAM.name} · {EXAM.window}
      </div>
      <button className="btn sm ghost" onClick={actions.reset} title="Reset demo">
        <RotateCcw size={14} /> Reset
      </button>
    </header>
  );
}
