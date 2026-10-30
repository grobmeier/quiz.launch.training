# Messaging with Apache Artemis — worksheet

Content version: 1.0.1 | Private reference: 995cc140b618c6a03e436920897dc1b5671e9164

https://github.com/grobmeier/artemis-java-jumpstart

Repository access requires an invitation from your trainer.

An online shop accepts orders while billing and shipping work independently. Follow an order through queues, events and a controlled failure, using evidence from your own local broker.

## Prepare

- Java classes, loops, exceptions and basic Maven usage. No messaging experience required.

- A supplied JDK 21 and four separate cmd.exe terminals on Windows, or shells on Linux/macOS.

- An invitation to the private training repository for editable source, or the trainer’s verified runtime ZIP for demonstrations.

- Your own local broker. Docker, administrator rights and a remote broker are not required.

The trainer can distribute a verified runtime ZIP and JDK 21 before the session. Extract both and follow RUN.md; local demonstrations need no Maven or network. Editing exercises needs the full source and a build environment. An offline source build additionally requires a prepared Maven Wrapper distribution and dependency/plugin cache. A runtime ZIP alone cannot compile exercises.

Work on your own local broker first. With a partner, alternate driver and navigator every 15–20 minutes: one operates, the other predicts and reconciles IDs. Each person demonstrates one changed condition.

Make your initial prediction before revealing hints or asking AI. AI assistance is optional and subject to company policy. Verify suggestions against your code and logs; do not provide credentials, confidential code or company data. You never need to upload prompts or chat histories.

Record predictions, business-ID sets and explanations locally. Nothing is submitted. All commands run in separate terminals as labelled. For repeats choose fresh namespaces consistently.

## Common setup

Verify java -version and javac -version use the supplied JDK 21. Set JAVA_HOME to its root in every terminal before building or running scripts. Use approved company proxy/certificate settings. Runtime-only learners extract the trainer ZIP and begin at broker start; source learners build first.

### Every terminal — environment — Check your JDK before cloning or starting scripts

Any directory

Use JDK 21 and set JAVA_HOME to its root directory in every terminal. The Windows examples use Command Prompt (cmd.exe), not PowerShell: type cmd if your terminal starts PowerShell. In cmd.exe use set "JAVA_HOME=C:\path\to\jdk-21"; in a Unix shell use export JAVA_HOME="/path/to/jdk-21". Replace the example with your real JDK path, then add its bin directory to PATH. New terminals do not inherit settings made in another terminal.

**Windows cmd.exe**

```bat
java -version
javac -version
echo %JAVA_HOME%
```

**Linux/macOS shell**

```sh
java -version
javac -version
printenv JAVA_HOME
```

Observe: Both version commands report 21. JAVA_HOME names the JDK directory containing bin, not bin itself. Stop here and ask your trainer for the supplied JDK if either command fails.

### Setup terminal — Get the source on a personal branch

Parent directory for your training checkout

Accept your personal GitHub invitation first. Replace YOUR_GITHUB_NAME with your own username in the branch name. The branch starts at the verified revision below, even while main changes. These commands need Git and initial download access. A GitHub Code → Download ZIP download is source and still needs this build; it is different from the prebuilt runtime ZIP containing lib/lab.jar. If you have the runtime ZIP, extract it fully, follow RUN.md, and skip this source-build step. After cd, run subsequent steps from this repository root.

**Windows cmd.exe**

```bat
git clone https://github.com/grobmeier/artemis-java-jumpstart.git
cd artemis-java-jumpstart
git switch -c feature/YOUR_GITHUB_NAME-labs 995cc140b618c6a03e436920897dc1b5671e9164
```

**Linux/macOS shell**

```sh
git clone https://github.com/grobmeier/artemis-java-jumpstart.git
cd artemis-java-jumpstart
git switch -c feature/YOUR_GITHUB_NAME-labs 995cc140b618c6a03e436920897dc1b5671e9164
```

Observe: The source checkout is open on your personal branch at the reference revision. If cloning or switching fails, stop here; do not run later commands in a different directory.

### Setup terminal — source checkout only — Check the unbuilt source

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

