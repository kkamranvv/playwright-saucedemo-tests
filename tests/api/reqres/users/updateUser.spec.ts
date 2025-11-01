import { test, expect } from "@playwright/test";
import { endpoints } from "../utils/endpoints.js";

test.describe("Update User API", () => {
  test("Should update user with PUT", async ({ request }) => {
    const response = await request.put(endpoints.userById(2), {
      data: {
        email: "kamran@gmail.com",
        first_name: "Kamran",
        last_name: "Musadirli",
      },
    });

    expect(response.status()).toBe(200);
    const body = await response.json();

    console.log(body);

    expect(body).toHaveProperty("first_name", "Kamran");
  });

  test("Should update user with PATCH", async ({ request }) => {
    const response = await request.patch(endpoints.userById(2), {
      data: {
        last_name: "Nasiyati",
      },
    });

    expect(response.status()).toBe(200);
    const body = await response.json();

    console.log(body);

    expect(body).toHaveProperty("last_name", "Nasiyati");
  });
});
