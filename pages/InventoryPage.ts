import { Page } from '@playwright/test'; // Importa el tipo Page.

export class InventoryPage { // la pantalla de productos. 
  constructor(private page: Page) {} // Guarda el browser page. 

  async addFirstItemToCart() { // Una accion de usuario.
    await this.page
      .locator('.inventory_item') // busca productos.
      .first() // selecciona el primero.
      .getByRole('button') // busca el boton de agregar al carrito.
      .click(); // Busca el primer producto y clickea su boton. 
  }

  async openCart() { // -> Encapsula la navegacion al carrito. 
    await this.page.locator('.shopping_cart_link').click();
  }
}