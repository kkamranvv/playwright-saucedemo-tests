import { test, expect } from "@playwright/test";
import { endpoints } from "../utils/endpoints.js";

test("Get todo", async ({ request }) => {
  const response = await request.get(endpoints.todoById(1));

  const responseJSON = await response.json();

  expect(response.status()).toBe(200);
});
