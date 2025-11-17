import { test, expect } from "@playwright/test";
import { userData } from "./utils/data.js";
import { LoginPage } from "../../../pages/orangehrm/LoginPage.js";

test.describe("Login Tests", () => {
  test.skip(process.env.SKIP_ORANGEHRM === "true", "Skipping OrangeHRM tests");

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

    await page.waitForTimeout(3000);

    await expect(page).toHaveURL(
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );

    await page.waitForTimeout(3000);
  });

  test("Login with invalid user", async ({ page }) => {
    await loginPage.loginInvalidUser(
      userData.invalidUser.username,
      userData.invalidUser.password
    );

    const errorMsg = await loginPage.getErrorText();

    await expect(errorMsg).toContain("Invalid credentials");

    await page.waitForTimeout(3000);
  });
});
