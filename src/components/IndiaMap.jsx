import { CENTERS, INDIA_PATH } from '../data/mock';
import { useStore } from '../store';

// Build a national grid mesh: link each centre to its k nearest neighbours
// (undirected, de-duped). The dense northern cluster naturally gets more links.
const MESH_EDGES = (() => {
  const k = 3;
  const seen = new Set();
  const edges = [];
  CENTERS.forEach((a) => {
    CENTERS
      .filter((b) => b.id !== a.id)
      .map((b) => ({ b, d: Math.hypot(a.x - b.x, a.y - b.y) }))
      .sort((p, q) => p.d - q.d)
      .slice(0, k)
      .forEach(({ b }) => {
        const key = [a.id, b.id].sort().join('-');
        if (!seen.has(key)) { seen.add(key); edges.push([a, b]); }
      });
  });
  return edges;
})();

export default function IndiaMap() {
  const { state } = useStore();
  const breached = state.incident.active ? 'BR-1142' : null;
  const contained = state.incident.stage === 'contained';

  const hub = CENTERS.find((c) => c.id === 'DL-014');
  const breachCity = (CENTERS.find((c) => c.id === breached) || {}).city;

  return (
    <div className="map-wrap">
      <svg viewBox="0 0 500 542" width="100%" height="100%" style={{ display: 'block' }}>
        <defs>
          <radialGradient id="mapGlow" cx="42%" cy="42%" r="62%">
            <stop offset="0%" stopColor="rgba(228,224,203,0.10)" />
            <stop offset="100%" stopColor="rgba(228,224,203,0)" />
          </radialGradient>
          <linearGradient id="mapFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(228,224,203,0.07)" />
            <stop offset="100%" stopColor="rgba(118,211,161,0.05)" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="500" height="542" fill="url(#mapGlow)" />
        <path d={INDIA_PATH} fill="url(#mapFill)" stroke="rgba(228,224,203,0.34)" strokeWidth="1.1"
          strokeLinejoin="round" />

        {/* national grid mesh — nearest-neighbour links between centres */}
        {MESH_EDGES.map(([a, b]) => (
          <line key={`m${a.id}-${b.id}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y}
            stroke="rgba(228,224,203,0.075)" strokeWidth="0.5" />
        ))}

        {/* brighter spokes from the Delhi command hub */}
        {CENTERS.filter((c) => c.id !== 'DL-014').map((c) => (
          <line key={'l' + c.id} x1={hub.x} y1={hub.y} x2={c.x} y2={c.y}
            stroke="rgba(228,224,203,0.12)" strokeWidth="0.6" />
        ))}

        {CENTERS.map((c) => {
          const isBreach = c.id === breached;
          const color = isBreach ? '#ef6f86' : '#76d3a1';
          return (
            <g key={c.id} className="map-node">
              {/* pulsing ring — centered on the node via CSS transform-box:fill-box */}
              <circle className="node-ring" cx={c.x} cy={c.y} r="6" fill="none" stroke={color}
                strokeWidth="1.2" opacity="0.6"
                style={{ animation: `ringExpand ${isBreach ? 1 : 2.4}s ease-out infinite` }} />
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
          <span className="dot alert pulse" /> Centre BR-1142 · {breachCity} — breach {contained ? 'contained' : 'in progress'}
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
