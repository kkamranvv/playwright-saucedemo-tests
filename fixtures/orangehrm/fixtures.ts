import { test as base, Page } from "@playwright/test";
import { LoginPage } from "../../pages/orangehrm/LoginPage.js";
import { DashboardPage } from "../../pages/orangehrm/Dashboard.js";
import { userData } from "../../tests/ui/orangehrm/utils/data.js";

type Fixtures = {
  login: Page;
  dashboardPage: DashboardPage;
  adminLogin: Page;
};

export const test = base.extend<Fixtures>({
  login: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.loginValidUser(
      userData.validUser.username,
      userData.validUser.password
    );

    await page.waitForURL(/dashboard/);

    await use(page);
  },

  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
});

export const expect = test.expect;
