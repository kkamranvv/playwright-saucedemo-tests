// import { test } from "../../../../fixtures/orangehrm/fixtures.js";
// import { AddUser } from "../../../../pages/orangehrm/UserManagement/AddUser.js";
// import { UserAddPage } from "../../../../pages/orangehrm/UserManagement/AdminPage.js";
// import { admin } from "../utils/data.js";
// // import { SearchUser } from "../../../../pages/orangehrm/UserManagement/SearchUser.js";
// // import { negativeEmployeeCases } from "../utils/negativeEmployeeCases.js";

// test.describe("Add User", () => {
//   test("Add User", async ({ page, login }) => {
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

//     // await page.goto(
//     //   "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers"
//     // );

//     // const searchUser = new SearchUser(login);

//     // searchUser.searchByUsername(admin.addUserInfo.username);
//     // searchUser.getUserRow(admin.addUserInfo.username);
//   });
// });
