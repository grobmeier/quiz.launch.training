import { catalogue } from "../exams-data/catalogue";
import { lab } from "../labs/content/lab.mjs";
import { learningActivities } from "../lib/LearningCatalogue.mjs";
import { LearningCatalogue } from "../ui/learning/LearningCatalogue";
import styles from "../ui/learning/learning.module.scss";
export const metadata = {
  title: "Quizzes | Launch Training",
  description:
    "Refresh Java, SQL, Spring and JUnit foundations. Continue an existing quiz or choose a topic.",
};
export default function Page() {
  return (
    <main id="main-content" className={styles.main}>
      <section className={styles.intro}>
        <p className={styles.eyebrow}>Launch Training / Quizzes</p>
        <h1>Refresh the foundations.</h1>
        <p>
          Choose a topic or continue a quiz you have already started.
          Learning-format filters do not change your saved quiz progress.
        </p>
      </section>
      <LearningCatalogue
        initialFormat="quizzes"
        activities={learningActivities(catalogue, lab)}
      />
    </main>
  );
}
