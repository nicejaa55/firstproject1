const taskOne = async () => {
  await new Promise((resolve) => {
    setTimeout(function () {
      console.log("this is task 1");
      resolve();
    }, 500);
  });
};

const taskTwo = async () => {
  console.log("this is task 2");
};

await taskOne();
await taskTwo();