Run this before compilation. It does not need a lab JAR or a broker. If it fails, fix the reported JDK, JAVA_HOME or incomplete-download problem before continuing. Runtime ZIP users skip this source-only step.

**Windows cmd.exe**

```bat
.\scripts\doctor.cmd build
```

**Linux/macOS shell**

```sh
./scripts/doctor.sh build
```

Observe: BUILD_READY. The JDK and Maven Wrapper are present. Network/proxy access is checked during the next build.

### Setup terminal — source checkout only — Build and verify before opening broker terminals

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

Only continue after the previous check succeeds. The first build downloads dependencies and runs real broker tests, so allow several minutes. Stop and read the build error if it fails. Runtime ZIP users skip this source-only step.

**Windows cmd.exe**

```bat
.\mvnw.cmd -Ptraining clean verify
```

**Linux/macOS shell**

```sh
./mvnw -Ptraining clean verify
```

Observe: BUILD SUCCESS. The training profile builds editable exercises and separate reference solutions. Its tests verify the reference implementation; green CI does not grade every trainee solution.

### Terminal 1 — broker — Start the broker in the foreground

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

Keep this terminal open. Do not paste client commands into it. Wait for BROKER_READY before continuing in another terminal.

**Windows cmd.exe**

```bat
.\scripts\broker.cmd start
```

**Linux/macOS shell**

```sh
./scripts/broker.sh start
```

Observe: BROKER_READY. Default TCP address: 127.0.0.1:61616, local loopback only.

### Terminal 3 — inspection — Check the runtime connection

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

Open a separate terminal in the same lab root. All station commands below use explicit namespaces. For a repeat, replace the namespace in every cooperating client with a fresh value.

**Windows cmd.exe**

```bat
.\scripts\doctor.cmd runtime
```

**Linux/macOS shell**

```sh
./scripts/doctor.sh runtime
```

Observe: TCP and authentication successful. The broker remains running in Terminal 1.

lab = finished demos; exercises = editable implementations; solutions = separate worked examples in the private repository. Stop clients and your broker before rebuilding changed source with -Ptraining; Windows may lock running JARs. Restart the broker after BUILD SUCCESS. Green reference CI is not automatic grading of your implementation.

## Station 1: Queues and competing consumers

45 minutes | S01 / S02 · Exercise A

Explain how a queue retains waiting work and how consumers share it.

Shipping workers process order commands. When workers stop, orders should wait. When a second worker joins, it should help with the same backlog.

Topology: Order producer → One queue → Worker Alice / Worker Bob

The producer sends to one queue. Alice and Bob compete for its work; they do not each receive a full copy.

### 1. Predict

If two workers consume the same queue, which orders will each worker receive? What remains available when both workers stop?

My prediction:

____________________________________________________________

### 2. Run

### Terminal 3 — producer / inspection — Send with no worker

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

Leave Terminal 2 idle. Terminal 1 must already show BROKER_READY. Use pilot-q1 only for a fresh run.

**Windows cmd.exe**

```bat
.\scripts\lab.cmd s01 produce --count 10 --namespace pilot-q1
.\scripts\lab.cmd s01 browse --namespace pilot-q1
```

**Linux/macOS shell**

```sh
./scripts/lab.sh s01 produce --count 10 --namespace pilot-q1
./scripts/lab.sh s01 browse --namespace pilot-q1
```

Observe: Ten SEND business IDs and visible=10. Copy the ID set into your worksheet.

### Terminal 2 — worker Alice — Process the waiting batch

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

Use the same namespace as the producer. This bounded worker exits after ten deliveries.

**Windows cmd.exe**

```bat
.\scripts\lab.cmd s01 consume --worker alice --count 10 --namespace pilot-q1
```

**Linux/macOS shell**

```sh
./scripts/lab.sh s01 consume --worker alice --count 10 --namespace pilot-q1
```

Observe: Ten COMMIT records. Reconcile the committed business IDs with the sent set.

### Terminal 3 — inspection — Inspect after the worker exits

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

Wait for Terminal 2 to finish before browsing.

**Windows cmd.exe**

```bat
.\scripts\lab.cmd s01 browse --namespace pilot-q1
```

**Linux/macOS shell**

