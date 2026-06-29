# Pramaan — India's Exam Integrity Layer

> **Every paper traceable. Every score verifiable. Every student can trust the exam again.**

Pramaan is a secure, AI-powered platform that makes **every government examination** — entrance tests, board exams, and recruitment exams alike — **leak-proof** and its **evaluation fully transparent** to the student. Built in response to India's recurring paper-leak, re-exam, and evaluation-integrity crises.

Submission for the **ET AI Hackathon 2.0 (The Economic Times × Unstop), 2026** — Problem Statement **#7: AI-Driven Cyber Resilience for Critical National Infrastructure**, framed as *"exam systems are critical national infrastructure."*

---

## The three pillars · nine features

### Pillar 1 — AI-Driven Education
1. **Secure JIT paper delivery** — papers stay AES-256 encrypted; the key is Shamir-split **2-of-3** (Board / Centre Superintendent / Independent Observer) and time-locked to **T-15 min**. Leak window shrinks from ~3 weeks of vault storage to minutes.
2. **AI evaluation copilot** — an LLM reads the scanned script, maps each sentence to the rubric, and drafts a score with an explanation.
3. **Human-in-the-loop validation** — the examiner approves in one click or overrides. ~70% less grading time, a human accountable for every final mark.
4. **Transparent re-evaluation** — students see their own scanned script, the marks, and the AI's notes; a one-click **Dispute** strips their identity and routes the question to a blind senior re-check.

### Pillar 2 — AI Security Shield
5. **Insider-threat detection (UEBA)** — baselines every examiner/admin (login hour, throughput, geo, cadence) and flags behavioural anomalies — no malware signature required.
6. **Threat-intelligence RAG** — matches live logs against **CERT-In** advisories and explains the threat in plain language.
7. **SOAR containment** — pre-approved playbooks isolate a breached centre locally (with a **human approval gate** for high-blast-radius actions) while the rest of the nation keeps running.

### Pillar 3 — Trust & Transparency
8. **Tamper-proof Merkle ledger** — every grade, key release, and security event is hashed into a **SHA-256 Merkle tree**. Alter one record and the chain breaks, instantly and provably.
9. **AI explainability** — visual mapping of grading logic and security anomaly metrics; no black box.

---

## Live demo workflow (what the judges see)

1. **Secure launch** — combine the 2-of-3 key shares and decrypt the paper on schedule.
2. **AI grading loop** — click *Analyze*, watch the AI fill the rubric, then make a human adjustment.
3. **Simulated attack** — a corrupt insider tries to alter the marks table at 3 AM from a foreign IP.
4. **Automated isolation** — the dashboard flashes red, the Copilot explains the threat, SOAR severs the single compromised node, and the Merkle ledger shows the broken chain. The other centres run uninterrupted — **no re-exam needed.**

---

## Tech stack

- **React + Vite**
- `framer-motion`, `lucide-react`, `recharts`
- Global store via React Context + reducer ([`src/store.jsx`](src/store.jsx)) coordinating all six views, the slide-over AI Copilot, the live feed, and the Merkle ledger
- AI Copilot is scripted for a reliable demo with a `callLLM()` hook ([`src/lib/copilot.js`](src/lib/copilot.js)) ready to swap in a real model (Gemini / Claude)

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL, then hit **Run live demo** or walk the sidebar top-to-bottom.

```bash
npm run build    # production build
npm run preview  # preview the build
```

---

*Demo build — synthetic data. Not affiliated with any government examination authority or agency.*
