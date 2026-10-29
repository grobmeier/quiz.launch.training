# Maintain the Artemis pilot

## Source of truth

`src/app/labs/content/lab.mjs` owns setup, access policy, reference revision, common commands and the schedule. Each station module owns its prediction, terminal steps, two hints, three self-checks, adaptation and cleanup. `index.mjs` defines stable station order and URLs. Keep IDs stable when editing copy and bump the content version for a published teaching-content change.

Command records contain tool/arguments, not shell snippets imported from the private repository. `commandText` renders exact cmd.exe or POSIX commands. Each step identifies a terminal, lab-root working directory, readiness or preceding action, and expected evidence. Do not combine a foreground broker with dependent clients in one paste block. Subscribers have a 60-second receive window to allow starting the other terminals; a missing-history experiment deliberately uses five seconds and exit 2. Crash demonstrations deliberately exit 17.

After edits:

```sh
npm run worksheet
npm run check:content
npm test
npm run build
npm run check:export
```

The worksheet contains commands for both platforms, core tasks, spaces for local responses, content version and the private reference revision. The printable route contains all stations and expands hints/reset guidance. The in-app browser exposes the print action but its native print dialog could not be inspected by automation. Review print pagination in a normal browser before publication. A print/save-to-PDF action uses the learner's local browser; it does not upload their worksheet.

## Reference revision and private access

The initial English reference is `71fc36ed1f39422a058d35598922599e2004cf0e`, verified on JDK 21 by Windows and Linux [run 40945978796](https://github.com/grobmeier/artemis-java-jumpstart/actions/runs/40945978796). The source setup creates the learner branch from that exact revision, so it cannot silently select a different version of main. Update revision, successful-run link and commands together when promoting a new lab revision. Download private artifacts before their seven-day expiry; never mirror them into this public repository.

The trainer must invite named GitHub accounts individually. Collaborators in the personal-account private repository can see solutions and other branches. Public page access grants neither repository membership nor broker authorization. Do not hide solutions in collapsed client content or add a broad personal token to CI. The local broker is the pilot default; a central trainer broker and network preflight are separate work.

## Validation performed for the first implementation

- The static export contains every requested Labs route, the print route and all ten existing exam routes.
- Content tests check station order, nine well-formed questions, terminal/namespace records, the 225-minute schedule, exact worksheet parity, and the intended failure counts/timeouts.
- The export audit rejects private Java files/JARs/ZIPs, worked solution declarations, runtime/process-log directories and key material. It is an additional check, not permission to copy private material into the public source tree.
- Browser review covered desktop and 320 CSS pixel widths; all nine correct-answer feedback paths; an incorrect-answer explanation; both hint levels; keyboard answering; platform retention across navigation/refresh; direct station refresh; checkbox labels and station navigation.
- Quiz regression review covered the catalogue, a real exceptions question, answer feedback, next question and preserving question 2 after a trip to Labs. An old trailing-slash parser loaded array questions for the exceptions route; the exam page now passes its explicit route parameter to the wrapper.
- The exact published baseline commands were rehearsed with the successful private Linux runtime artifact on macOS/JDK 21, in an isolated path with spaces and an alternate local port: queue ID sets/backlog, independent copies, late subscriber and timeout 2, rollback/crash 17, three poison attempts, DLQ, repaired replay and empty queues passed. The private reference suite separately passed 18/18 on macOS, Windows and Linux.

A real session with two trainees remains a manual pilot, including actual company-PC setup and timing feedback. No quantified learning-improvement claim follows from these implementation checks.

## Publication boundary

The owner approved connecting verification to deployment on 30 October 2026. The main-branch workflow calls the reusable verification workflow first. Only after that job succeeds does its dependent deployment job download the same run's static-site artifact, verify a non-empty index and static assets, load AWS credentials, synchronize the existing bucket and invalidate the existing CloudFront distribution. It does not rebuild after verification. Failed/skipped verification prevents publication, and concurrent production runs are serialized.

Branch pushes, pull requests and manual verification do not publish. Review the preview and print pagination before approving the website PR's merge: a push to main still triggers production publication automatically. The workflow change is prepared on the feature branch; no production publication or remote broker change was performed.
