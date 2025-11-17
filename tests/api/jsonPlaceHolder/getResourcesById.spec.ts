import { test, expect } from "@playwright/test";
import { endpoints } from "./utils/endpoints.js";

test.describe("JSONPlaceholder - GET resource by id", () => {
  const cases: [string, (id: number) => string, number][] = [
    ["album", endpoints.albumsById, 1],
    ["photo", endpoints.photoById, 1],
    ["post", endpoints.postById, 1],
    ["todo", endpoints.todoById, 1],
    ["user", endpoints.userById, 1],
    ["comment", endpoints.commentById, 1],
  ];

  for (const [name, makeEndpoint, id] of cases) {
    test(`Get ${name} by id = ${id}`, async ({ request }) => {
      const response = await request.get(makeEndpoint(id));
      expect(response.status()).toBe(200);
    });
  }
});
