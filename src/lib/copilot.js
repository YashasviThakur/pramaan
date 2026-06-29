// ============================================================
// Pramaan AI Copilot — context-aware analyst responses.
// Scripted for a reliable demo; swap callLLM() for a real model later.
// ============================================================

// Each entry: { text, cite? }  cite renders a small "source" chip.
export const SCRIPTS = {
  welcome: [
    { text: "Namaste 🙏 I'm the Pramaan Copilot — your exam-integrity analyst. I watch the paper lifecycle, the grading floor, and the security layer in real time. Ask me anything, or run the live demo from the Command Center." },
  ],

  secureLaunch: [
    { text: "Secure launch initiated. The question paper is AES-256 encrypted; the key is Shamir-split 2-of-3 across the Board, the Centre Superintendent, and an independent Observer." },
    { text: "No single custodian can decrypt early. I'll only reconstruct the key once a quorum releases their shares — and the unlock is time-locked to T-minus-15 minutes.", cite: 'Pillar 1 · JIT Delivery' },
    { text: "✅ Quorum reached (2 of 3). Paper decrypted on schedule and logged to the Merkle ledger. Pre-exam leak window for this paper: ~14 minutes, versus the ~3 weeks it would sit in a physical vault." },
  ],

  grading: [
    { text: "Reading scanned script 2406A-11827 against the official rubric for Q14 (enzyme action, 5 marks)…" },
    { text: "I can map 4 of 5 rubric points to specific sentences: catalysis & activation energy, active-site binding, lock-and-key, and induced-fit are all clearly present and highlighted in green." },
    { text: "⚠️ Rubric point r5 — effect of temperature / pH on activity — is not addressed anywhere in the script. I'm recommending 4 / 5 and flagging r5 for the examiner. The teacher makes the final call.", cite: 'Pillar 1 · HITL Validation' },
  ],

  attack: [
    { text: "🚨 Anomaly on account admin-007 (credential: D. Kumar, centre BR-1142). This is NOT a known-malware signature — it's a behavioural deviation from this account's own baseline." },
    { text: "In plain English: this admin normally does key-operations during office hours from Ranchi. Right now it's logging in at 03:07 IST from a new device in Dubai, and it just issued a direct UPDATE on the marks table after pulling 412 scripts in 90 seconds." },
    { text: "That pattern matches CERT-In advisory CIAD-2026-0119 — 'privileged-account misuse: direct DB writes bypassing the app layer' — at 97% similarity. Predicted intent: silent mark tampering, then exfiltration.", cite: 'CERT-In · CIAD-2026-0119' },
    { text: "Recommended response: execute containment playbook PB-07. Steps 1–3 and 5 are low-blast-radius and can auto-run; step 4 (rolling back production marks-table writes) needs a human approval gate." },
  ],

  contained: [
    { text: "✅ Contained. Centre node BR-1142 is isolated, the account's session is revoked, and its key-release authority is frozen — all in 4.2 seconds." },
    { text: "Critically, containment was local. The other 4,749 centres never noticed — the national exam continued completely uninterrupted. No re-exam required.", cite: 'Pillar 2 · SOAR' },
    { text: "Every action here is chained into the Merkle ledger in permanent ink. The attempted marks-table write broke the hash chain, so the tampering is now provable and fully auditable." },
  ],
};

// Canned Q&A for free-text questions during a demo (keyword matched).
const QA = [
  { k: ['leak', 'vault', 'jit', 'deliver'], a: "Papers stay AES-256 encrypted until T-15min. The key is split 2-of-3 (Board / Superintendent / Observer), so no one can open a paper early. That shrinks the leak window from ~3 weeks of vault storage to minutes." },
  { k: ['grade', 'evaluat', 'rubric', 'mark'], a: "I read each scanned script, map sentences to rubric points, and draft a score with an explanation. A human examiner reviews my recommendation and approves or overrides — cutting grading time ~70% while keeping a person accountable for every final mark." },
  { k: ['dispute', 're-eval', 'recheck', 'reevaluat'], a: "On result day a student sees their scanned script, the marks, and my notes. One click on 'Dispute' strips their identity and routes that single question to a senior examiner for a blind re-check — minutes, not months." },
  { k: ['ueba', 'insider', 'anomal', 'behav'], a: "I baseline every examiner & admin — login hours, throughput, geo, typing cadence. An Isolation-Forest model scores deviations. A 3 AM bulk-export from a new city spikes the score and gets flagged as a compromised account." },
  { k: ['merkle', 'ledger', 'tamper', 'audit'], a: "Every grade, key release, and security event is hashed into a SHA-256 Merkle tree. Alter one record retroactively and the chain breaks instantly — tampering becomes mathematically visible." },
  { k: ['soar', 'contain', 'isolat', 'respon'], a: "When a breach is confirmed I run pre-approved playbooks: isolate the centre node, freeze its keys, revoke the session. High-impact steps like rolling back production data hit a human approval gate." },
  { k: ['cert', 'rag', 'threat', 'advisor'], a: "I'm connected to live CERT-In advisories. When something fires, I match the log pattern against the corpus and explain the threat in plain language with the matching advisory ID and a recommended patch." },
];

export function answerQuestion(q) {
  const low = q.toLowerCase();
  for (const item of QA) if (item.k.some((kw) => low.includes(kw))) return item.a;
  return "I track three things: the secure paper lifecycle, AI-assisted grading with a human in the loop, and the security shield (UEBA + CERT-In RAG + SOAR) — all written to a tamper-proof Merkle ledger. Ask me about any of those, or run the live demo.";
}

// Placeholder for a real LLM call (Gemini/Claude). Returns scripted text today.
export async function callLLM(prompt) {
  return answerQuestion(prompt);
}
