import { useStore } from '../store';
import {
  LayoutDashboard, LockKeyhole, ScanLine, GraduationCap,
  ShieldAlert, ListTree, ShieldCheck,
} from 'lucide-react';

const NAV = [
  { group: 'Overview', items: [
    { id: 'command', label: 'Command Center', icon: LayoutDashboard },
  ]},
  { group: 'Pillar 1 · Education', items: [
    { id: 'delivery', label: 'Secure Delivery', icon: LockKeyhole },
    { id: 'evaluation', label: 'AI Evaluation', icon: ScanLine },
    { id: 'student', label: 'Student Portal', icon: GraduationCap },
  ]},
  { group: 'Pillar 2 · Security', items: [
    { id: 'security', label: 'Security Shield', icon: ShieldAlert },
  ]},
  { group: 'Pillar 3 · Trust', items: [
    { id: 'ledger', label: 'Audit Ledger', icon: ListTree },
  ]},
];

export default function Sidebar() {
  const { state, go } = useStore();
  return (
    <aside className="sidebar">
      <div className="brand">
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
                <Icon className="nv-ico" size={18} />
                <span>{it.label}</span>
                {alert && <span className="nav-badge pulse">1</span>}
              </div>
            );
          })}
        </div>
      ))}

      <div className="sidebar-foot">
        <div className="chip ok" style={{ width: '100%', justifyContent: 'center' }}>
          <span className="dot ok pulse" /> System nominal
        </div>
        <div className="faint" style={{ fontSize: 10.5, textAlign: 'center', marginTop: 8 }}>
          NEET-UG 2026 · NTA · demo build
        </div>
      </div>
    </aside>
  );
}
