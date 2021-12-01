import { test, expect } from "@playwright/test";
import server from "@root/backend";
const { exec } = require("child_process");
import { promisify } from "util";

const promisifiedExec = (command: string) => {
  const promise = promisify(exec)(command);
  promise.child?.stdout?.on("data", function (data: string) {
    console.log(`${command} stdout: ` + data);
  });
  promise.child?.stderr?.on("data", function (data: string) {
    console.log(`${command} stderr: ` + data);
  });
  return promise;
};

const liftNextJSApp = async () => {
  return new Promise((resolve) => {
    const promise = promisifiedExec("cd ../web && yarn dev");
    let count = 0;
    promise.child?.stdout?.on("data", function (data: string) {
      if (data.includes("compiled successfully")) {
        console.log("Started Next.js server");
        resolve("ok");
      }
    });
  });
};

test.beforeAll(async () => {
  try {
    await promisifiedExec("kill -9 $(lsof -ti:3000)");
  } catch (err) {}
  try {
    await promisifiedExec("kill -9 $(lsof -ti:2022)");
  } catch (err) {}

  console.log("Lifting backend");
  server.listen(2022);
  try {
    console.log("Lifting Next.js server");
    await liftNextJSApp();
    await new Promise((resolve) => setTimeout(resolve, 4000));
  } catch (err) {
    console.log(err);
  }
  console.log("Tests can begin");
});

test("Can sign up", async ({ page }) => {
  await page.goto("http://localhost:3000/signup");

  await page.type('input[name="email"]', "mikealche@gmail.com");
  await page.type('input[name="password"]', "heyhey123");
  await page.click("text=Submit");

  const content = await page.textContent("user-email");
  expect(content).toBe("asd");
});
