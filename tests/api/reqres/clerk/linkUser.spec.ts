import { test, expect } from "@playwright/test";
import { endpoints } from "../utils/endpoints.js";
import { testData } from "../testData.js";

test("Link Clerk user with Pro subscription", async ({ request }) => {
  const { clerkEmail } = testData;
  const linkClerk = await request.post(endpoints.link, {
    data: {
      clerkEmail,
    },
  });

  const linkClerkJSON = await linkClerk.json();

  console.log(linkClerkJSON);

  expect(linkClerk.status()).toBe(201);

  expect(linkClerkJSON).toHaveProperty("id");
});