```sh
./scripts/lab.sh s01 browse --namespace pilot-q1
```

Observe: visible=0. Browsing is a snapshot and excludes active deliveries.

### Terminal 2 — worker Alice — Start the first competing worker

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

Use a new namespace, pilot-q2. This worker stays active; open Terminal 3 separately.

**Windows cmd.exe**

```bat
.\scripts\lab.cmd s02 consume --worker alice --continuous --sleep 150 --namespace pilot-q2
```

**Linux/macOS shell**

```sh
./scripts/lab.sh s02 consume --worker alice --continuous --sleep 150 --namespace pilot-q2
```

Observe: Wait for READY in Terminal 2.

### Terminal 3 — worker Bob — Start the second competing worker

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

Do not publish until BOTH workers show READY. Each worker owns a connection and transacted session.

**Windows cmd.exe**

```bat
.\scripts\lab.cmd s02 consume --worker bob --continuous --sleep 150 --namespace pilot-q2
```

**Linux/macOS shell**

```sh
./scripts/lab.sh s02 consume --worker bob --continuous --sleep 150 --namespace pilot-q2
```

Observe: Wait for READY in Terminal 3.

### Terminal 4 — producer / inspection — Send shared work

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

Only after both READY signals. Keep the workers running until the combined committed set is complete.

**Windows cmd.exe**

```bat
.\scripts\lab.cmd s02 produce --count 10 --namespace pilot-q2
```

**Linux/macOS shell**

```sh
./scripts/lab.sh s02 produce --count 10 --namespace pilot-q2
```

Observe: Both workers participate. The union of their committed IDs equals the sent set, and their sets are disjoint in this controlled failure-free run. An equal split or alternating order is not required.

My evidence / sent and committed ID sets:

____________________________________________________________

### 3. Break

### Terminals 2 and 3 — workers — Stop both workers after the complete set

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

Use Ctrl+C in each worker terminal after all ten business IDs have committed. Do not crash during processing in this experiment; Station 3 covers that case.

Observe: Both worker processes have exited.

### Terminal 4 — producer / inspection — Create a backlog

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

First confirm visible=0, then send three orders while both workers remain stopped.

**Windows cmd.exe**

```bat
.\scripts\lab.cmd s02 browse --namespace pilot-q2
.\scripts\lab.cmd s02 produce --count 3 --namespace pilot-q2
.\scripts\lab.cmd s02 browse --namespace pilot-q2
```

**Linux/macOS shell**

```sh
./scripts/lab.sh s02 browse --namespace pilot-q2
./scripts/lab.sh s02 produce --count 3 --namespace pilot-q2
./scripts/lab.sh s02 browse --namespace pilot-q2
```

Observe: The last browse shows visible=3. Work is retained even though processing has stopped.

My evidence / sent and committed ID sets:

____________________________________________________________

### 4. Explain

- Where did the three waiting orders live after the producer exited?

- Show the sent and committed ID sets. Why do ten total commits not imply ten at each worker?

- Find receive, business work and session.commit() in the private code. How does a missing commit change the conclusion?

My explanation:

____________________________________________________________

### Staged hints (after prediction)

Hint 1: A queue retains work for its consumers. Two consumers on that queue share deliveries; they are not independent subscriptions.

Hint 2: Use a transacted session per worker. Receive, perform the simulated work, then commit. Use continuous mode when each worker’s share is unknown and compare the combined business-ID set.

### Self-checks

1. A producer sends persistent orders with no worker running. What should you observe?

   A. The orders wait at the broker.

   B. All orders disappear when the producer exits.

   C. A second producer must stay connected.

My answer and reason: ________________________________________

2. Two workers consume one queue. Does each receive a complete copy?

   A. Yes, both must receive all ten orders.

   B. No. They share the work on that queue.

My answer and reason: ________________________________________

3. Which is a valid success criterion for the controlled two-worker run?

   A. Exactly five commits per worker, alternating every time.

   B. The complete combined ID set, no duplicate commits, both workers participating.

My answer and reason: ________________________________________

### 5. Adapt

