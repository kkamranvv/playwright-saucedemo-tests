import { test, expect } from "@playwright/test";
import { endpoints } from "../utils/endpoints.js";

test("Get all posts", async ({ request }) => {
  const response = await request.get(endpoints.posts);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const responseJSON = await response.json();

  // console.log(JSON.stringify(responseJSON, null, 1));

  expect(response.status()).toBe(200);
});
