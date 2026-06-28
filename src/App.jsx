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

// same cinematic clip as the landing background, for a unified look
const BG_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4';

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
  if (!state.entered) return <Landing />;
  const View = VIEWS[state.view] || CommandCenter;
  const breaching = state.incident.active && state.incident.stage !== 'contained';

  return (
    <>
      <video
        className="app-bg-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        src={BG_VIDEO}
      />
      <div className="app-bg-scrim" />
      <div className="app">
        {breaching && <div className="flag-overlay" />}
        <Sidebar />
        <div className="main">
          <Topbar />
          <div className="view">
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
