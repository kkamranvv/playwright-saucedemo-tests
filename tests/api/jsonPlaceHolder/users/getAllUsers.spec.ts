import { test, expect } from "@playwright/test";
import { endpoints } from "../utils/endpoints.js";

test("Get all users", async ({ request }) => {
  const response = await request.get(endpoints.users);

  const responseJSON = await response.json();

  expect(response.status()).toBe(200);
});
