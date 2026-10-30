import { writeFileSync, readFileSync, mkdirSync } from 'node:fs';
import { lab, stations, commandText, labRoot } from '../src/app/labs/content/index.mjs';
export function worksheet() {
  const out = [`# ${lab.title} — worksheet`, `Content version: ${lab.version} | Private reference: ${lab.referenceRevision}`, `${lab.repository}\n\n${lab.accessNote}`, lab.story, '## Prepare', ...lab.prerequisites.map((p) => `- ${p}`), lab.offline, lab.roles, lab.ai, 'Record predictions, business-ID sets and explanations locally. Nothing is submitted. All commands run in separate terminals as labelled. For repeats choose fresh namespaces consistently.'];
  function step(s) {
    out.push(`### ${s.terminal} — ${s.title}`, s.directory || labRoot, s.instruction);
    for (const platform of ['windows', 'unix']) {
      const cmd = commandText(s, platform);
      if (cmd) out.push(`**${platform === 'windows' ? 'Windows cmd.exe' : 'Linux/macOS shell'}**`, `\`\`\`${platform === 'windows' ? 'bat' : 'sh'}\n${cmd}\n\`\`\``);
    }
    out.push(`Observe: ${s.evidence}`);
  }
  out.push('## Common setup', 'Verify java -version and javac -version use the supplied JDK 21. Set JAVA_HOME to its root if needed. Use approved company proxy/certificate settings. Runtime-only learners extract the trainer ZIP and begin at broker start; source learners build first.');
  lab.setup.forEach(step);
  out.push('lab = finished demos; exercises = editable implementations; solutions = separate worked examples in the private repository. Rebuild changed source with -Ptraining. Green reference CI is not automatic grading of your implementation.');
  for (const s of stations) {
    out.push(`## Station ${s.number}: ${s.title}`, `${s.minutes} minutes | ${s.mapping}`, s.objective, s.story, `Topology: ${s.topology.join(' → ')}`, s.topologyDescription, '### 1. Predict', s.prediction, 'My prediction:\n\n____________________________________________________________');
    for (const [i,phase] of ['Run','Break'].entries()) {
      out.push(`### ${i + 2}. ${phase}`);
      s.steps.filter((x) => x.phase === phase).forEach(step);
      out.push('My evidence / sent and committed ID sets:\n\n____________________________________________________________');
    }
    out.push('### 4. Explain', ...s.explain.map((p) => `- ${p}`), 'My explanation:\n\n____________________________________________________________', '### Staged hints (after prediction)', ...s.hints.map((h,i) => `Hint ${i+1}: ${h}`), '### Self-checks');
    s.checks.forEach((q,i) => out.push(`${i+1}. ${q.text}`, ...q.answers.map((a,j) => `   ${String.fromCharCode(65+j)}. ${a.text}`), 'My answer and reason: ________________________________________'));
    out.push('### 5. Adapt', s.adapt, 'My changed condition, prediction and result:\n\n____________________________________________________________', lab.reflection, 'My reflection:\n\n____________________________________________________________', '### Completion (self-assessment)', ...s.checklist.map((p) => `- [ ] ${p}`), '### Cleanup');
    s.cleanup.forEach(step);
  }
  out.push('## Debrief and finish', 'Each learner demonstrates one changed condition and explains the evidence.', lab.cleanup);
  step({ terminal: 'Terminal 4 — control', title: 'Stop your local broker', instruction: 'Stop all workers first, request broker stop, then wait for Terminal 1 to exit.', commands: lab.shutdown, evidence: 'Broker process has exited.' });
  step({ terminal: 'Terminal 4 — control', title: 'Optional full local reset', instruction: 'Only for your stopped, exclusively owned local broker dataset. Never a shared remote broker.', commands: lab.reset, evidence: 'Owned broker data deleted; H2 ledger preserved.' });
  out.push('Optional private-repository extensions: S04 durable subscriptions, S09 atomic local idempotency, selectors and other scenarios. No exactly-once end-to-end guarantee follows from these demonstrations.');
  return out.join('\n\n') + '\n';
}
const output = new URL('../public/labs/artemis-messaging-worksheet.md', import.meta.url);
if (process.argv.includes('--check')) {
  if (readFileSync(output,'utf8') !== worksheet()) throw new Error('Worksheet differs from structured content. Run npm run worksheet.');
} else if (process.argv[1] === new URL(import.meta.url).pathname) {
  mkdirSync(new URL('../public/labs/', import.meta.url), { recursive: true });
  writeFileSync(output, worksheet());
}
