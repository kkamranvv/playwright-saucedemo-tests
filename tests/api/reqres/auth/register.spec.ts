import { test, expect } from "@playwright/test";
import { endpoints } from "../utils/endpoints.js";

test("Register User", async ({ request }) => {
  const registerUserRes = await request.post(endpoints.register, {
    data: {
      email: "eve.holt@reqres.in",
      password: "pistol",
    },
  });

  const registerUserResJSON = await registerUserRes.json();

  console.log(registerUserResJSON);

  expect(registerUserRes.status()).toBe(200);

  expect(registerUserResJSON).toHaveProperty("id", 4);
});
