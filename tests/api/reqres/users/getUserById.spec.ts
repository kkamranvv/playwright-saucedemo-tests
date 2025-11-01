import { test, expect } from "@playwright/test";
import { endpoints } from "../utils/endpoints.js";

test("Get user by id", async ({ request }) => {
  const userByIdRepsonse = await request.get(endpoints.userById(2));

  const userByIdRepsonseJSON = await userByIdRepsonse.json();

  console.log(userByIdRepsonseJSON);

  expect(userByIdRepsonse.status()).toBe(200);
});
