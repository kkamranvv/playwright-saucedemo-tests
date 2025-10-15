import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

export const test = base.extend<{ loginPage: LoginPage }>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.loginValidUser("standard_user", "secret_sauce");

    await expect(page).toHaveURL(/inventory\.html/);

    await use(loginPage);
  },
});

export { expect };
