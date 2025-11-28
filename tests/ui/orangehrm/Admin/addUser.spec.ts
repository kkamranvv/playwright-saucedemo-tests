// import { test, expect } from "../../../../fixtures/orangehrm/fixtures.js";
// import { AddUser } from "../../../../pages/orangehrm/UserManagement/AddUser.js";
// import { UserAddPage } from "../../../../pages/orangehrm/UserManagement/AdminPage.js";

// import { admin } from "../utils/data.js";
// import { negativeUserCases } from "../utils/negativeEmployeeCases.js";

// test.describe("Add User", () => {
//   test("Add User", async ({ login }) => {
//     const adminPage = new UserAddPage(login);
//     await adminPage.gotoViewUsers();
//     await adminPage.clickAddBtn();

//     const addUser = new AddUser(login);

//     await addUser.addUser(
//       admin.addUserInfo.username,
//       admin.addUserInfo.password,
//       admin.addUserInfo.confirmPassword
//     );

//     await addUser.clickSaveBtn();
//   });

//   test.describe("Add User - negative cases", () => {
//     for (const tc of negativeUserCases) {
//       test(tc.name, async ({ login }) => {
//         const adminPage = new UserAddPage(login);
//         await adminPage.gotoViewUsers();
//         await adminPage.clickAddBtn();

//         const addUser = new AddUser(login);

//         await addUser.addUserCustom({
//           userRole: tc.userRole,
//           employeeName: tc.employeeName,
//           status: tc.status,
//           username: tc.username,
//           password: tc.password,
//           confirmPassword: tc.confirmPassword,
//         });

//         await addUser.clickSaveBtn();

//         const error = addUser.errorMessage;
//         await expect(error).toContainText(tc.expectedError);
//       });
//     }
//   });
// });
