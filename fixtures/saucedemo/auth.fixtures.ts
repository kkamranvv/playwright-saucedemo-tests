import type { Page } from "@playwright/test";
import { expect } from "@playwright/test";
import { LoginPage } from "../../pages/saucedemo/LoginPage.js";

export const authFixtures = {
  loginPage: async (
    { page }: { page: Page },
    use: (loginPage: LoginPage) => Promise<void>
  ) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.loginValidUser("standard_user", "secret_sauce");
    await expect(page).toHaveURL(/inventory\.html/);
    await use(loginPage);
  },
};
