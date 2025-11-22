// import { test, expect } from "../../../../fixtures/orangehrm/fixtures.js";
// import { PIMPage } from "../../../../pages/orangehrm/PIM/PIMpage.js";
// import { SearchEmployee } from "../../../../pages/orangehrm/PIM/SearchEmployee.js";
// import { employee } from "../utils/data.js";
// // import { negativeEmployeeCases } from "../utils/negativeEmployeeCases.js";

// test.describe("@orangehrm Search Employee", () => {
//   test.skip(process.env.SKIP_ORANGEHRM === "true", "Skipping OrangeHRM tests");

//   test("@orangehrm Search Employee By Name", async ({ page, login }) => {
//     const pimPage = new PIMPage(login);
//     await pimPage.goto();

//     const searchEmployee = new SearchEmployee(login);

//     await searchEmployee.fillEmployeeName(employee.SearchEmp.name);

//     await searchEmployee.clickSearchBtn();

//     await page.waitForSelector(".oxd-table-row", { state: "visible" });

//     await expect(
//       page.locator("(//div[@role='cell'])[3]", { hasText: "Kamran" })
//     ).toBeVisible();

//     await expect(
//       page.locator("(//div[@role='cell'])[4]", { hasText: "Musadirli" })
//     ).toBeVisible();
//   });

//   test("@orangehrm Search Employee By Employee Id", async ({ page, login }) => {
//     const pimPage = new PIMPage(login);
//     await pimPage.goto();

//     const searchEmployee = new SearchEmployee(login);

//     await searchEmployee.enterEmployeeId(employee.SearchEmp.employeeId);

//     await searchEmployee.clickSearchBtn();

//     await page.waitForSelector(".oxd-table-row", { state: "visible" });

//     await expect(
//       page.locator("(//div[@role='cell'])[2]", { hasText: "999888" })
//     ).toBeVisible();
//   });
// });
