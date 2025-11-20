import { test, expect } from "../../../../fixtures/orangehrm/fixtures.js";

test.skip(process.env.SKIP_ORANGEHRM === "true", "Skipping OrangeHRM tests");

test("@orangehrm Dashboard loads successfully", async ({
  login: _loginPage,
  dashboardPage,
}) => {
  await expect(dashboardPage.dashboardHeader).toHaveText("Dashboard");
});
