import { test, expect } from "@playwright/test";

test("Get user by id", async ({ request }) => {
  const userByIdRepsonse = await request.get("https://reqres.in/api/users/1", {
    headers: {
      "x-api-key": "reqres-free-v1",
    },
  });

  const userByIdRepsonseJSON = await userByIdRepsonse.json();

  console.log(userByIdRepsonseJSON);

  expect(userByIdRepsonse.status()).toBe(200);
});
