import { test, expect } from "@playwright/test";
import { endpoints } from "../utils/endpoints.js";
import { testData } from "../testData.js";

test("Login User", async ({ request }) => {
  const { email, password } = testData.auth.login;

  const loginUserRes = await request.post(endpoints.login, {
    data: {
      email,
      password,
    },
  });

  const loginUserResJSON = await loginUserRes.json();

  console.log(loginUserResJSON);

  expect(loginUserRes.status()).toBe(200);

  expect(loginUserResJSON).toHaveProperty("token", "QpwL5tke4Pnpja7X4");
});
