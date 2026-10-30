# Launch Training quizzes and labs

A public learning site built with Next.js App Router and exported as static files. Existing quizzes remain at `/exams/<exam-name>/`. The first practical lab is **Messaging with Apache Artemis**, with three stations at `/labs/artemis-messaging/`.

## Develop and verify

Use Node 24 LTS (Node 22.13+ is also supported) and npm:

```sh
npm ci
npm run check:content
npm test
npm run build
npm run check:export
```

The production dependency audit is `npm audit --omit=dev`. Build output is `out/`; no Next.js server is required in production. To preview that exact export locally:

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory out
```

Open [the Labs preview](http://127.0.0.1:4173/labs/). For active development use `npm run dev`. The site uses its existing system-font stack, so builds do not need to fetch a Google font.

## Public teaching content, private Java

Only deliberately authored learning instructions, commands, hints and self-checks belong here. The Java source, complete worked solutions, internal trainer guide and runtime artifacts remain in the invitation-only [Artemis training repository](https://github.com/grobmeier/artemis-java-jumpstart). Linking there grants no access. Never add a private token, fetch private source during this build, or copy private repository folders into public assets.

Structured lab content lives in `src/app/labs/content/`. The same content drives the learning pages, printable view and Markdown worksheet. After editing it, run `npm run worksheet` and commit the regenerated `public/labs/artemis-messaging-worksheet.md`. CI fails if the download differs from the source. See [maintenance and validation](docs/labs-maintenance.md).

Station self-checks reuse the existing answer presentation and question data shape. They keep state in memory and do not read or write exam scoring/storage. Only the selected command platform is saved in sessionStorage; no personal learning progress or answers are sent to a server. Existing site analytics remain page-level; no lab answer events were added.

## GitHub Actions

**Verify static site** runs on pushes, pull requests and manual dispatch. It installs locked dependencies with Node 24, audits production dependencies, checks the worksheet, runs content tests, builds the static site and checks route coverage/public output boundaries. The verified `static-site` artifact is retained for seven days. It has no private-repository credentials and no deployment permissions.

The `main.yml` workflow publishes pushes to `main` to the established S3/CloudFront site only after its reusable verification job succeeds. Deployment downloads the `static-site` artifact from that same workflow run and checks the payload before loading AWS credentials. It publishes those exact verified files without rebuilding. A failed or skipped verification job prevents deployment. Production runs are serialized without cancelling an in-progress publication.

Feature-branch pushes, pull requests and manual verification runs perform checks only; they do not deploy or load AWS credentials. Review the local/staging preview before approving a merge to `main`, which publishes automatically. The existing bucket, distribution, cache policy and credentials remain in use. No production publication was performed while preparing this change.

## Generate existing quiz questions

```sh
cd _transform
node transform.js java-constructor.yml
```
