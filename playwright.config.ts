import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  fullyParallel: true,

  // Evita subir accidentalmente test.only a CI
  forbidOnly: !!process.env.CI,

  // Reintenta tests fallidos sólo en CI
  retries: process.env.CI ? 2 : 0,

  // Ejecuta 1 worker en CI para mayor estabilidad
  workers: process.env.CI ? 1 : undefined,

  reporter: "html",

  use: {
    baseURL: "https://www.saucedemo.com",

    headless: true,

    screenshot: "only-on-failure",

    video: "retain-on-failure",

    trace: "retain-on-failure",
  },

  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
});