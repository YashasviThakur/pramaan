import { useStore } from '../store';
import { EXAM } from '../data/mock';
import { Radio, RotateCcw, Clock } from 'lucide-react';

const TITLES = {
  command: ['Command Center', 'National exam-integrity overview'],
  delivery: ['Secure Delivery', 'Pillar 1 · Just-in-time encrypted paper unlock'],
  evaluation: ['AI Evaluation', 'Pillar 1 · AI grading copilot + human-in-the-loop'],
  student: ['Student Portal', 'Pillar 1 · Transparent re-evaluation'],
  security: ['Security Shield', 'Pillar 2 · UEBA · CERT-In RAG · SOAR'],
  ledger: ['Audit Ledger', 'Pillar 3 · Tamper-proof Merkle trail'],
};

export default function Topbar() {
  const { state, actions } = useStore();
  const [title, sub] = TITLES[state.view] || ['Pramaan', ''];
  return (
    <header className="topbar">
      <div>
        <h2>{title}</h2>
        <div className="crumb">{sub}</div>
      </div>
      <div className="top-spacer" />
      <div className="statusline">
        <Clock size={14} /> {EXAM.name} · {EXAM.window}
      </div>
      <div className="statusline">
        <span className="dot ok pulse" /> LIVE
      </div>
      <button className="btn sm ghost" onClick={actions.reset} title="Reset demo">
        <RotateCcw size={14} /> Reset
      </button>
    </header>
  );
}
