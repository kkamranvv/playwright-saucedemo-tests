import { test, expect } from "@playwright/test";
import { endpoints } from "../utils/endpoints.js";
import { testData } from "../testData.js";

test("Register User", async ({ request }) => {
  const { email, password } = testData.auth.register;

  const registerUserRes = await request.post(endpoints.register, {
    data: {
      email,
      password,
    },
  });

  const registerUserResJSON = await registerUserRes.json();

  console.log(registerUserResJSON);

  expect(registerUserRes.status()).toBe(200);

  expect(registerUserResJSON).toHaveProperty("id", 4);
});
