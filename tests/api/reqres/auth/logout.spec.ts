import { test, expect } from "@playwright/test";

test("Logout User", async ({ request }) => {
  const logoutUserRes = await request.post("https://reqres.in/api/logout", {
    data: {},
  });

  const logoutUserResJSON = await logoutUserRes.json();

  console.log("Response status:", logoutUserRes.status());
  console.log("Response body:", logoutUserResJSON);

  expect(logoutUserRes.status()).toBe(200);

  expect(logoutUserResJSON).toEqual({});
});
