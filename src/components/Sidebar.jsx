import { useStore } from '../store';
import { EXAM } from '../data/mock';
import {
  LayoutDashboard, LockKeyhole, ScanLine, GraduationCap,
  ShieldAlert, ListTree, ShieldCheck,
} from 'lucide-react';

const NAV = [
  { group: 'Overview', items: [
    { id: 'command', label: 'Command Center', icon: LayoutDashboard, code: 'CC' },
  ]},
  { group: 'Pillar 1 · Education', items: [
    { id: 'delivery', label: 'Secure Delivery', icon: LockKeyhole, code: 'SD' },
    { id: 'evaluation', label: 'AI Evaluation', icon: ScanLine, code: 'AE' },
    { id: 'student', label: 'Student Portal', icon: GraduationCap, code: 'SP' },
  ]},
  { group: 'Pillar 2 · Security', items: [
    { id: 'security', label: 'Security Shield', icon: ShieldAlert, code: 'SS' },
  ]},
  { group: 'Pillar 3 · Trust', items: [
    { id: 'ledger', label: 'Audit Ledger', icon: ListTree, code: 'AL' },
  ]},
];

export default function Sidebar() {
  const { state, go, home } = useStore();
  const breach = state.incident.active && state.incident.stage !== 'contained';
  return (
    <aside className="sidebar">
      <div className="brand" onClick={home} style={{ cursor: 'pointer' }} title="Back to home">
        <div className="brand-mark">
          <ShieldCheck size={19} color="#fff" />
        </div>
        <div>
          <div className="brand-name">Pramaan</div>
          <div className="brand-sub">EXAM INTEGRITY LAYER</div>
        </div>
      </div>

      {NAV.map((g) => (
        <div className="nav-group" key={g.group}>
          <div className="label">{g.group}</div>
          {g.items.map((it) => {
            const Icon = it.icon;
            const active = state.view === it.id;
            const alert = it.id === 'security' && state.incident.active && state.incident.stage !== 'contained';
            return (
              <div key={it.id} className={`nav-item ${active ? 'active' : ''}`} onClick={() => go(it.id)}>
                <Icon className="nv-ico" size={17} />
                <span>{it.label}</span>
                {alert ? <span className="nav-badge pulse">1</span> : <span className="nav-code">{it.code}</span>}
              </div>
            );
          })}
        </div>
      ))}

      <div className="sys-status">
        <div className="sys-status-head">
          <span className="label">System</span>
          <span className={`dot ${breach ? 'alert' : 'ok'}`} />
        </div>
        <div className="sys-row"><span>Centres</span><span className="v">{EXAM.centers.toLocaleString('en-IN')}</span></div>
        <div className="sys-row"><span>Integrity</span><span className={`v ${breach ? 'alert' : 'ok'}`}>{breach ? 'BREACH' : '100.0%'}</span></div>
        <div className="sys-row"><span>Active threats</span><span className={`v ${breach ? 'alert' : 'ok'}`}>{breach ? '01' : '00'}</span></div>
      </div>

      <div className="sidebar-foot">
        <div className="foot-secure">
          <ShieldCheck size={13} /> End-to-end secured
        </div>
        <div className="faint" style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, letterSpacing: '.08em', textAlign: 'center', marginTop: 8 }}>
          {EXAM.name} · DEMO BUILD
        </div>
      </div>
    </aside>
  );
}