Complete or extend AExercise.java in the private exercises module. Implement the producer and transacted consumer using direct Jakarta Messaging calls. Change batch size and processing delay, predict the new result, then compare the ID sets. Use a fresh namespace in every exercise client; A uses S02 destinations. Before rebuilding with -Ptraining, stop all clients and your local broker; Windows may lock running JARs. After BUILD SUCCESS, restart the broker and repeat with a fresh namespace. Worked solutions remain in the separate private solutions module.

My changed condition, prediction and result:

____________________________________________________________

Which suggestion did you accept or reject, and what evidence informed that decision?

My reflection:

____________________________________________________________

### Completion (self-assessment)

- [ ] I showed waiting work and an empty queue after processing.

- [ ] I reconciled all business IDs and explained shared consumption.

- [ ] I changed batch size or delay in exercise A and compared the evidence.

### Cleanup

### Terminal 2 — worker — Drain the known three-order backlog

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

Both continuous workers must be stopped. Process the three orders created in the Break step.

**Windows cmd.exe**

```bat
.\scripts\lab.cmd s02 consume --worker cleanup --count 3 --namespace pilot-q2
```

**Linux/macOS shell**

```sh
./scripts/lab.sh s02 consume --worker cleanup --count 3 --namespace pilot-q2
```

Observe: Three COMMITs, then process exit.

### Terminal 4 — inspection — Confirm the station is clear

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

Wait for the cleanup worker to exit. Leave the local broker running for Station 2.

**Windows cmd.exe**

```bat
.\scripts\lab.cmd s02 browse --namespace pilot-q2
```

**Linux/macOS shell**

```sh
./scripts/lab.sh s02 browse --namespace pilot-q2
```

Observe: visible=0. If your adaptation used another namespace, drain its known remaining count separately.

## Station 2: Events and independent subscribers

45 minutes | S03 · Exercise B · S04 optional

Distinguish shared work from independent interest in the same event.

An accepted order matters to both billing and shipping. Each service needs its own complete set of future OrderCreated events, even though they work at different speeds.

Topology: Order events → topic → Billing subscription → Shipping subscription

The topic fans out to independent billing and shipping subscriptions. Both active subscribers receive every published event; they do not share one queue.

### 1. Predict

How will billing and shipping differ from the two workers in Station 1? Which events will a subscriber created after the first batch receive?

My prediction:

____________________________________________________________

### 2. Run

### Terminal 2 — billing — Create the billing interest

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

Terminal 1 remains the local broker. Billing and shipping use independent non-durable consumers, each with its own connection. Start the other subscriber and producer within the five-minute receive timeout; if you time out before publishing, restart both in a fresh namespace before sending.

**Windows cmd.exe**

```bat
.\scripts\lab.cmd s03 subscribe --subscription billing --worker billing --count 3 --timeout 300000 --namespace pilot-events
```

**Linux/macOS shell**

```sh
./scripts/lab.sh s03 subscribe --subscription billing --worker billing --count 3 --timeout 300000 --namespace pilot-events
```

Observe: READY in Terminal 2, before publishing.

### Terminal 3 — shipping — Create the shipping interest

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

Use the same topic namespace and a separate process. Do not publish yet.

**Windows cmd.exe**

```bat
.\scripts\lab.cmd s03 subscribe --subscription shipping --worker shipping --count 3 --timeout 300000 --namespace pilot-events
```

**Linux/macOS shell**

```sh
./scripts/lab.sh s03 subscribe --subscription shipping --worker shipping --count 3 --timeout 300000 --namespace pilot-events
```

Observe: READY in Terminal 3. Both subscribers must now be ready.

### Terminal 4 — producer — Publish the first three events

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

Only after both subscribers show READY. Record the SEND IDs and compare them with each subscriber’s COMMIT set after both exit.

**Windows cmd.exe**

```bat
.\scripts\lab.cmd s03 produce --count 3 --namespace pilot-events
```

**Linux/macOS shell**

```sh
./scripts/lab.sh s03 produce --count 3 --namespace pilot-events
```

Observe: Billing receives all three business event IDs. Shipping independently receives those same three IDs. Repeated IDs across independent subscriptions are expected copies.

### Terminal 2 — late subscriber — Create a late interest

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

The initial billing process has exited. This new non-durable subscriber is created after the first batch. Its CLI subscription label does not register an offline durable identity.

