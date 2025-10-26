import { test, expect } from "@playwright/test";
import { userData } from "..//utils/data.js";
import { LoginPage } from "../pages/LoginPage.js";

test.describe("Login Tests", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test("Successfull login with valid user", async ({ page }) => {
    await loginPage.loginValidUser(
      userData.validUser.username,
      userData.validUser.password
    );

    await expect(page).toHaveURL(`${process.env.BASE_URL}inventory.html`);

    await page.waitForTimeout(3000);
  });

  test("Login with invalid user", async ({ page }) => {
    await loginPage.loginInvalidUser(
      userData.invalidUser.username,
      userData.invalidUser.password
    );

    const errorMsg = await loginPage.getErrorText();

    await expect(errorMsg).toContain("Epic sadface");

    await page.waitForTimeout(3000);
  });

  test("Login with locked out user", async ({ page }) => {
    await loginPage.loginInvalidUser(
      userData.lockedUser.username,
      userData.lockedUser.password
    );

    const errorMsg = await loginPage.getErrorText();

    await expect(errorMsg).toContain("locked out");

    await page.waitForTimeout(3000);
  });
});
