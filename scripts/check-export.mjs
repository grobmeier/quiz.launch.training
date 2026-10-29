import assert from 'node:assert/strict';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { stations, lab } from '../src/app/labs/content/index.mjs';
const root = new URL('../out/', import.meta.url).pathname;
const paths = ['', 'labs/', 'labs/artemis-messaging/', 'labs/artemis-messaging/print/', ...stations.map((s) => `labs/artemis-messaging/${s.id}/`)];
const catalogue = readFileSync(new URL('../src/app/exams-data/catalogue.js',import.meta.url),'utf8');
for (const [,exam] of catalogue.matchAll(/exam:\s*['"]([^'"]+)['"]/g)) paths.push(`exams/${exam}/`);
assert.equal(paths.filter((p) => p.startsWith('exams/')).length, 10, 'Preserve all ten existing exams');
for (const path of paths) {
  const html = readFileSync(join(root,path,'index.html'),'utf8');
  assert.match(html, /<html lang="en"/);
  assert.match(html, /Main navigation/);
}
const overview = readFileSync(join(root,'labs/artemis-messaging/index.html'),'utf8');
assert.ok(overview.includes(lab.accessNote));
for (const s of stations) {
  const html = readFileSync(join(root,`labs/artemis-messaging/${s.id}/index.html`),'utf8');
  assert.ok(html.includes(s.title));
  assert.equal((html.match(/<legend>/g) || []).length, 3);
  assert.equal((html.match(/<summary>Hint /g) || []).length, 2);
}
const print = readFileSync(join(root,'labs/artemis-messaging/print/index.html'),'utf8');
assert.equal((print.match(/<summary>Hint /g) || []).length, 6);
assert.equal((print.match(/<details open=""/g) || []).length, 7, 'Print expands hints and local reset instructions');
function audit(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir,name);
    if (statSync(path).isDirectory()) { assert.ok(!['solutions','runtime','process-logs'].includes(name)); audit(path); continue; }
    assert.ok(!/\.(?:java|jar|zip|p12|jks|pem|key|log)$/.test(name), `Private artifact in public export: ${name}`);
    if (/\.(?:html|js|json|txt|md)$/.test(name)) {
      const text=readFileSync(path,'utf8');
      assert.ok(!text.includes('package de.jumpstart;'), `Private Java source in ${name}`);
      assert.ok(!/class [A-F]Solution\b/.test(text), `Worked solution in ${name}`);
      assert.ok(!/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/.test(text), `Private key in ${name}`);
    }
  }
}
audit(root);
console.log(`Verified ${paths.length} direct static routes, worksheet and public export boundary.`);