**Windows cmd.exe**

```bat
.\scripts\lab.cmd s03 subscribe --subscription late --worker late --count 2 --timeout 300000 --namespace pilot-events
```

**Linux/macOS shell**

```sh
./scripts/lab.sh s03 subscribe --subscription late --worker late --count 2 --timeout 300000 --namespace pilot-events
```

Observe: READY for late, with no replay of the earlier three events.

### Terminal 4 — producer — Publish two future events

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

Wait for late to show READY first. Compare its set only with this second SEND set.

**Windows cmd.exe**

```bat
.\scripts\lab.cmd s03 produce --count 2 --namespace pilot-events
```

**Linux/macOS shell**

```sh
./scripts/lab.sh s03 produce --count 2 --namespace pilot-events
```

Observe: Late receives exactly the two future IDs and exits. It does not receive the original three.

My evidence / sent and committed ID sets:

____________________________________________________________

### 3. Break

### Terminal 4 — producer — Publish before the next subscriber exists

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

All prior bounded subscribers must have exited. Predict the result before sending. Use a fresh namespace for this controlled missing-history experiment.

**Windows cmd.exe**

```bat
.\scripts\lab.cmd s03 produce --count 2 --namespace pilot-late-break
```

**Linux/macOS shell**

```sh
./scripts/lab.sh s03 produce --count 2 --namespace pilot-late-break
```

Observe: Two SEND records. There is no active non-durable subscriber to receive them.

### Terminal 2 — new subscriber — Observe missing history with a bounded wait

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

Now subscribe, without sending any new events. The five-second timeout is deliberate. Do not retry indefinitely or assume a networking failure.

**Windows cmd.exe**

```bat
.\scripts\lab.cmd s03 subscribe --subscription after --worker after --count 2 --timeout 5000 --namespace pilot-late-break
```

**Linux/macOS shell**

```sh
./scripts/lab.sh s03 subscribe --subscription after --worker after --count 2 --timeout 5000 --namespace pilot-late-break
```

Observe: READY, then TIMEOUT received=0 and exit code 2. This subscriber did not exist for the earlier sends, so the result is expected.

My evidence / sent and committed ID sets:

____________________________________________________________

### 4. Explain

- Compare the two complete first-batch ID sets with Station 1’s shared set. Where was a copy created?

- Why did late receive only the second batch? Why does the CLI label not create durability?

- What would need to be registered before an offline period? Keep durable subscription identity and persistent message delivery as separate properties. S04 is an optional follow-up.

My explanation:

____________________________________________________________

### Staged hints (after prediction)

Hint 1: Independent interests need independent subscriptions. Two consumers on the same queue would divide one copy.

Hint 2: Create each consumer, call connection.start(), then signal READY before publishing. A new non-durable consumer has no prior history. Durable interest must be registered first with a stable identity.

### Self-checks

1. Billing and shipping have separate active subscriptions. Three events are published after both are READY. What is expected?

   A. Three events in total shared between the services.

   B. The complete three-event set at each service.

My answer and reason: ________________________________________

2. A new non-durable subscriber starts after the first three events. What history does it receive?

   A. All previous events because it has a subscription label.

   B. None of that earlier batch; only events published while it is active.

My answer and reason: ________________________________________

3. Which change can retain events for an offline interest?

   A. Register a durable subscription before the offline sends and reconnect with its stable identity.

   B. Create a new non-durable subscription after publishing.

My answer and reason: ________________________________________

### 5. Adapt

Complete or extend BExercise.java in the private exercises module. Create a third independent interest (for example, analytics), each on its own connection, using the same topic. Start all three and confirm READY before publishing. Predict which future IDs each receives. Use a fresh exercise namespace; do not replace independent subscriptions with consumers sharing one queue. Before rebuilding with -Ptraining, stop all clients and your local broker; Windows may lock running JARs. After BUILD SUCCESS, restart the broker and repeat with a fresh namespace.

My changed condition, prediction and result:

____________________________________________________________

Which suggestion did you accept or reject, and what evidence informed that decision?

My reflection:

____________________________________________________________

### Completion (self-assessment)

- [ ] I showed the complete first-batch set at billing and shipping.

