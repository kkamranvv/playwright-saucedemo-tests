import { test, expect } from "@playwright/test";
import { endpoints } from "../utils/endpoints.js";

test("Get photo", async ({ request }) => {
  const response = await request.get(endpoints.photoById(1));

  const responseJSON = await response.json();

  expect(response.status()).toBe(200);
});
