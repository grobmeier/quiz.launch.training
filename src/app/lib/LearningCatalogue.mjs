export function quizTopic(exam) {
  if (exam.startsWith("spring-")) return "Spring";
  if (exam.startsWith("sql-")) return "SQL";
  if (exam === "junit") return "Testing";
  return "Java";
}
export function learningActivities(catalogue, lab) {
  return [
    {
      id: lab.id,
      kind: "labs",
      topic: "Java foundations",
      title: lab.title,
      description:
        "Three stations: queues, independent subscribers, and acknowledgement, retry and dead letters.",
      href: `/labs/${lab.id}/`,
    },
    ...catalogue.map((item) => ({
      id: item.exam,
      kind: "quizzes",
      topic: quizTopic(item.exam),
      title: item.title.replace(" - ", " "),
      description: item.shortDescription,
      href: `/exams/${item.exam}/`,
    })),
  ];
}
export function filterActivities(activities, format, query) {
  const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  return activities.filter(
    (item) =>
      (format === "all" || item.kind === format) &&
      words.every((word) =>
        `${item.title} ${item.topic} ${item.description}`
          .toLowerCase()
          .includes(word),
      ),
  );
}