- [ ] I explained the late subscriber’s two-event result and expected timeout.

- [ ] I added a third independent interest and predicted its future ID set.

### Cleanup

### Terminals 2 and 3 — subscribers — Close remaining non-durable consumers

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

The bounded subscribers should have exited. Stop any adaptation consumers still running with Ctrl+C. Keep the local broker in Terminal 1 for Station 3.

Observe: No subscriber process remains active. Non-durable subscription resources disappear with their connections; there is no durable identity to unsubscribe in S03.

## Station 3: Acknowledgement, retry and dead letters

60 minutes | S05 / S06 · Exercise D

Explain what is confirmed, what can be delivered again, and how failed work is recovered deliberately.

A shipping worker receives an order and fails before confirming it. Another order contains invalid business data. Recover deliberately without treating a receive as a completed business effect.

Topology: Order queue → Transacted worker · rollback / commit → After 3 failed attempts → DLQ → repair / replay

A transacted worker commits healthy orders or rolls back failed deliveries. After three failed total attempts, invalid work moves to a dead letter queue for inspection and deliberate repaired replay.

### 1. Predict

If a worker receives an order and stops before JMS commit, can that same business ID return? Will waiting and retrying repair an invalid order?

My prediction:

____________________________________________________________

### 2. Run

### Terminal 3 — producer — Send one identifiable order

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

The local broker remains in Terminal 1. Use a fresh namespace for this rollback experiment.

**Windows cmd.exe**

```bat
.\scripts\lab.cmd s05 produce --count 1 --id ack-demo --namespace pilot-ack
```

**Linux/macOS shell**

```sh
./scripts/lab.sh s05 produce --count 1 --id ack-demo --namespace pilot-ack
```

Observe: One SEND. Record its business ID and JMSMessageID separately.

### Terminal 2 — worker — Receive, then roll back

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

This worker intentionally rolls back one delivery and exits. It does not commit a successful business result.

**Windows cmd.exe**

```bat
.\scripts\lab.cmd s05 consume --count 1 --rollback --namespace pilot-ack
```

**Linux/macOS shell**

```sh
./scripts/lab.sh s05 consume --count 1 --rollback --namespace pilot-ack
```

Observe: RECEIVE followed by ROLLBACK for the same business ID.

### Terminal 2 — recovery worker — Receive the rolled-back work again

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

Use the same namespace. This run commits the recovered delivery.

**Windows cmd.exe**

```bat
.\scripts\lab.cmd s05 consume --count 1 --timeout 10000 --namespace pilot-ack
```

**Linux/macOS shell**

```sh
./scripts/lab.sh s05 consume --count 1 --timeout 10000 --namespace pilot-ack
```

Observe: Same business ID, JMSRedelivered=true and attempt=2 in this controlled run; then COMMIT. An unavailable delivery count is reported as unknown, not invented.

My evidence / sent and committed ID sets:

____________________________________________________________

### 3. Break

### Terminal 3 — producer — Prepare a fresh crash experiment

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

Choose a separate namespace so prior delivery attempts do not affect this comparison.

**Windows cmd.exe**

```bat
.\scripts\lab.cmd s05 produce --count 1 --id crash-demo --namespace pilot-crash
```

**Linux/macOS shell**

```sh
./scripts/lab.sh s05 produce --count 1 --id crash-demo --namespace pilot-crash
```

Observe: One fresh business ID to compare across the crash.

### Terminal 2 — worker — Crash before JMS commit

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

The --crash option deliberately terminates this client process. Exit code 17 is expected; the broker remains running.

**Windows cmd.exe**

```bat
.\scripts\lab.cmd s05 consume --count 1 --crash --namespace pilot-crash
```

**Linux/macOS shell**

```sh
./scripts/lab.sh s05 consume --count 1 --crash --namespace pilot-crash
```

Observe: RECEIVE, CRASH_BEFORE_JMS_COMMIT and exit 17. There is no successful JMS COMMIT.

### Terminal 2 — recovery worker — Wait for broker detection and redelivery

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

The broker may need several seconds to detect the dead connection. Use the bounded ten-second recovery timeout.

**Windows cmd.exe**

