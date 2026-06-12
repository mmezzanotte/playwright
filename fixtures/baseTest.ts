import { test as base } from "@playwright/test";

import { LoginPage } from "../pages/LoginPAge";
import { InventoryPage } from "../pages/InventoryPage";
import { ApiClient } from "./ApiClient";

type MyFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  apiClient: ApiClient;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  inventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);
    await use(inventoryPage);
  },

  apiClient: async ({ request }, use) => {
    const apiClient = new ApiClient(
      request,
      'https://jsonplaceholder.typicode.com'
    );
    await use(apiClient);
  },
});
