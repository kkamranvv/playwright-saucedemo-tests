import { test, expect } from "@playwright/test";
import { endpoints } from "../utils/endpoints.js";

test("Unlink Pro subscription", async ({ request }) => {
  const unlink = await request.post(endpoints.unlink, {
    data: {
      email: "user@example.com",
    },
  });

  const unlinkJSON = await unlink.json();

  console.log(unlinkJSON);

  expect(unlink.status()).toBe(201);

  expect(unlinkJSON).toHaveProperty("id");
});
