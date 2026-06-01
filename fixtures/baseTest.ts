import { test as base } from "@playwright/test";

import { LoginPage } from "../pages/LoginPAge";
import { InventoryPage } from "../pages/InventoryPage";

type MyFixtures = {
  loginPage: LoginPage;

  inventoryPage: InventoryPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await use(loginPage);
  },
vol
  inventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);

    await use(inventoryPage);
  },
});
