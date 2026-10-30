import Link from "next/link";
import { catalogue } from "./exams-data/catalogue";
import { lab } from "./labs/content/lab.mjs";
import { learningActivities } from "./lib/LearningCatalogue.mjs";
import { LearningCatalogue } from "./ui/learning/LearningCatalogue";
import styles from "./ui/learning/learning.module.scss";
export const metadata = {
  title: "Labs and Quizzes | Launch Training",
  description:
    "Guided Java labs and topic quizzes. Predict, run, break, explain and adapt with Launch Training.",
};
export default function Page() {
  return (
    <main id="main-content" className={styles.main}>
      <section className={styles.intro}>
        <p className={styles.eyebrow}>Launch Training / Learning hub</p>
        <h1>
          A little theory.
          <br />
          <em>A lot to try.</em>
        </h1>
        <p>
          Explore guided labs for practical understanding, or use a quiz to
          refresh the foundations. Choose what you want to work on next.
        </p>
      </section>
      <section className={styles.feature} aria-labelledby="featured-lab">
        <div className={styles.featureMain}>
          <div className={styles.featureHeading}>
            <span>Featured lab</span>
            <span>3 stations · Java foundations</span>
          </div>
          <h2 id="featured-lab">
            Messaging with
            <br />
            Apache Artemis
          </h2>
          <p>
            Follow orders through queues, event subscribers and a controlled
            failure. Explain what happened using your own code and evidence.
          </p>
          <div className={styles.featureActions}>
            <Link href="/labs/artemis-messaging/">
              Start with the lab overview <span aria-hidden="true">→</span>
            </Link>
            <span>3h 45m facilitated</span>
          </div>
        </div>
        <aside className={styles.preparation}>
          <p className={styles.eyebrow}>Before you begin</p>
          <h3>
            Your machine.
            <br />
            Your experiment.
          </h3>
          <ul>
            <li>Java foundations</li>
            <li>A supplied JDK 21</li>
            <li>Your own local broker</li>
            <li>A worksheet for predictions</li>
          </ul>
          <p>
            No Docker or administrator rights required. Follow the setup guide
            before starting a station.
          </p>
        </aside>
      </section>
      <LearningCatalogue activities={learningActivities(catalogue, lab)} />
      <section className={styles.context}>
        <div>
          <p className={styles.eyebrow}>Two ways to learn</p>
          <h2>Knowledge is a starting point.</h2>
          <p>
            A quiz helps you notice gaps. A lab asks you to work with a real
            system and explain your decisions. Use both as part of your
            practice.
          </p>
        </div>
        <div>
          <p className={styles.eyebrow}>Need a guide?</p>
          <h2>Work through it together.</h2>
          <p>
            For a team workshop or a practical training session, explore
            Grobmeier Solutions’ training offering.
          </p>
          <a href="https://grobmeier.solutions/en/training/">
            Discuss team training <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
