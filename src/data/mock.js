// ============================================================
// PRAMAAN — seed data for the exam-integrity platform
// ============================================================

export const EXAM = {
  name: 'NEET-UG 2026',
  body: 'National Testing Agency',
  date: '03 May 2026',
  window: '14:00 – 17:20 IST',
  candidates: 2407589,
  centers: 4750,
  cities: 571,
};

// Exam centers plotted on a geographically accurate India map (viewBox 0 0 500 511).
// x,y are projected from each city's real lat/long with the same transform as INDIA_PATH
// (equirectangular, aspect-corrected at 23°N) — so the markers sit at true geographic positions.
export const CENTERS = [
  { id: 'DL-014', city: 'New Delhi',  x: 163.7, y: 139.7, status: 'ok' },
  { id: 'JP-021', city: 'Jaipur',     x: 141.7, y: 168.2, status: 'ok' },
  { id: 'LK-033', city: 'Lucknow',    x: 221.5, y: 169.2, status: 'ok' },
  { id: 'PT-009', city: 'Patna',      x: 286.4, y: 190.4, status: 'ok' },
  { id: 'BR-1142',city: 'Hazaribagh', x: 289.8, y: 217.3, status: 'ok' }, // the leak source in the demo
  { id: 'KO-052', city: 'Kolkata',    x: 336.2, y: 241.1, status: 'ok' },
  { id: 'GW-061', city: 'Guwahati',   x: 388.4, y: 181.2, status: 'ok' },
  { id: 'AH-044', city: 'Ahmedabad',  x: 92.1,  y: 233.4, status: 'ok' },
  { id: 'BP-027', city: 'Bhopal',     x: 166.8, y: 229.5, status: 'ok' },
  { id: 'MU-003', city: 'Mumbai',     x: 96.7,  y: 299.8, status: 'ok' },
  { id: 'HY-018', city: 'Hyderabad',  x: 183.5, y: 328.2, status: 'ok' },
  { id: 'BN-007', city: 'Bengaluru',  x: 169.6, y: 402.4, status: 'ok' },
  { id: 'CH-015', city: 'Chennai',    x: 211.0, y: 400.6, status: 'ok' },
  { id: 'KC-029', city: 'Kochi',      x: 149.2, y: 453.5, status: 'ok' },
];

// Geographically accurate India outline (Natural Earth, mainland), viewBox 0 0 500 511
export const INDIA_PATH = `M173.4,24 L190,43.7 L188.5,57.4 L194.6,66 L194.1,74.6 L183,72.3 L187.4,90.8 L202.5,101.5 L224,113.2 L214.2,120.8 L208.2,136.6 L223.2,142.9 L237.8,151.2 L258,160.6 L279.2,162.8 L288.1,171.3 L300,172.9 L318.6,176.8 L331.5,176.5 L333.3,169.9 L331.2,159.2 L332.4,152 L341.9,148.5 L343.2,161.7 L343.5,165 L357.6,171.4 L367.3,168.8 L380.3,169.9 L393,169.4 L394,159.1 L387.8,153.7 L400.2,151.6 L414.3,139.1 L432.1,128.4 L445.1,132.6 L456.1,125.5 L463.4,135.9 L458.2,143 L474.8,145.5 L476,151.9 L470.6,155 L471.8,165.3 L460.8,162.3 L440.8,173.9 L441.2,183.5 L432.7,197.6 L431.9,205.8 L425,219.6 L412.9,215.8 L412.3,233.2 L408.8,238.9 L410.5,246 L402.8,250 L394.7,223.4 L390.4,223.4 L387.9,234.2 L379.4,225.5 L384.2,215.9 L391.1,214.9 L398.3,200.7 L389.3,197.8 L375,198.1 L360.3,195.8 L358.9,184.1 L351.5,183.3 L339.3,176 L333.8,187.4 L345,196.3 L335.3,202.6 L331.9,208.7 L341.4,213.2 L338.8,223.3 L344.1,235.9 L346.5,249.8 L344.3,255.9 L333.8,255.7 L314.7,259.2 L315.6,271.8 L307.4,281.8 L285.1,293.1 L267.8,312.8 L256.2,323.4 L240.8,334.4 L240.7,342.2 L233,346.3 L219.1,352.3 L211.9,353.2 L207.2,366 L210.5,387.9 L211.3,401.8 L204.7,417.8 L204.7,446.3 L196.7,447.1 L189.6,460 L194.3,465.5 L180.2,470.3 L175,481.7 L168.8,486.5 L154.2,470.8 L147,447.3 L141.1,430.4 L135.7,422.4 L127.4,406.3 L123.6,385.3 L120.9,374.8 L106.9,351.7 L100.5,319.1 L95.8,297.6 L95.9,277.3 L92.9,261.5 L70.4,271.6 L59.5,269.6 L39.3,249.2 L46.7,243.1 L42.1,236.6 L24,222.3 L34.3,211.1 L68.3,211.1 L65.3,196.7 L56.6,188.2 L54.8,175.2 L44.7,167.7 L61.7,150.1 L79.7,151.4 L95.9,133.8 L105.6,116.7 L120.6,99.8 L120.3,87.9 L133.5,78.1 L121,69.9 L115.7,58.5 L110.2,43.8 L117.8,36.5 L141.2,40.6 L158.5,38.1 L173.4,24 Z`;

