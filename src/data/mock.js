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

// Exam centers plotted on a stylised India map (viewBox 0 0 500 560)
export const CENTERS = [
  { id: 'DL-014', city: 'New Delhi',  x: 198, y: 168, status: 'ok' },
  { id: 'JP-021', city: 'Jaipur',     x: 168, y: 196, status: 'ok' },
  { id: 'LK-033', city: 'Lucknow',    x: 248, y: 200, status: 'ok' },
  { id: 'PT-009', city: 'Patna',      x: 304, y: 214, status: 'ok' },
  { id: 'BR-1142',city: 'Hazaribagh', x: 312, y: 233, status: 'ok' }, // the leak source in the demo
  { id: 'KO-052', city: 'Kolkata',    x: 344, y: 248, status: 'ok' },
  { id: 'GW-061', city: 'Guwahati',   x: 408, y: 184, status: 'ok' },
  { id: 'AH-044', city: 'Ahmedabad',  x: 138, y: 258, status: 'ok' },
  { id: 'BP-027', city: 'Bhopal',     x: 206, y: 268, status: 'ok' },
  { id: 'MU-003', city: 'Mumbai',     x: 150, y: 312, status: 'ok' },
  { id: 'HY-018', city: 'Hyderabad',  x: 224, y: 336, status: 'ok' },
  { id: 'BN-007', city: 'Bengaluru',  x: 210, y: 402, status: 'ok' },
  { id: 'CH-015', city: 'Chennai',    x: 262, y: 410, status: 'ok' },
  { id: 'KC-029', city: 'Kochi',      x: 198, y: 462, status: 'ok' },
];

// A simplified, recognisable India outline polygon
export const INDIA_PATH = `M205,38 L228,52 L246,46 L262,64 L250,86 L274,96 L300,80 L324,92
 L356,86 L388,104 L420,128 L436,156 L420,170 L398,162 L384,180 L406,196 L398,214
 L372,206 L354,224 L360,250 L342,262 L330,250 L314,268 L300,300 L286,326 L292,360
 L276,404 L260,452 L246,508 L232,542 L222,510 L214,460 L206,420 L196,392 L182,372
 L168,392 L150,372 L142,338 L150,312 L138,286 L120,266 L132,244 L120,222 L138,206
 L160,210 L172,188 L160,166 L178,150 L172,120 L190,96 L182,66 L205,38 Z`;

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
