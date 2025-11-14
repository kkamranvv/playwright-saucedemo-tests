import { test, expect } from "@playwright/test";
import { endpoints } from "../utils/endpoints.js";
import { TestData } from "../testData.js";

test("Create post", async ({ request }) => {
  const response = await request.post(endpoints.posts, {
    data: TestData.posts.createPost,
  });

  const responseJSON = await response.json();

  console.log(JSON.stringify(responseJSON, null, 2));

  expect(response.status()).toBe(201);
  expect(responseJSON.title).toBe(TestData.posts.createPost.title);
});
