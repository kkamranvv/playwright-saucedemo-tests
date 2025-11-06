import { test, expect } from "@playwright/test";
import { endpoints } from "../utils/endpoints.js";
import { testData } from "../testData.js";

test("Auto-link Clerk user with Pro subscription using their email", async ({
  request,
}) => {
  const { clerkEmail } = testData;

  const autoLink = await request.post(endpoints.autoLink, {
    data: {
      clerkEmail,
    },
  });

  const autoLinkJSON = await autoLink.json();

  console.log(autoLinkJSON);

  expect(autoLink.status()).toBe(201);

  expect(autoLinkJSON).toHaveProperty("id");
});
