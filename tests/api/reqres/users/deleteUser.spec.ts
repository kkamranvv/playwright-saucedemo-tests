import { test, expect } from "@playwright/test";

test("Delete user", async ({ request }) => {
  const deleteUserRes = await request.delete("https://reqres.in/api/users/8");

  expect(deleteUserRes.status()).toBe(204);
});
