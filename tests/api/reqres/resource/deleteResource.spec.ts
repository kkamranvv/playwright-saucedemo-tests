import { test, expect } from "@playwright/test";

test("Delete resource", async ({ request }) => {
  const deleteRes = await request.delete("https://reqres.in/api/resource/1");

  expect(deleteRes.status()).toBe(204);
});