```bat
.\scripts\lab.cmd s05 consume --count 1 --timeout 10000 --namespace pilot-crash
```

**Linux/macOS shell**

```sh
./scripts/lab.sh s05 consume --count 1 --timeout 10000 --namespace pilot-crash
```

Observe: The same business ID returns with redelivery metadata, then commits. Receive alone did not confirm completion.

### Terminal 3 — producer — Send healthy work and one invalid order

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

S06 makes order-2 invalid by setting priorityClass=invalid. Use a fresh namespace for this three-order experiment.

**Windows cmd.exe**

```bat
.\scripts\lab.cmd s06 produce --count 3 --namespace pilot-retry
```

**Linux/macOS shell**

```sh
./scripts/lab.sh s06 produce --count 3 --namespace pilot-retry
```

Observe: Three SEND business IDs. Identify the business ID associated with order-2.

### Terminal 2 — worker — Observe the attempt limit

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

count counts ALL deliveries, including rollbacks. Two healthy deliveries plus three attempts at the invalid order means five receives.

**Windows cmd.exe**

```bat
.\scripts\lab.cmd s06 consume --count 5 --namespace pilot-retry
```

**Linux/macOS shell**

```sh
./scripts/lab.sh s06 consume --count 5 --namespace pilot-retry
```

Observe: Two healthy COMMITs, three ROLLBACKs for the invalid business ID, approximately 500 ms redelivery delay. Three total attempts are two additional retries. Healthy work continues.

### Terminal 3 — inspection — Inspect before repairing

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

Wait for the worker to exit. DLQ means dead letter queue: failed work retained for investigation after the attempt limit.

**Windows cmd.exe**

```bat
.\scripts\lab.cmd s06 browse --target dlq --namespace pilot-retry
```

**Linux/macOS shell**

```sh
./scripts/lab.sh s06 browse --target dlq --namespace pilot-retry
```

Observe: Exactly one failed business ID, matching order-2. Browsing does not consume it.

### Terminal 3 — deliberate replay — Repair and replay the known failed order

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

The demonstration repairs priorityClass in both JSON payload and JMS properties, then commits its DLQ receive and new send together. Replaying without fixing invalid data would fail again.

**Windows cmd.exe**

```bat
.\scripts\lab.cmd s06 replay --count 1 --namespace pilot-retry
```

**Linux/macOS shell**

```sh
./scripts/lab.sh s06 replay --count 1 --namespace pilot-retry
```

Observe: REPLAY preserves the business ID and produces a new technical JMS send. Business identity and JMSMessageID are different concepts.

### Terminal 2 — worker — Process the repaired work

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

Consume the deliberate replay from the same namespace.

**Windows cmd.exe**

```bat
.\scripts\lab.cmd s06 consume --count 1 --namespace pilot-retry
```

**Linux/macOS shell**

```sh
./scripts/lab.sh s06 consume --count 1 --namespace pilot-retry
```

Observe: One successful COMMIT for the repaired business ID.

My evidence / sent and committed ID sets:

____________________________________________________________

### 4. Explain

- In a transacted session, commit confirms receives and publishes sends against the same broker; rollback reverses both. Find these calls in the private Java code.

- AUTO_ACKNOWLEDGE confirms a synchronous delivery when receive returns successfully, or a listener delivery after onMessage returns successfully. Later business failure is not automatically protected.

- CLIENT_ACKNOWLEDGE acknowledges all messages consumed so far in that session, not just the individual message object. These lab workers instead use explicit transacted sessions.

- Compare the business ID and delivery metadata before and after rollback/crash. Explain three total attempts versus two retries and why invalid business data needs repair.

- At-least-once delivery permits duplicates. A JMS commit does not prove an external payment or email happened once. S09’s atomic local H2 effect is a later extension, not an end-to-end exactly-once guarantee.

My explanation:

____________________________________________________________

### Staged hints (after prediction)

Hint 1: Locate the transaction boundary. A receive and an external business effect are different events. An uncommitted delivery can be delivered again.

Hint 2: Rollback priorityClass=invalid; commit healthy work. With three produced messages, count=5 includes two healthy deliveries plus three poison attempts. Repair both payload and property on deliberate replay, preserving the business ID.

