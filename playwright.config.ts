import "allure-playwright";
import { defineConfig, devices } from "@playwright/test";
import { ENV } from "./utils/env.js";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  retries: process.env.CI ? 2 : 0,
  reporter: [
    ["list"],
    ["allure-playwright", { outputFolder: "reports/allure-results" }],
  ],
  projects: [
    {
      name: "ui-tests",
      testDir: "./tests/ui",
      use: {
        baseURL: ENV.uiBaseUrl,
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "api-tests",
      testDir: "./tests/api",
      use: {
        baseURL: ENV.apiBaseUrl,
        extraHTTPHeaders: {
          "x-api-key": "reqres-free-v1",
          "Content-Type": "application/json",
        },
      },
    },
  ],
});
