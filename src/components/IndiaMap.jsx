import { CENTERS, INDIA_PATH } from '../data/mock';
import { useStore } from '../store';

export default function IndiaMap() {
  const { state } = useStore();
  const breached = state.incident.active ? 'BR-1142' : null;
  const contained = state.incident.stage === 'contained';

  const hub = CENTERS.find((c) => c.id === 'DL-014');

  return (
    <div className="map-wrap">
      <svg viewBox="0 0 500 511" width="100%" height="100%" style={{ display: 'block' }}>
        <defs>
          <radialGradient id="mapGlow" cx="46%" cy="40%" r="62%">
            <stop offset="0%" stopColor="rgba(228,224,203,0.10)" />
            <stop offset="100%" stopColor="rgba(228,224,203,0)" />
          </radialGradient>
          <linearGradient id="mapFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(228,224,203,0.07)" />
            <stop offset="100%" stopColor="rgba(118,211,161,0.05)" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="500" height="511" fill="url(#mapGlow)" />
        <path d={INDIA_PATH} fill="url(#mapFill)" stroke="rgba(228,224,203,0.34)" strokeWidth="1.1"
          strokeLinejoin="round" />

        {/* faint links from the Delhi hub */}
        {CENTERS.filter((c) => c.id !== 'DL-014').map((c) => (
          <line key={'l' + c.id} x1={hub.x} y1={hub.y} x2={c.x} y2={c.y}
            stroke="rgba(228,224,203,0.10)" strokeWidth="0.6" />
        ))}

        {CENTERS.map((c) => {
          const isBreach = c.id === breached;
          const color = isBreach ? '#ef6f86' : '#76d3a1';
          return (
            <g key={c.id} className="map-node">
              {/* pulsing ring */}
              <circle className="node-ring" cx={c.x} cy={c.y} r="6" fill="none" stroke={color}
                strokeWidth="1.2" opacity="0.6"
                style={{ animation: `ringExpand ${isBreach ? 1 : 2.4}s ease-out infinite`, transformOrigin: `${c.x}px ${c.y}px` }} />
              <circle cx={c.x} cy={c.y} r="3.2" fill={color}
                style={{ filter: `drop-shadow(0 0 5px ${color})` }} />
              {(['DL-014', 'PT-009', 'MU-003', 'BN-007', 'KO-052', 'CH-015'].includes(c.id) || isBreach) && (
                <text x={c.x + 7} y={c.y + 3} fontSize="8.5"
                  fill={isBreach ? '#f2899c' : 'rgba(233,230,212,0.62)'}
                  fontFamily="'JetBrains Mono', monospace" letterSpacing="0.02em"
                  fontWeight={isBreach ? 700 : 500}>
                  {c.city}{isBreach ? ' ⚠' : ''}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {breached && (
        <div style={{ position: 'absolute', left: 16, bottom: 14 }} className="chip alert rise">
          <span className="dot alert pulse" /> Centre BR-1142 · Hazaribagh — breach {contained ? 'contained' : 'in progress'}
        </div>
      )}
      {!breached && (
        <div style={{ position: 'absolute', left: 16, bottom: 14 }} className="chip ok">
          <span className="dot ok" /> {CENTERS.length} representative centres · all nominal
        </div>
      )}
    </div>
  );
}
