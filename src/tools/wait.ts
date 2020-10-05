// an easier way to make the execution wait before executing the next lines
// instead of doing: console.log("Hello"); setTimeout(() => {  console.log("World!"); }, 1000);
// do: console.log("Hello"); await wait(1000); console.log("World!");

export const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// example of usage
// you can run it with deno (ts is included): deno run src/tools/wait.ts

// async function test() {
  console.log("the next message will appear after one second");
  await wait(1000);
  console.log("here it is!");
// }
// test();