### Self-checks

1. A transacted worker crashes after receive and before JMS commit. What must you allow for?

   A. The same business ID can be delivered again.

   B. Receive proves the external business effect happened exactly once.

My answer and reason: ________________________________________

2. The broker permits three total delivery attempts. How many additional retries follow the first attempt?

   A. Three retries.

   B. Two retries.

My answer and reason: ________________________________________

3. What is the deliberate recovery path for invalid business data in the DLQ?

   A. Replay forever until waiting makes the data valid.

   B. Inspect, repair payload and properties, preserve the business ID, then replay and verify.

My answer and reason: ________________________________________

### 5. Adapt

In private DExercise.java, implement the invalid-data failure branch: rollback when priorityClass=invalid, otherwise commit after successful work. Identify receive/work/commit in the code, stop clients and the broker before rebuilding with -Ptraining, then restart the broker and repeat in a fresh namespace and predict the five-delivery result. If time remains, implement inspection and repaired replay yourself; the full exercise can continue after the pilot. Keep complete worked solutions in the private solutions module.

My changed condition, prediction and result:

____________________________________________________________

Which suggestion did you accept or reject, and what evidence informed that decision?

My reflection:

____________________________________________________________

### Completion (self-assessment)

- [ ] I compared one business ID and redelivery metadata across rollback and crash.

- [ ] I distinguished three attempts from two retries and showed the invalid order in the DLQ.

- [ ] I verified repaired replay, empty input/DLQ, and explained the commit boundary without claiming exactly-once.

### Cleanup

### Terminal 3 — inspection — Verify empty input and DLQ

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

Wait for the repaired worker to exit. These two snapshots should agree with your recorded commits.

**Windows cmd.exe**

```bat
.\scripts\lab.cmd s06 browse --namespace pilot-retry
.\scripts\lab.cmd s06 browse --target dlq --namespace pilot-retry
```

**Linux/macOS shell**

```sh
./scripts/lab.sh s06 browse --namespace pilot-retry
./scripts/lab.sh s06 browse --target dlq --namespace pilot-retry
```

Observe: Both show visible=0. If either differs, investigate your business-ID evidence before removing anything.

### Terminal 3 — inspection — Check the acknowledgement experiments

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

Both recovery workers should already have exited. Drain any adaptation namespace separately using its known count; stop remaining workers.

**Windows cmd.exe**

```bat
.\scripts\lab.cmd s05 browse --namespace pilot-ack
.\scripts\lab.cmd s05 browse --namespace pilot-crash
```

**Linux/macOS shell**

```sh
./scripts/lab.sh s05 browse --namespace pilot-ack
./scripts/lab.sh s05 browse --namespace pilot-crash
```

Observe: Both show visible=0. Continue to the lab recap to stop your owned local broker.

## Debrief and finish

Each learner demonstrates one changed condition and explains the evidence.

Stop all workers with Ctrl+C. Ask the local broker to stop and wait for its process to exit. A full reset is optional and deletes your owned broker messages; use it only for an exclusively owned local lab after every client and the broker have stopped. Ownership-marker, path and process-lock guards must remain intact. The H2 ledger is separate. Never reset a shared remote broker for an individual exercise.

### Terminal 4 — control — Stop your local broker

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

Stop all workers first, request broker stop, then wait for Terminal 1 to exit.

**Windows cmd.exe**

```bat
.\scripts\broker.cmd stop
```

**Linux/macOS shell**

```sh
./scripts/broker.sh stop
```

Observe: Broker process has exited.

### Terminal 4 — control — Optional full local reset

Lab root: the folder containing mvnw.cmd (source) or RUN.md (runtime ZIP).

Only for your stopped, exclusively owned local broker dataset. Never a shared remote broker.

**Windows cmd.exe**

```bat
.\scripts\broker.cmd reset --confirm
```

**Linux/macOS shell**

```sh
./scripts/broker.sh reset --confirm
```

Observe: Owned broker data deleted; H2 ledger preserved.

Optional private-repository extensions: S04 durable subscriptions, S09 atomic local idempotency, selectors and other scenarios. No exactly-once end-to-end guarantee follows from these demonstrations.
