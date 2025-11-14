import { test, expect } from "@playwright/test";
import { endpoints } from "../utils/endpoints.js";
import { TestData } from "../testData.js";

test.describe("Update Post", () => {
  test("Should update post with PUT", async ({ request }) => {
    const response = await request.put(endpoints.postById(1), {
      data: TestData.posts.updatePostPut,
    });

    expect(response.status()).toBe(200);
    const body = await response.json();

    console.log(body);

    expect(body).toHaveProperty("title", "kamikTest2");
  });

  test("Should update post with PATCH", async ({ request }) => {
    const response = await request.patch(endpoints.postById(2), {
      data: TestData.posts.updatePostPatch,
    });

    expect(response.status()).toBe(200);
    const body = await response.json();

    console.log(body);

    expect(body).toHaveProperty("title", "KamikTest3");
  });
});
