import { test, expect } from "@playwright/test";
import { endpoints } from "./utils/endpoints.js";

test.describe("JSONPlaceholder - GET all resources", () => {
  const cases: [string, string][] = [
    ["albums", endpoints.albums],
    ["photos", endpoints.photos],
    ["posts", endpoints.posts],
    ["todos", endpoints.todos],
    ["users", endpoints.users],
    ["comments", endpoints.comments],
  ];

  for (const [name, endpoint] of cases) {
    test(`Get all ${name}`, async ({ request }) => {
      const response = await request.get(endpoint);

      expect(response.status()).toBe(200);
    });
  }
});
