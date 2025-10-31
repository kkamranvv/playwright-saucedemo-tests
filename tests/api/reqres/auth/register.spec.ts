import { test, expect } from "@playwright/test";

test("Register User", async ({ request }) => {
  const registerUserRes = await request.post("https://reqres.in/api/register", {
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
