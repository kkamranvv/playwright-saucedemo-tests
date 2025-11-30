import { test, expect } from "@playwright/test";

test("RealWorld API is up and returns tags", async ({ page }) => {
  await page.goto("http://localhost:3000/api/tags");

  await expect(page.locator("body")).toContainText("tags");
});
