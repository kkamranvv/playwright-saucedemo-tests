import { test, expect } from "@playwright/test";
import { endpoints } from "../utils/endpoints.js";

test("GET resource list", async ({ request }) => {
  const resourceResponse = await request.get(endpoints.resource, {
    params: {
      page: 2,
      per_page: 3,
    },
  });

  const resourceResponseJSON = await resourceResponse.json();

  console.log(resourceResponseJSON);

  expect(resourceResponse.status()).toBe(200);
});