// ---- Secure delivery: 2-of-3 key custodians ----
export const CUSTODIANS = [
  { id: 'central', role: 'Central Board (NTA)', holder: 'Controller of Exams', frag: '9f2a-c41e-8b07', released: false },
  { id: 'principal', role: 'Centre Superintendent', holder: 'Govt. HS, Sector-14', frag: 'd5e9-1a6c-77fb', released: false },
  { id: 'observer', role: 'Independent Observer', holder: 'District Magistrate Cell', frag: '03bc-ee82-4f19', released: false },
];

export const ENCRYPTED_PAPER = `Ae7f9c14b20d8835aa01fe5c9907bb3d6612e0c4f88a17de92b034c5ffa1029e
7d3c0b8e15a6f4920cc1de83ba70f5519e2d4a6b8c0f1e3d5a7b9c1e3f5a7b9d
b1f3e5d7c9a0b2e4f6a8c0e2d4f6a8b0c2e4d6f8a0b2c4e6f8a0d2c4e6f8b0a2
4f6a8c0e2d4f6a8b0c2e4d6f8a0b2c4e6f8a0d2c4e6f8b0a24f6a8c0e2d4f6a8`;

// ---- AI Evaluation: a scanned subjective answer + rubric ----
export const SCRIPT = {
  candidate: 'Roll 2406A-11827',
  question: 'Q14. Explain the mechanism of enzyme action with reference to the lock-and-key and induced-fit models. (5 marks)',
  // segments: text + which rubric point it satisfies (null = plain)
  answer: [
    { t: 'Enzymes are biological catalysts that speed up reactions by lowering the activation energy', r: 'r1' },
    { t: ' without being consumed. ', r: null },
    { t: 'The substrate binds to a specific region of the enzyme called the active site', r: 'r2' },
    { t: '. In the lock-and-key model, the active site has a rigid shape exactly complementary to the substrate', r: 'r3' },
    { t: '. ', r: null },
    { t: 'The induced-fit model proposes the active site changes shape to mould around the substrate on binding', r: 'r4' },
    { t: '. This forms an enzyme-substrate complex which then releases the products.', r: null },
    // r5 (effect of temperature/pH) intentionally missing
  ],
  rubric: [
    { id: 'r1', points: 1, text: 'Enzyme defined as catalyst lowering activation energy', hit: true },
    { id: 'r2', points: 1, text: 'Mentions substrate binding at the active site', hit: true },
    { id: 'r3', points: 1, text: 'Describes lock-and-key (rigid complementary site)', hit: true },
    { id: 'r4', points: 1, text: 'Describes induced-fit (site moulds to substrate)', hit: true },
    { id: 'r5', points: 1, text: 'States effect of temperature / pH on activity', hit: false },
  ],
  aiScore: 4,
  maxScore: 5,
  aiNote: 'Candidate covers catalysis, active-site binding, and both binding models clearly. No reference to the effect of temperature or pH on enzyme activity — rubric point r5 not satisfied. Recommend 4 / 5.',
};

