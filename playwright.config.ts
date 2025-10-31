import { defineConfig, devices } from "@playwright/test";
import { ENV } from "./utils/env.js";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  retries: process.env.CI ? 2 : 0,
  reporter: [
    ["html"],
    // [
    //   "@testomatio/reporter/playwright",
    //   {
    //     apiKey: ENV.testomatApiKey,
    //   },
    // ],
    ["list"],
  ],
  use: {
    baseURL: ENV.baseUrl,
    trace: "on-first-retry",
    extraHTTPHeaders: {
      "x-api-key": "reqres-free-v1",
      "Content-Type": "application/json",
    },
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
