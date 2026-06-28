import { createContext, useContext, useReducer, useRef, useCallback } from 'react';
import { CUSTODIANS, LEDGER_SEED, PLAYBOOK } from './data/mock';
import { SCRIPTS, answerQuestion } from './lib/copilot';
import { shortHash } from './lib/crypto';

const StoreCtx = createContext(null);
export const useStore = () => useContext(StoreCtx);

let _id = 100;
const nid = () => ++_id;

const initial = {
  entered: false,
  view: 'command',
  copilotOpen: false,
  copilotTyping: false,
  copilotMsgs: SCRIPTS.welcome.map((m) => ({ id: nid(), role: 'ai', ...m })),
  events: [
    { id: nid(), tone: 'ok', msg: 'All 4,750 centres reporting nominal integrity status', meta: 'now' },
    { id: nid(), tone: 'info', msg: 'Encrypted papers distributed · awaiting T-15m unlock quorum', meta: '2m ago' },
  ],
  ledger: LEDGER_SEED.map((l) => ({ id: nid(), ...l })),
  custodians: CUSTODIANS.map((c) => ({ ...c })),
  unlocked: false,
  graded: false,
  approved: false,
  finalScore: 4,
  incident: { active: false, stage: 'none', steps: {} }, // stage: none|detected|contained
  flagged: false,
  demoStep: 0, // 0..4 of the live-demo workflow
};

