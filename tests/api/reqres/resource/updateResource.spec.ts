import { test, expect } from "@playwright/test";
import { endpoints } from "../utils/endpoints.js";
import { testData } from "../testData.js";

test.describe("Update Resource API", () => {
  const { name, year } = testData.resource.updatePut;
  const { color } = testData.resource.updatePatch;

  test("Should update resource with PUT", async ({ request }) => {
    const response = await request.put(endpoints.resourceId(2), {
      data: {
        name,
        year,
      },
    });

    expect(response.status()).toBe(200);
    const body = await response.json();

    console.log(body);

    expect(body).toHaveProperty("year", 2008);
  });

  test("Should update resource with PATCH", async ({ request }) => {
    const response = await request.patch(endpoints.resourceId(2), {
      data: {
        color,
      },
    });

    expect(response.status()).toBe(200);
    const body = await response.json();

    console.log(body);

    expect(body).toHaveProperty("color", "#FFF2");
  });
});
