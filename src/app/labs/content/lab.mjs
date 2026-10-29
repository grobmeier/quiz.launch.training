export const lab = {
  id: 'artemis-messaging', version: '1.0.0', title: 'Messaging with Apache Artemis',
  level: 'Java foundations', duration: '3 hours 45 minutes',
  repository: 'https://github.com/grobmeier/artemis-java-jumpstart',
  referenceRevision: '71fc36ed1f39422a058d35598922599e2004cf0e',
  referenceRun: 'https://github.com/grobmeier/artemis-java-jumpstart/actions/runs/40945978796',
  accessNote: 'Repository access requires an invitation from your trainer.',
  story: 'An online shop accepts orders while billing and shipping work independently. Follow an order through queues, events and a controlled failure, using evidence from your own local broker.',
  method: ['Predict', 'Run', 'Break', 'Explain', 'Adapt'],
  prerequisites: [
    'Java classes, loops, exceptions and basic Maven usage. No messaging experience required.',
    'A supplied JDK 21 and four separate cmd.exe terminals on Windows, or shells on Linux/macOS.',
    'An invitation to the private training repository for editable source, or the trainer’s verified runtime ZIP for demonstrations.',
    'Your own local broker. Docker, administrator rights and a remote broker are not required.',
  ],
  setup: [
    { id: 'get-source', terminal: 'Setup terminal', title: 'Get source and build once',
      directory: 'Parent directory for your training checkout',
      instruction: 'Accept your personal GitHub invitation first. Replace YOUR_GITHUB_NAME with your own username in the branch name. The branch starts at the verified English revision below, even while main changes. These commands need Git and initial download access. After cd, run subsequent steps from this repository root.',
      raw: { windows: ['git clone https://github.com/grobmeier/artemis-java-jumpstart.git', 'cd artemis-java-jumpstart', 'git switch -c feature/YOUR_GITHUB_NAME-labs 71fc36ed1f39422a058d35598922599e2004cf0e', '.\\mvnw.cmd -Ptraining clean verify'],
        unix: ['git clone https://github.com/grobmeier/artemis-java-jumpstart.git', 'cd artemis-java-jumpstart', 'git switch -c feature/YOUR_GITHUB_NAME-labs 71fc36ed1f39422a058d35598922599e2004cf0e', './mvnw -Ptraining clean verify'] },
      evidence: 'The training profile builds editable exercises and separate reference solutions. Its tests verify the reference implementation; green CI does not grade every trainee solution.' },
    { id: 'broker', terminal: 'Terminal 1 — broker', title: 'Start the broker in the foreground',
      instruction: 'Keep this terminal open. Do not paste client commands into it. Wait for BROKER_READY before continuing in another terminal.',
      commands: [{ tool: 'broker', args: 'start' }], evidence: 'BROKER_READY. Default TCP address: 127.0.0.1:61616, local loopback only.' },
    { id: 'doctor', terminal: 'Terminal 3 — inspection', title: 'Check the runtime connection',
      instruction: 'Open a separate terminal in the same lab root. All station commands below use explicit namespaces. For a repeat, replace the namespace in every cooperating client with a fresh value.',
      commands: [{ tool: 'doctor', args: 'runtime' }], evidence: 'TCP and authentication successful. The broker remains running in Terminal 1.' },
  ],
  offline: 'The trainer can distribute a verified runtime ZIP and JDK 21 before the session. Extract both and follow RUN.md; local demonstrations need no Maven or network. Editing exercises needs the full source and a build environment. An offline source build additionally requires a prepared Maven Wrapper distribution and dependency/plugin cache. A runtime ZIP alone cannot compile exercises.',
  roles: 'Work on your own local broker first. With a partner, alternate driver and navigator every 15–20 minutes: one operates, the other predicts and reconciles IDs. Each person demonstrates one changed condition.',
  ai: 'Make your initial prediction before revealing hints or asking AI. AI assistance is optional and subject to company policy. Verify suggestions against your code and logs; do not provide credentials, confidential code or company data. You never need to upload prompts or chat histories.',
  reflection: 'Which suggestion did you accept or reject, and what evidence informed that decision?',
  cleanup: 'Stop all workers with Ctrl+C. Ask the local broker to stop and wait for its process to exit. A full reset is optional and deletes your owned broker messages; use it only for an exclusively owned local lab after every client and the broker have stopped. Ownership-marker, path and process-lock guards must remain intact. The H2 ledger is separate. Never reset a shared remote broker for an individual exercise.',
  shutdown: [{ tool: 'broker', args: 'stop' }],
  reset: [{ tool: 'broker', args: 'reset --confirm' }],
  schedule: [['Environment buffer', 20], ['Introduction', 15], ['Queues', 45], ['Publish/subscribe', 45], ['Break', 15], ['Failure handling', 60], ['Debrief and cleanup', 25]],
};

export function commandText(step, platform = 'windows') {
  if (step.raw) return step.raw[platform].join('\n');
  return (step.commands || []).map(({ tool, args }) =>
    `${platform === 'windows' ? `.\\scripts\\${tool}.cmd` : `./scripts/${tool}.sh`}${args ? ` ${args}` : ''}`
  ).join('\n');
}
export const labRoot = 'Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).';
