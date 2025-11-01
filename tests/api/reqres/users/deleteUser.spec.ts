import { test, expect } from "@playwright/test";
import { endpoints } from "../utils/endpoints.js";

test("Delete user", async ({ request }) => {
  const response = await request.delete(endpoints.userById(2));

  expect(response.status()).toBe(204);
});
