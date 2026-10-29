# Messaging with Apache Artemis — worksheet

Content version: 1.0.0 | Private reference: 71fc36e

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

Verify java -version and javac -version use the supplied JDK 21. Set JAVA_HOME to its root if needed. Use approved company proxy/certificate settings. Runtime-only learners extract the trainer ZIP and begin at broker start; source learners build first.

### Setup terminal — Get source and build once

Parent directory for your training checkout

Accept your personal GitHub invitation first. Replace YOUR_GITHUB_NAME with your own username in the branch name. These commands need Git and initial download access. After cd, run subsequent steps from this repository root.

**Windows cmd.exe**

```bat
git clone https://github.com/grobmeier/artemis-java-jumpstart.git
cd artemis-java-jumpstart
git switch -c feature/YOUR_GITHUB_NAME-labs
.\mvnw.cmd -Ptraining clean verify
```

**Linux/macOS shell**

```sh
git clone https://github.com/grobmeier/artemis-java-jumpstart.git
cd artemis-java-jumpstart
git switch -c feature/YOUR_GITHUB_NAME-labs
./mvnw -Ptraining clean verify
```

Observe: The training profile builds editable exercises and separate reference solutions. Its tests verify the reference implementation; green CI does not grade every trainee solution.

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

lab = finished demos; exercises = editable implementations; solutions = separate worked examples in the private repository. Rebuild changed source with -Ptraining. Green reference CI is not automatic grading of your implementation.

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

Complete or extend AExercise.java in the private exercises module. Implement the producer and transacted consumer using direct Jakarta Messaging calls. Change batch size and processing delay, predict the new result, then compare the ID sets. Use a fresh namespace in every exercise client; A uses S02 destinations. Rebuild with -Ptraining. Worked solutions remain in the separate private solutions module.

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
