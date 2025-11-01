import { test, expect } from "@playwright/test";
import { endpoints } from "../utils/endpoints.js";

test("GET users list", async ({ request }) => {
  const usersResponse = await request.get(endpoints.users);

  const usersResponseJSON = await usersResponse.json();

  console.log(usersResponseJSON);

  expect(usersResponse.status()).toBe(200);
});
