import { test, expect } from "@playwright/test";

import { LoginPage } from "../pages/LoginPage.js";

test.describe("Login Tests", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test("Successfull login with valid user", async ({ page }) => {
    await loginPage.loginValidUser("standard_user", "secret_sauce");

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

    await page.waitForTimeout(3000);
  });

  test("Login with invalid user", async ({ page }) => {
    await loginPage.loginInvalidUser("invalid_user", "secret_sauce");

    const errorMsg = await loginPage.getErrorText();

    await expect(errorMsg).toContain("Epic sadface");

    await page.waitForTimeout(3000);
  });

  test("Login with locked out user", async ({ page }) => {
    await loginPage.loginInvalidUser("locked_out_user", "secret_sauce");

    const errorMsg = await loginPage.getErrorText();

    await expect(errorMsg).toContain("locked out");

    await page.waitForTimeout(3000);
  });
});
