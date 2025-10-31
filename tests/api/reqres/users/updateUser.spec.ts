import { test, expect } from "@playwright/test";

test.describe("Update User API", () => {
  test("Should update user with PUT", async ({ request }) => {
    const response = await request.put("https://reqres.in/api/users/2", {
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
    const response = await request.patch("https://reqres.in/api/users/2", {
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
