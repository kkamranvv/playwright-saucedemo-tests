// import { test, expect } from "../../../../fixtures/orangehrm/fixtures.js";
// import { SearchUser } from "../../../../pages/orangehrm/UserManagement/SearchUser.js";

// test.describe("Search User", () => {
//   test("Search User", async ({ login }) => {
//     const searchUser = new SearchUser(login);
//     await searchUser.goto();
//     await searchUser.searchByUsername("kkamranvv1763891624");
//     await searchUser.getUserRow("kkamranvv1763891624");
//   });

//   test("Reset Search Form", async ({ login }) => {
//     const searchUser = new SearchUser(login);
//     await searchUser.goto();

//     await searchUser.usernameInput.fill("testuser123");

//     await searchUser.resetBtn.click();

//     await expect(searchUser.usernameInput).toHaveValue("");

//     const userRow = searchUser.getUserRow("testuser123");
//     await expect(userRow).toHaveCount(0);
//   });
// });
