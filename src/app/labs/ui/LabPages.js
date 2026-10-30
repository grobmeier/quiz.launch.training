import Link from 'next/link';
import { lab, labRoot, stations, stationUrl } from '../content/index.mjs';
import { CommandStep, PlatformPicker, PrintButton, SelfCheck } from './LabControls';
import styles from './labs.module.scss';

export function Resources() {
  return <aside className={styles.resources} aria-label="Training resources">
    <div><a className={styles.primary} href={lab.repository}>Open training repository</a><p>{lab.accessNote}</p></div>
    <div><a href="/labs/artemis-messaging-worksheet.md" download>Download English worksheet (.md)</a><p>Complete commands for both platforms. Save before going offline.</p></div>
    <div><Link href="/labs/artemis-messaging/print/">Printable lab &amp; worksheet</Link><p>All three stations in one print view.</p></div>
  </aside>;
}
export function Intro({ print = false }) {
  return <>
    <p className={styles.eyebrow}>Java foundations · Local Java 21 lab</p>
    <h1>{lab.title}</h1>
    <p className={styles.lead}>{lab.story}</p>
    <div className={styles.tags}><span>3 stations</span><span>{lab.duration}</span><span>Content v{lab.version}</span></div>
    {!print && <Resources />}
    <section><h2>Prepare your environment</h2><ul>{lab.prerequisites.map((p) => <li key={p}>{p}</li>)}</ul>
      <p>{lab.offline}</p>
      <p>The training repository is public, including exercises and worked solutions. On GitHub, download an artifact from a successful Actions run for the agreed revision, extract its runtime ZIP, and read RUN.md. Build artifacts expire after seven days; your trainer should prepare them before the session.</p>
      <p>English reference revision: <a href={`${lab.repository}/commit/${lab.referenceRevision}`}><code>{lab.referenceRevision.slice(0, 7)}</code></a>. <a href={lab.referenceRun}>Verified Windows/Linux/macOS run and artifacts</a>. Source and worked solutions are available in the training repository.</p>
    </section>
    <section><h2>How you will learn</h2><p className={styles.method}>{lab.method.join(' → ')}</p><p>{lab.roles}</p><p>{lab.ai}</p>
      <p>Use the worksheet or local notes for predictions and evidence. These pages do not execute commands or collect your answers. The checklist is your own self-assessment.</p>
    </section>
    <section id="setup"><h2>Set up once, in separate terminals</h2><p>Windows commands are selected initially. {labRoot} Check <code>java -version</code> and <code>javac -version</code>; both should use your supplied JDK 21. Set JAVA_HOME to its root directory in every terminal before building or starting scripts. Configure company proxies/certificates through approved IT settings.</p>
      {lab.setup.map((step) => <CommandStep key={step.id} step={step} />)}
      <p><strong>Choose the right entry point:</strong> <code>lab</code> runs finished demonstrations; <code>exercises</code> runs your editable implementations; <code>solutions</code> runs separate worked examples. Stop clients and the local broker before rebuilding with the training profile; Windows may lock running JARs. After BUILD SUCCESS, restart the broker and use a fresh namespace. Do not mix their messages in an old namespace.</p>
      <p>No Docker, admin rights, PowerShell policy change or external broker is required. The optional central-broker profile is follow-up material and needs a separate company-network preflight.</p>
    </section>
    {!print && <section><h2>Your learning path</h2><ol className={styles.cards}>{stations.map((s) => <li key={s.id}><Link href={stationUrl(s)}><span className={styles.eyebrow}>Station {s.number} · {s.minutes} minutes</span><h3>{s.title}</h3><p>{s.objective}</p><span className={styles.action}>Start station →</span></Link></li>)}</ol></section>}
  </>;
}
export function StationBody({ station, print = false }) {
  return <>
    <p className={styles.eyebrow}>Station {station.number} of 3 · {station.minutes} minutes · {station.mapping}</p>
    {print ? <h2>{station.title}</h2> : <h1>{station.title}</h1>}
    <p className={styles.lead}>{station.objective}</p><p>{station.story}</p>
    <figure className={styles.topology}><div role="img" aria-label={station.topologyDescription}>{station.topology.map((node, i) => <span key={node}>{i > 0 && <b aria-hidden="true">{station.id === 'publish-subscribe' ? '↳' : '→'}</b>}<span>{node}</span></span>)}</div><figcaption>{station.topologyDescription}</figcaption></figure>
    <p>Prerequisites: Java foundations and the <Link href="/labs/artemis-messaging/#setup">common setup</Link>, with Terminal 1 showing <code>BROKER_READY</code>. Use your own local broker. Keep a fresh namespace consistent across cooperating clients.</p>
    <section className={styles.prediction}><h2>1. Predict</h2><p>{station.prediction}</p><p>Write your prediction in the worksheet before commands, hints or AI. Keep the sent and received business-ID sets as evidence.</p>{print && <p className={styles.response}>My prediction: ____________________________________________________</p>}</section>
    {['Run', 'Break'].map((phase, i) => <section key={phase}><h2>{i + 2}. {phase}</h2>{station.steps.filter((s) => s.phase === phase).map((step) => <CommandStep key={step.id} step={step} />)}{print && <p className={styles.response}>My evidence / ID sets: ____________________________________________</p>}</section>)}
    <section><h2>4. Explain</h2><ul>{station.explain.map((p) => <li key={p}>{p}</li>)}</ul><h3>Staged hints</h3><p>Use one hint at a time after recording your prediction.</p>{station.hints.map((hint, i) => <details key={hint} open={print}><summary>Hint {i + 1}</summary><p>{hint}</p></details>)}
      <h3>Check your understanding</h3><p>Choose an answer, then check it for feedback. These questions do not affect quiz exam scoring.</p>
      {station.checks.map((q, i) => print ? <div className={styles.check} key={q.id}><p><strong>{i + 1}. {q.text}</strong></p><ul>{q.answers.map((a) => <li key={a.text}>{a.text}</li>)}</ul><p>My answer and reason: ______________________________________</p></div> : <SelfCheck key={q.id} question={q} />)}
    </section>
    <section><h2>5. Adapt</h2><p>{station.adapt}</p><h3>Reflect on the change</h3><p>What did you predict, what changed, and which IDs or state support your explanation?</p><p>{lab.reflection} If you used no assistance, explain the decision you made from the supplied material.</p>{print && <p className={styles.response}>My adaptation and explanation: ____________________________________</p>}
      <h3>Completion checklist</h3><p>This is a local self-assessment. Nothing is submitted or saved.</p>{station.checklist.map((item) => <label className={styles.checklist} key={item}><input type="checkbox" />{item}</label>)}
    </section>
    <section><h2>Clean up this station</h2>{station.cleanup.map((step) => <CommandStep key={step.id} step={step} />)}</section>
  </>;
}
export function FinalCleanup({ print = false }) {
  return <section id="recap"><h2>Debrief and finish</h2><p>Show a partner or trainer one changed condition. Explain where work waited, who received a copy, and what was confirmed before failure. Support your explanation with business IDs and queue state.</p><p>{lab.cleanup}</p>
    <CommandStep step={{ id: 'stop-broker', terminal: 'Terminal 4 — control', title: 'Stop your local broker', instruction: 'All workers must already be stopped. After this command, wait for Terminal 1 to exit.', commands: lab.shutdown, evidence: 'Graceful stop completes; broker process exits.' }} />
    <details open={print}><summary>Optional full local reset</summary><CommandStep step={{ id: 'reset-broker', terminal: 'Terminal 4 — control', title: 'Reset only your stopped, owned local broker', instruction: 'Only if every client and broker process has exited, and you intentionally want to remove this local broker dataset. Do not edit ownership markers to bypass a refusal.', commands: lab.reset, evidence: 'Owned broker data deleted; H2 ledger preserved. Use fresh namespaces for later runs.' }} /></details>
    <p>Optional next steps in the training repository: S04 durable subscriptions; S09 idempotency for one local DB effect; selectors and other scenarios. A first pilot with two trainees will help refine timing and clarity.</p>
  </section>;
}
export function StationNav({ station }) {
  const index = stations.findIndex((s) => s.id === station.id);
  const previous = stations[index - 1], next = stations[index + 1];
  return <nav className={styles.stationNav} aria-label="Station navigation">
    <Link href={previous ? stationUrl(previous) : '/labs/artemis-messaging/'}>← {previous ? `Station ${previous.number}` : 'Lab overview'}</Link>
    <Link href={next ? stationUrl(next) : '/labs/artemis-messaging/#recap'}>{next ? `Station ${next.number}: ${next.title} →` : 'Lab recap →'}</Link>
  </nav>;
}
export function LabToolbar() { return <div className={styles.toolbar}><PlatformPicker /><PrintButton /></div>; }
