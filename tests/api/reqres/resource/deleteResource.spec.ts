import { test, expect } from "@playwright/test";
import { endpoints } from "../utils/endpoints.js";

test("Delete resource", async ({ request }) => {
  const deleteRes = await request.delete(endpoints.resourceId(2));

  expect(deleteRes.status()).toBe(204);
});
