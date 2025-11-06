import { test, expect } from "@playwright/test";
import { endpoints } from "../utils/endpoints.js";
import { testData } from "../testData.js";

test("Logout User", async ({ request }) => {
  const { logout } = testData.auth;

  const logoutUserRes = await request.post(endpoints.logout, {
    data: logout,
  });

  const logoutUserResJSON = await logoutUserRes.json();

  console.log("Response status:", logoutUserRes.status());
  console.log("Response body:", logoutUserResJSON);

  expect(logoutUserRes.status()).toBe(200);

  expect(logoutUserResJSON).toEqual({});
});
