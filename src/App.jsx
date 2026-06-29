import { useEffect } from 'react';
import { StoreProvider, useStore } from './store';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Copilot from './components/Copilot';
import Landing from './components/landing/Landing';
import CommandCenter from './components/views/CommandCenter';
import SecureDelivery from './components/views/SecureDelivery';
import Evaluation from './components/views/Evaluation';
import StudentPortal from './components/views/StudentPortal';
import SecurityShield from './components/views/SecurityShield';
import AuditLedger from './components/views/AuditLedger';

const VIEWS = {
  command: CommandCenter,
  delivery: SecureDelivery,
  evaluation: Evaluation,
  student: StudentPortal,
  security: SecurityShield,
  ledger: AuditLedger,
};

function Shell() {
  const { state } = useStore();

  // subtle mouse parallax on the animated mesh background — adds depth
  useEffect(() => {
    if (!state.entered) return undefined;
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5).toFixed(3);
      const y = (e.clientY / window.innerHeight - 0.5).toFixed(3);
      document.documentElement.style.setProperty('--mx', x);
      document.documentElement.style.setProperty('--my', y);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [state.entered]);

  if (!state.entered) return <Landing />;
  const View = VIEWS[state.view] || CommandCenter;
  const breaching = state.incident.active && state.incident.stage !== 'contained';

  return (
    <>
      <div className={`app-bg${breaching ? ' breaching' : ''}`} aria-hidden="true">
        <span className="orb orb-a" />
        <span className="orb orb-b" />
        <span className="orb orb-c" />
      </div>
      <div className="app-bg-scrim" />
      <div className="app">
        {breaching && <div className="flag-overlay" />}
        <Sidebar />
        <div className="main">
          <Topbar />
          <div className={`view${state.view === 'command' ? ' bleed' : ''}`}>
            <View />
          </div>
        </div>
        <Copilot />
      </div>
    </>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <Shell />
    </StoreProvider>
  );
}
