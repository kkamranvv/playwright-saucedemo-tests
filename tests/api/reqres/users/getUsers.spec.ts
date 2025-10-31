import { test, expect } from "@playwright/test";

test("GET users list", async ({ request }) => {
  const usersResponse = await request.get("https://reqres.in/api/users");

  const usersResponseJSON = await usersResponse.json();

  console.log(usersResponseJSON);

  expect(usersResponse.status()).toBe(200);
});
