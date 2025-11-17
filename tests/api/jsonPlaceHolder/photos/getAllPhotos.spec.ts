import { test, expect } from "@playwright/test";
import { endpoints } from "../utils/endpoints.js";

test("Get all photos", async ({ request }) => {
  const response = await request.get(endpoints.photos);

  const responseJSON = await response.json();

  expect(response.status()).toBe(200);
});
