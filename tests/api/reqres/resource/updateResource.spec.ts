import { test, expect } from "@playwright/test";

test.describe("Update Resource API", () => {
  test("Should update resource with PUT", async ({ request }) => {
    const response = await request.put("https://reqres.in/api/resource/2", {
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
    const response = await request.patch("https://reqres.in/api/resource/2", {
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
