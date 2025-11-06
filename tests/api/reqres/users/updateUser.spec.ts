import { test, expect } from "@playwright/test";
import { endpoints } from "../utils/endpoints.js";
import { testData } from "../testData.js";

test.describe("Update User API", () => {
  const { email, firstName, lastName } = testData.users.updatePut;
  const { lastName: patchLastName } = testData.users.updatePatch;

  test("Should update user with PUT", async ({ request }) => {
    const response = await request.put(endpoints.userById(2), {
      data: {
        email,
        firstName,
        lastName,
      },
    });

    expect(response.status()).toBe(200);
    const body = await response.json();

    console.log(body);

    expect(body).toHaveProperty("firstName", "Kamran");
  });

  test("Should update user with PATCH", async ({ request }) => {
    const response = await request.patch(endpoints.userById(2), {
      data: {
        patchLastName,
      },
    });

    expect(response.status()).toBe(200);
    const body = await response.json();

    console.log(body);

    expect(body).toHaveProperty("patchLastName", "Nasiyati");
  });
});
