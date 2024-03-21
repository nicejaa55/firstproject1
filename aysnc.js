function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}
const runTasks = async () => {
  await taskOne(); // Wait for taskOne to finish
  await taskTwo(); // Wait for taskTwo to finish
};

runTasks();
