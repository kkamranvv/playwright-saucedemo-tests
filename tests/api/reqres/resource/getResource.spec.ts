import { test, expect } from "@playwright/test";

test("GET resource", async ({ request }) => {
  const resourceResponse = await request.get("https://reqres.in/api/resource", {
    params: {
      page: 2,
      per_page: 3,
    },
    headers: {
      "x-api-key": "reqres-free-v1",
    },
  });

  const resourceResponseJSON = await resourceResponse.json();

  console.log(resourceResponseJSON);

  expect(resourceResponse.status()).toBe(200);
});
