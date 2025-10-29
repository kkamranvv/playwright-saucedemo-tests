import { test, expect } from "@playwright/test";

test("GET users", async ({ request }) => {
  const usersResponse = await request.get("https://reqres.in/api/users", {
    headers: {
      "x-api-key": "reqres-free-v1",
    },
  });

  const usersResponseJSON = await usersResponse.json();

  console.log(usersResponseJSON);

  expect(usersResponse.status()).toBe(200);
});