function reducer(s, a) {
  switch (a.type) {
    case 'ENTER': return { ...s, entered: true, view: a.view || 'command' };
    case 'HOME': return { ...s, entered: false };
    case 'VIEW': return { ...s, view: a.view };
    case 'COPILOT_OPEN': return { ...s, copilotOpen: a.open ?? !s.copilotOpen };
    case 'COPILOT_TYPING': return { ...s, copilotTyping: a.on };
    case 'COPILOT_PUSH': return { ...s, copilotMsgs: [...s.copilotMsgs, { id: nid(), ...a.msg }] };
    case 'EVENT': return { ...s, events: [{ id: nid(), ...a.ev }, ...s.events].slice(0, 30) };
    case 'LEDGER': return { ...s, ledger: [...s.ledger, { id: nid(), ...a.entry }] };
    case 'RELEASE': return { ...s, custodians: s.custodians.map((c) => c.id === a.id ? { ...c, released: true } : c) };
    case 'UNLOCK': return { ...s, unlocked: true };
    case 'GRADE': return { ...s, graded: true };
    case 'APPROVE': return { ...s, approved: true, finalScore: a.score };
    case 'ATTACK': return { ...s, incident: { ...s.incident, active: true, stage: 'detected' }, flagged: true };
    case 'STEP_DONE': return { ...s, incident: { ...s.incident, steps: { ...s.incident.steps, [a.id]: true } } };
    case 'CONTAINED': return { ...s, incident: { ...s.incident, stage: 'contained' }, flagged: false };
    case 'DEMO_STEP': return { ...s, demoStep: Math.max(s.demoStep, a.n) };
    case 'RESET': return { ...initial, entered: s.entered, copilotOpen: s.copilotOpen, view: s.view,
      copilotMsgs: SCRIPTS.welcome.map((m) => ({ id: nid(), role: 'ai', ...m })),
      events: initial.events.map((e) => ({ ...e, id: nid() })),
      ledger: LEDGER_SEED.map((l) => ({ id: nid(), ...l })),
      custodians: CUSTODIANS.map((c) => ({ ...c })) };
    default: return s;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial);
  const timers = useRef([]);
  const after = (ms, fn) => { const t = setTimeout(fn, ms); timers.current.push(t); };

  // Push a scripted sequence of copilot messages with typing indicators
  const sayScript = useCallback((key, gap = 1100) => {
    dispatch({ type: 'COPILOT_OPEN', open: true });
    const msgs = SCRIPTS[key] || [];
    let delay = 300;
    msgs.forEach((m) => {
      after(delay, () => dispatch({ type: 'COPILOT_TYPING', on: true }));
      after(delay + 650, () => {
        dispatch({ type: 'COPILOT_TYPING', on: false });
        dispatch({ type: 'COPILOT_PUSH', msg: { role: 'ai', ...m } });
      });
      delay += gap;
    });
    return delay;
  }, []);

  const ask = useCallback((q) => {
    dispatch({ type: 'COPILOT_PUSH', msg: { role: 'user', text: q } });
    dispatch({ type: 'COPILOT_TYPING', on: true });
    after(700, () => {
      dispatch({ type: 'COPILOT_TYPING', on: false });
      dispatch({ type: 'COPILOT_PUSH', msg: { role: 'ai', text: answerQuestion(q) } });
    });
  }, []);

  const go = useCallback((view) => dispatch({ type: 'VIEW', view }), []);
  const enter = useCallback((view) => dispatch({ type: 'ENTER', view }), []);
  const home = useCallback(() => dispatch({ type: 'HOME' }), []);

  // ---- Pillar 1: secure launch ----
  const releaseShare = useCallback((id) => {
    dispatch({ type: 'RELEASE', id });
    dispatch({ type: 'EVENT', ev: { tone: 'info', msg: `Key share released · ${id}`, meta: 'now' } });
  }, []);

  const unlockPaper = useCallback(() => {
    dispatch({ type: 'UNLOCK' });
    dispatch({ type: 'EVENT', ev: { tone: 'ok', msg: 'Quorum 2/3 reached · paper decrypted on schedule (T-15m)', meta: 'now' } });
    dispatch({ type: 'LEDGER', entry: { h: shortHash('unlock' + nid()), kind: 'unlock', who: 'Quorum 2/3', what: 'Paper decrypted · DL-014', t: 'T-15m', ok: true } });
    dispatch({ type: 'DEMO_STEP', n: 1 });
    sayScript('secureLaunch');
  }, [sayScript]);

  // ---- Pillar 1: grading ----
  const runGrading = useCallback(() => {
    dispatch({ type: 'GRADE' });
    dispatch({ type: 'EVENT', ev: { tone: 'info', msg: 'AI Copilot analysed script 2406A-11827 · 4/5 rubric points matched', meta: 'now' } });
    dispatch({ type: 'DEMO_STEP', n: 2 });
    sayScript('grading');
  }, [sayScript]);

  const approveScore = useCallback((score) => {
    dispatch({ type: 'APPROVE', score });
    dispatch({ type: 'EVENT', ev: { tone: 'ok', msg: `Examiner approved final score ${score}/5 for 2406A-11827`, meta: 'now' } });
    dispatch({ type: 'LEDGER', entry: { h: shortHash('grade' + score + nid()), kind: 'grade', who: 'Examiner R.Verma', what: `Script 2406A-11827 scored ${score}/5`, t: '+6h', ok: true } });
  }, []);

  // ---- Pillar 2: attack + containment ----
  const triggerAttack = useCallback(() => {
    dispatch({ type: 'ATTACK' });
    dispatch({ type: 'EVENT', ev: { tone: 'alert', msg: '🚨 Anomaly: admin-007 · direct marks-table write · 03:07 IST · Dubai IP', meta: 'now' } });
    dispatch({ type: 'LEDGER', entry: { h: shortHash('tamper' + nid()), kind: 'tamper', who: 'admin-007', what: 'Unauthorised UPDATE on marks table — CHAIN BROKEN', t: '+6h', ok: false } });
    dispatch({ type: 'DEMO_STEP', n: 3 });
    sayScript('attack');
  }, [sayScript]);

  const runPlaybookStep = useCallback((id) => {
    dispatch({ type: 'STEP_DONE', id });
    const step = PLAYBOOK.find((p) => p.id === id);
    dispatch({ type: 'EVENT', ev: { tone: 'warn', msg: `SOAR · ${step.title} — executed`, meta: 'now' } });
  }, []);

  const contain = useCallback(() => {
    PLAYBOOK.forEach((p) => dispatch({ type: 'STEP_DONE', id: p.id }));
    dispatch({ type: 'CONTAINED' });
    dispatch({ type: 'EVENT', ev: { tone: 'ok', msg: '✅ Threat contained in 4.2s · BR-1142 isolated · 4,749 centres unaffected', meta: 'now' } });
    dispatch({ type: 'LEDGER', entry: { h: shortHash('contain' + nid()), kind: 'soar', who: 'SOAR PB-07', what: 'Centre BR-1142 isolated · session revoked · keys frozen', t: '+6h', ok: true } });
    dispatch({ type: 'DEMO_STEP', n: 4 });
    sayScript('contained');
  }, [sayScript]);

  const reset = useCallback(() => { timers.current.forEach(clearTimeout); timers.current = []; dispatch({ type: 'RESET' }); }, []);

  const value = {
    state, dispatch, go, enter, home,
    copilot: { open: state.copilotOpen, toggle: (open) => dispatch({ type: 'COPILOT_OPEN', open }), ask, sayScript },
    actions: { releaseShare, unlockPaper, runGrading, approveScore, triggerAttack, runPlaybookStep, contain, reset },
  };
  return <StoreCtx.Provider value={value}>{children}</StoreCtx.Provider>;
}
