import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { lab, stations, commandText } from '../src/app/labs/content/index.mjs';
import { worksheet } from '../scripts/generate-worksheet.mjs';

test('three ordered stations provide nine isolated single-answer self-checks', () => {
  assert.deepEqual(stations.map((s) => [s.id,s.number,s.exercise]), [['queues',1,'A'],['publish-subscribe',2,'B'],['failure-handling',3,'D']]);
  const ids = new Set();
  for (const s of stations) {
    assert.equal(s.checks.length, 3); assert.equal(s.hints.length, 2);
    assert.ok(s.prediction && s.adapt && s.checklist.length && s.cleanup.length);
    assert.ok(s.steps.some((step) => step.phase === 'Run'));
    assert.ok(s.steps.some((step) => step.phase === 'Break'));
    for (const q of s.checks) {
      assert.ok(!ids.has(q.id)); ids.add(q.id);
      assert.equal(q.type, 'text'); assert.equal(q.correctAnswers, 1);
      assert.equal(q.answers.filter((a) => a.correct).length, 1);
      assert.ok(q.explanation.length > 50);
    }
    for (const step of [...s.steps,...s.cleanup]) {
      assert.ok(!ids.has(step.id)); ids.add(step.id);
      assert.ok(step.terminal && step.instruction && step.evidence);
      for (const c of step.commands) {
        assert.ok(['lab','exercises','broker','doctor'].includes(c.tool));
        assert.ok(!/[\r\n;&|`]/.test(c.args));
        if (c.tool === 'lab') assert.match(c.args, /--namespace pilot-[a-z0-9-]+/);
      }
    }
  }
  assert.equal(lab.schedule.reduce((sum, [,m]) => sum + m, 0), 225);
});

test('worksheet includes exact commands for both platforms and all offline tasks', () => {
  const text = worksheet();
  assert.equal(readFileSync(new URL('../public/labs/artemis-messaging-worksheet.md',import.meta.url),'utf8'), text);
  assert.match(text, /JDK 21/); assert.match(text, /Maven Wrapper/);
  for (const step of [...lab.setup, ...stations.flatMap((s) => [...s.steps,...s.cleanup])]) {
    for (const platform of ['windows','unix']) {
      const command = commandText(step, platform);
      if (command) assert.ok(text.includes(command), `${step.id}: ${platform} commands missing`);
    }
  }
  for (const s of stations) {
    assert.ok(text.includes(s.prediction)); assert.ok(text.includes(s.adapt));
    s.checks.forEach((q) => assert.ok(text.includes(q.text)));
  }
  assert.ok(text.includes(lab.reflection)); assert.match(text, /self-assessment/);
});

test('published experiments preserve readiness, attempt counts and failure semantics', () => {
  const pubsub = stations[1];
  assert.match(pubsub.steps[0].commands[0].args, /--timeout 300000/);
  assert.match(pubsub.steps[1].commands[0].args, /--timeout 300000/);
  assert.match(pubsub.steps.find((s) => s.id === 'p-timeout').evidence, /exit code 2/);
  const failure = stations[2];
  assert.match(commandText(failure.steps.find((s) => s.id === 'f-poison')), /consume --count 5/);
  assert.match(commandText(failure.steps.find((s) => s.id === 'f-crash-recover')), /--timeout 10000/);
  assert.match(failure.steps.find((s) => s.id === 'f-crash').evidence, /exit 17/);
  assert.match(failure.explain.join(' '), /all messages consumed so far/);
  assert.match(failure.explain.join(' '), /not an end-to-end exactly-once/);
});

test('source setup keeps the prerequisite check separate from compilation', () => {
  const source = lab.setup.find((s) => s.id === 'get-source');
  const preflight = lab.setup.find((s) => s.id === 'check-build');
  const build = lab.setup.find((s) => s.id === 'build-source');
  assert.ok(lab.setup.indexOf(preflight) < lab.setup.indexOf(build));
  for (const platform of ['windows', 'unix']) {
    assert.ok(commandText(source, platform).includes(lab.referenceRevision));
    assert.ok(!commandText(source, platform).includes('clean verify'));
    assert.match(commandText(preflight, platform), /doctor\.(cmd|sh) build$/);
    assert.equal(commandText(build, platform).split('\n').length, 1);
    assert.match(commandText(build, platform), /-Ptraining clean verify$/);
  }
});
