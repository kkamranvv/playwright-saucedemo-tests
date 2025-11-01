import { test, expect } from "@playwright/test";
import { endpoints } from "../utils/endpoints.js";

test.describe("Update Resource API", () => {
  test("Should update resource with PUT", async ({ request }) => {
    const response = await request.put(endpoints.resourceId(2), {
      data: {
        name: "Kamran",
        year: 2008,
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
        color: "#FFF231",
      },
    });

    expect(response.status()).toBe(200);
    const body = await response.json();

    console.log(body);

    expect(body).toHaveProperty("color", "#FFF231");
  });
});
