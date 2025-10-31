import { test, expect } from "@playwright/test";

test("Login User", async ({ request }) => {
  const loginUserRes = await request.post("https://reqres.in/api/login", {
    data: {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    },
  });

  const loginUserResJSON = await loginUserRes.json();

  console.log(loginUserResJSON);

  expect(loginUserRes.status()).toBe(200);

  expect(loginUserResJSON).toHaveProperty("token", "QpwL5tke4Pnpja7X4");
});
