import { test, expect } from "@playwright/test";
import { endpoints } from "../utils/endpoints.js";

test("GET resource by id", async ({ request }) => {
  const resourceResponse = await request.get(endpoints.resourceId(2), {
    params: {
      page: 2,
      per_page: 3,
    },
  });

  const resourceResponseJSON = await resourceResponse.json();

  console.log(resourceResponseJSON);

  expect(resourceResponse.status()).toBe(200);
});