// ---- UEBA: accounts being baselined ----
export const ACCOUNTS = [
  { id: 'eval-2231', name: 'Examiner · S. Mahato', baseline: 'Logs in 10:00–18:00 · ~40 scripts/day · Ranchi', score: 6, flagged: false,
    factors: [{ k: 'Login hour', v: 'normal (11:24)', s: 4 }, { k: 'Throughput', v: '38 scripts/hr', s: 8 }, { k: 'Geo', v: 'Ranchi (usual)', s: 3 }] },
  { id: 'eval-1190', name: 'Examiner · R. Verma', baseline: 'Logs in 09:30–17:00 · ~45 scripts/day · Patna', score: 11, flagged: false,
    factors: [{ k: 'Login hour', v: 'normal (09:48)', s: 5 }, { k: 'Throughput', v: '52 scripts/hr', s: 14 }, { k: 'Geo', v: 'Patna (usual)', s: 4 }] },
  { id: 'admin-007', name: 'Admin · (credential: D. Kumar)', baseline: 'Logs in 09:00–18:00 · key-ops only · Hazaribagh', score: 12, flagged: false,
    factors: [{ k: 'Login hour', v: 'normal (10:10)', s: 5 }, { k: 'Bulk export', v: 'none', s: 4 }, { k: 'Geo', v: 'Hazaribagh (usual)', s: 5 }] },
];

// The anomalous reading that the simulated insider attack produces on admin-007
export const ATTACK_FACTORS = [
  { k: 'Login hour', v: '03:07 IST (off-baseline)', s: 86 },
  { k: 'Bulk export', v: '412 scripts in 90s', s: 94 },
  { k: 'Geo / device', v: 'New IP · Dubai · unknown device', s: 91 },
  { k: 'DB write', v: 'direct UPDATE on marks table', s: 97 },
];

// ---- CERT-In threat intelligence (RAG corpus) ----
export const ADVISORIES = [
  { id: 'CIAD-2026-0142', sev: 'High', title: 'Credential-stuffing against state education portals', match: 0.92 },
  { id: 'CIAD-2026-0119', sev: 'Critical', title: 'Privileged-account misuse: direct DB writes bypassing app layer', match: 0.97 },
  { id: 'CIAD-2025-0088', sev: 'Medium', title: 'Off-hours bulk data exfiltration patterns (MITRE T1020)', match: 0.81 },
];

// ---- SOAR containment playbook ----
export const PLAYBOOK = [
  { id: 1, title: 'Isolate centre node BR-1142', detail: 'Sever network link to the compromised exam centre', mode: 'auto' },
  { id: 2, title: 'Freeze cryptographic key shares', detail: 'Revoke the centre’s key-release authority', mode: 'auto' },
  { id: 3, title: 'Revoke session · admin-007', detail: 'Kill active session + force re-auth', mode: 'auto' },
  { id: 4, title: 'Roll back marks-table writes', detail: 'Restore last Merkle-verified snapshot — production data', mode: 'gate' },
  { id: 5, title: 'File CERT-In + EOU incident report', detail: 'Auto-generate regulator-compliant report', mode: 'auto' },
];

// ---- Merkle audit ledger (seed) ----
export const LEDGER_SEED = [
  { h: 'a91f…7c0e', kind: 'key', who: 'Central Board', what: 'Key share #1 escrowed', t: 'T-72h', ok: true },
  { h: '4d2c…b318', kind: 'key', who: 'Observer', what: 'Key share #3 escrowed', t: 'T-48h', ok: true },
  { h: 'e7b0…1a92', kind: 'deliver', who: 'System', what: 'Encrypted papers pushed to 4,750 centres', t: 'T-12h', ok: true },
  { h: '0c8d…f4a1', kind: 'unlock', who: 'Quorum 2/3', what: 'Paper decrypted · MU-003', t: 'T-15m', ok: true },
  { h: '6f31…9bd7', kind: 'grade', who: 'Examiner R.Verma', what: 'Script 2406A-11827 scored 4/5', t: '+6h', ok: true },
];

export const HEADLINE_STATS = [
  { key: 'sealed', label: 'Papers sealed', value: '4,750', delta: '100% of centres', tone: 'ok' },
  { key: 'leakwin', label: 'Leak window', value: '15 min', delta: 'was ~3 weeks', tone: 'ok' },
  { key: 'graded', label: 'Scripts AI-assisted', value: '1.84M', delta: '−71% grader time', tone: 'ok' },
  { key: 'threats', label: 'Threats contained', value: '0', delta: 'all centres nominal', tone: 'ok' },
];
