import { test, expect } from "@playwright/test";
import { endpoints } from "../utils/endpoints.js";

test("Link Clerk user with Pro subscription", async ({ request }) => {
  const linkClerk = await request.post(endpoints.link, {
    data: {
      email: "user@example.com",
    },
  });

  const linkClerkJSON = await linkClerk.json();

  console.log(linkClerkJSON);

  expect(linkClerk.status()).toBe(201);

  expect(linkClerkJSON).toHaveProperty("id");
});
