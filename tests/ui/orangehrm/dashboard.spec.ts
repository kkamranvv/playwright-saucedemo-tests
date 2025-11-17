import { test, expect } from "../../../fixtures/orangehrm/fixtures.js";

test("Dashboard loads successfully", async ({
  login: _loginPage,
  dashboardPage,
}) => {
  await expect(dashboardPage.dashboardHeader).toHaveText("Dashboard");
});
