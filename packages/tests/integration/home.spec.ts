import { test, expect } from "@playwright/test";

test.skip("basic test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  const content = await page.textContent("#main");
  await expect(content).toBe("template");
});
