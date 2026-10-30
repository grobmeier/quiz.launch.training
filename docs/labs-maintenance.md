# Maintain the Artemis pilot

## Source of truth

`src/app/labs/content/lab.mjs` owns setup, access policy, reference revision, common commands and the schedule. Each station module owns its prediction, terminal steps, two hints, three self-checks, adaptation and cleanup. `index.mjs` defines stable station order and URLs. Keep IDs stable when editing copy and bump the content version for a published teaching-content change.

Command records contain tool/arguments, not shell snippets imported from the training repository. `commandText` renders exact cmd.exe or POSIX commands. Each step identifies a terminal, lab-root working directory, readiness or preceding action, and expected evidence. Do not combine a foreground broker with dependent clients in one paste block. Subscribers have a five-minute receive window to allow starting the other terminals; a missing-history experiment deliberately uses five seconds and exit 2. Crash demonstrations deliberately exit 17.

After edits:

```sh
npm run worksheet
npm run check:content
npm test
npm run build
npm run check:export
```

The worksheet contains commands for both platforms, core tasks, spaces for local responses, content version and the reference revision. The printable route contains all stations and expands hints/reset guidance. The in-app browser exposes the print action but its native print dialog could not be inspected by automation. Review print pagination in a normal browser before publication. A print/save-to-PDF action uses the learner's local browser; it does not upload their worksheet.

## Reference revision and public access

The structured content pins the source revision and its matching JDK 21 Windows/Linux/macOS verification run. Source setup creates the learner branch from that exact revision, so it cannot silently select a different version of main. The current onboarding/public-access revision is `b71a2e92f276ff3b07c7801b0dde604b52f11b68` ([run 41070047281](https://github.com/grobmeier/artemis-java-jumpstart/actions/runs/41070047281)). Update revision, successful-run link and commands together when promoting a new lab revision. Download runtime artifacts before their seven-day expiry; never mirror them into this public repository.

The training repository is public, including Java source, exercises and worked solutions. Learners need no invitation to read or clone it. Contributions normally use forks and pull requests; public visibility grants no write or broker access. Keep the static website independent of the Java build and do not embed worked solutions in client-side assets. The local broker is the pilot default; a central trainer broker and network preflight are separate work.

## Validation performed for the first implementation

- The static export contains every requested Labs route, the print route and all ten existing exam routes.
- Content tests check station order, nine well-formed questions, terminal/namespace records, the 225-minute schedule, exact worksheet parity, and the intended failure counts/timeouts.
- The export audit rejects Java source files/JARs/ZIPs, worked solution declarations, runtime/process-log directories and key material. It is an additional check, not permission to copy unrelated source/runtime material into the public source tree.
- Browser review covered desktop and 320 CSS pixel widths; all nine correct-answer feedback paths; an incorrect-answer explanation; both hint levels; keyboard answering; platform retention across navigation/refresh; direct station refresh; checkbox labels and station navigation.
- Quiz regression review covered the catalogue, a real exceptions question, answer feedback, next question and preserving question 2 after a trip to Labs. An old trailing-slash parser loaded array questions for the exceptions route; the exam page now passes its explicit route parameter to the wrapper.
- The exact published baseline commands were rehearsed with the successful Linux runtime artifact on macOS/JDK 21, in an isolated path with spaces and an alternate local port: queue ID sets/backlog, independent copies, late subscriber and timeout 2, rollback/crash 17, three poison attempts, DLQ, repaired replay and empty queues passed. The Java reference suite separately passed 18/18 on macOS, Windows and Linux.

A real session with two trainees remains a manual pilot, including actual company-PC setup and timing feedback. No quantified learning-improvement claim follows from these implementation checks.

## Publication boundary

The owner approved connecting verification to deployment on 30 October 2026. The main-branch workflow calls the reusable verification workflow first. Only after that job succeeds does its dependent deployment job download the same run's static-site artifact, verify a non-empty index and static assets, load AWS credentials, synchronize the existing bucket and invalidate the existing CloudFront distribution. It does not rebuild after verification. Failed/skipped verification prevents publication, and concurrent production runs are serialized.

Branch pushes, pull requests and manual verification do not publish. Review the preview and print pagination before approving the website PR's merge: a push to main still triggers production publication automatically. The workflow change is prepared on the feature branch; no production publication or remote broker change was performed.

## Learning hub and quiz catalogue

The root introduces Labs and Quizzes and features the real Artemis pilot. `/quizzes/` is the direct quiz catalogue; `/exams/<exam-name>/` and all existing Labs routes remain stable. The activity model derives quiz metadata from the existing catalogue and lab metadata from the shared lab content. Format and topic filters operate only on that catalogue and never write exam storage.

`QuizActions` reads each quiz's existing start state after hydration and offers Continue/Restart. Only the explicit Restart button clears that quiz through the existing storage helper. Browser regression checks verified returning to question 2 after filtering and restarting only after the explicit action. No lab answers/progress or search terms are sent as analytics events.

The companion business-site training page retains global News/Writing navigation and its homepage's AI focus. Its Quizzes CTA uses `/quizzes/`, so publish this hub before the companion training-page release. The Launch Training redirect stays as configured.
