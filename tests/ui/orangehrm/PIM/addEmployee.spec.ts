// import { test, expect } from "../../../../fixtures/orangehrm/fixtures.js";
// import { AddEmployee } from "../../../../pages/orangehrm/PIM/AddEmployee.js";
// import { PIMPage } from "../../../../pages/orangehrm/PIM/PIMpage.js";
// import { employee } from "../utils/data.js";
// import { negativeEmployeeCases } from "../utils/negativeEmployeeCases.js";

// test.describe("@orangehrm Add Employee", () => {
//   test.skip(process.env.SKIP_ORANGEHRM === "true", "Skipping OrangeHRM tests");

//   test("@orangehrm Add Employee", async ({ page, login }) => {
//     const pimPage = new PIMPage(login);
//     await pimPage.goto();
//     await pimPage.clickAddBtn();

//     const addEmployee = new AddEmployee(login);

//     await addEmployee.completeEmployeeInfo(
//       employee.AddEmp.firstName,
//       employee.AddEmp.lastName,
//       employee.AddEmp.employeeId,
//       employee.AddEmp.employeePhoto
//     );

//     await addEmployee.save();

//     const header = page.locator("//h6[normalize-space()='Kamran Musadirli']");

//     await expect(header).toHaveText(
//       employee.AddEmp.firstName + " " + employee.AddEmp.lastName
//     );

//     const personalDeatils = page.locator(
//       "//h6[normalize-space()='Personal Details']"
//     );

//     await expect(personalDeatils).toBeVisible();
//   });

//   test("@orangehrm Add Employee with creating login details", async ({
//     login,
//   }) => {
//     const pimPage = new PIMPage(login);
//     await pimPage.goto();
//     await pimPage.clickAddBtn();

//     const addEmployee = new AddEmployee(login);

//     await addEmployee.completeEmployeeInfo(
//       employee.AddEmp.firstName,
//       employee.AddEmp.lastName,
//       employee.AddEmp.employeeId,
//       employee.AddEmp.employeePhoto
//     );

//     await addEmployee.enableLoginDetails();

//     await addEmployee.fillLoginDetails(
//       employee.AddEmpWithLogin.username,
//       employee.AddEmpWithLogin.password,
//       true
//     );

//     await addEmployee.save();
//   });

//   test.describe("@orangehrm Negative Add Employee Tests", () => {
//     for (const tcase of negativeEmployeeCases) {
//       test(`@orangehrm Add Employee – ${tcase.name}`, async ({
//         page,
//         login,
//       }) => {
//         const pimPage = new PIMPage(login);
//         await pimPage.goto();
//         await pimPage.clickAddBtn();

//         const addEmployee = new AddEmployee(page);

//         await addEmployee.completeEmployeeInfo(
//           tcase.firstName,
//           tcase.lastName,
//           tcase.employeeId,
//           employee.AddEmp.employeePhoto
//         );

//         await addEmployee.save();

//         if (tcase.expectFieldError) {
//           if (tcase.firstName === "") {
//             await expect(addEmployee.firstNameError).toHaveText("Required");
//           }

//           if (tcase.lastName === "") {
//             await expect(addEmployee.lastNameError).toHaveText("Required");
//           }
//         }

//         if (tcase.expectGlobalError) {
//           await expect(addEmployee.duplicateEmployeeIdError).toBeVisible();
//           await expect(addEmployee.duplicateEmployeeIdError).toHaveText(
//             "Employee Id already exists"
//           );
//         }
//       });
//     }
//   });
// });
