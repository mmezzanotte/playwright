import { test } from "../../fixtures/baseTest";

import { expect } from "@playwright/test";

import { CheckoutPage } from "../../pages/CheckoutPage";

test(
  "complete purchase flow",

  async ({ page, loginPage, inventoryPage }) => { // playwright te los inyecta automaticamente.
    // No los creas, solo los recibis.
    

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