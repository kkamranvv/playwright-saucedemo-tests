import { test, expect } from "@playwright/test";

import { LoginPage } from "../pages/LoginPage";

test.describe("Login Tests", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test("Successfull login with valid user", async ({ page }) => {
    await loginPage.login("standard_user", "secret_sauce");

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

    await page.waitForTimeout(3000);
  });

  test("Login with invalid user", async ({ page }) => {
    await loginPage.login("123", "secret_sauce");

    const errorMsg = await loginPage.getErrorText();

    await expect(errorMsg).toContain("Epic sadface");

    await page.waitForTimeout(3000);
  });

  test("Login with locked out user", async ({ page }) => {
    await loginPage.login("locked_out_user", "secret_sauce");

    const errorMsg = await loginPage.getErrorText();

    await expect(errorMsg).toContain("locked out");

    await page.waitForTimeout(3000);
  });
});
