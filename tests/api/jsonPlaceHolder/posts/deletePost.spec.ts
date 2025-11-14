import { test, expect } from "@playwright/test";
import { endpoints } from "../utils/endpoints.js";

test("Delete Post", async ({ request }) => {
  const response = await request.delete(endpoints.postById(1));

  expect(response.status()).toBe(200);
});
