import test from "node:test";
import assert from "node:assert/strict";
import { catalogue } from "../src/app/exams-data/catalogue.js";
import { lab } from "../src/app/labs/content/lab.mjs";
import {
  learningActivities,
  filterActivities,
} from "../src/app/lib/LearningCatalogue.mjs";
const activities = learningActivities(catalogue, lab);
test("the hub exposes the real lab and every existing quiz at stable deep links", () => {
  assert.equal(activities.length, 11);
  assert.equal(new Set(activities.map((item) => item.id)).size, 11);
  assert.equal(activities[0].href, "/labs/artemis-messaging/");
  for (const item of catalogue)
    assert.equal(
      activities.find((a) => a.id === item.exam).href,
      `/exams/${item.exam}/`,
    );
});
test("format and case-insensitive topic search combine without changing the catalogue", () => {
  assert.equal(filterActivities(activities, "labs", "").length, 1);
  assert.equal(filterActivities(activities, "quizzes", "").length, 10);
  assert.deepEqual(
    filterActivities(activities, "quizzes", " sPrInG ").map((item) => item.id),
    ["spring-basics", "spring-aop"],
  );
  assert.deepEqual(
    filterActivities(activities, "all", "java messaging").map(
      (item) => item.id,
    ),
    ["artemis-messaging"],
  );
  assert.equal(filterActivities(activities, "labs", "Spring").length, 0);
  assert.equal(
    filterActivities(activities, "all", "no-matching-topic").length,
    0,
  );
  assert.equal(filterActivities(activities, "all", "").length, 11);
  assert.equal(activities.length, 11);
});
