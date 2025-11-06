import { test, expect } from "@playwright/test";
import { endpoints } from "../utils/endpoints.js";
import { testData } from "../testData.js";

test("Unlink Pro subscription", async ({ request }) => {
  const { clerkEmail } = testData;

  const unlink = await request.post(endpoints.unlink, {
    data: {
      clerkEmail,
    },
  });

  const unlinkJSON = await unlink.json();

  console.log(unlinkJSON);

  expect(unlink.status()).toBe(201);

  expect(unlinkJSON).toHaveProperty("id");
});
