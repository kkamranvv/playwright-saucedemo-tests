import { request, APIRequestContext } from "@playwright/test";

export async function createApiClient(): Promise<APIRequestContext> {
  return await request.newContext({
    baseURL: "https://reqres.in/api",
    extraHTTPHeaders: {
      "Content-Type": "application/json",
    },
  });
}
