import { test, expect } from "@playwright/test";
import { endpoints } from "../utils/endpoints.js";

test("Get comment by post id", async ({ request }) => {
  const response = await request.get(endpoints.commentsByPostId(1));

  const responseJSON = await response.json();

  expect(response.status()).toBe(200);
});
