import { Page } from "@playwright/test";

export class LoginPage {
  // Define una clase. Exportar la clase LoginPage para que
  // pueda ser importada en otros archivos. La clase representa la página
  //  de login de la aplicación.

  constructor(private page: Page) {} // El constructor de la clase
  //  recibe un argumento de tipo Page, que representa una pestaña del navegador.
  //  El argumento se asigna a una propiedad privada de la clase,
  //  lo que permite que los métodos de la clase puedan interactuar con la página del navegador.
  // El constructor es un método especial que se ejecuta
  //  cuando se crea una instancia de la clase. Guarda el objeto Page dentro de la clase.
  async goto() {
    await this.page.goto('/'); // El método goto() navega a la URL especificada.
    // En este caso, la URL de la página de login de la aplicación. Encapsula la navegacion, porque esta bueno?
    // porque despues el test queda limpio.
  }

    async login(
    username: string,
    password: string
  ) {

    await this.page.getByPlaceholder("Username").fill(username); // busca input, completa texto.

    await this.page.getByPlaceholder("Password").fill(password);

    await this.page.getByRole("button", { name: "Login" }).click(); //porque esta muy bueno usar getByRole?
    // Porque es estable, accesible, recomendado por playwight. Busca el boton de login y hace click.
  }
}
