import { test, expect } from "@playwright/test";

test("GET resource list", async ({ request }) => {
  const resourceResponse = await request.get(
    "https://reqres.in/api/resource/1",
    {
      params: {
        page: 2,
        per_page: 3,
      },
    }
  );

  const resourceResponseJSON = await resourceResponse.json();

  console.log(resourceResponseJSON);

  expect(resourceResponse.status()).toBe(200);
});
