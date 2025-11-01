import { test, expect } from "@playwright/test";
import { endpoints } from "../utils/endpoints.js";

test("Auto-link Clerk user with Pro subscription using their email", async ({
  request,
}) => {
  const autoLink = await request.post(endpoints.autoLink, {
    data: {
      email: "user@example.com",
    },
  });

  const autoLinkJSON = await autoLink.json();

  console.log(autoLinkJSON);

  expect(autoLink.status()).toBe(201);

  expect(autoLinkJSON).toHaveProperty("id");
});
