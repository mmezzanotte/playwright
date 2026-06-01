import { test, expect } from "@playwright/test";

import { CheckoutPage } from "../../pages/CheckoutPage";
import { LoginPage } from "../../pages/LoginPAge";
import { InventoryPage } from "../../pages/InventoryPage";

test("complete purchase flow", async ({ page }) => {
    // No los creas, solo los recibis.

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const checkoutPage = new CheckoutPage(page);

    // LOGIN
    await loginPage.goto();

    await loginPage.login(
      "standard_user",
      "secret_sauce"
    );

    // ASSERT LOGIN
    await expect(page).toHaveURL(/inventory/);

    await expect(
      page.getByText("Products")
    ).toBeVisible();

    // INVENTORY PAGE
    await inventoryPage.addFirstItemToCart();

    await inventoryPage.openCart();

    // CHECKOUT
    await page
      .getByRole("button", { name: "Checkout" })
      .click();

    await checkoutPage.fillCheckoutInformation(
      "Mariana",
      "QA",
      "7000"
    );

    await checkoutPage.continueCheckout();

    await checkoutPage.finishCheckout();

    // FINAL ASSERTION
    await expect(
      page.getByText("Thank you for your order!")
    ).toBeVisible();
  }
);