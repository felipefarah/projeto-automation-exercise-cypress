import HomePage from "../pages/home_page";
import LoginPage from "../pages/login_page";
import ProductPage from "../pages/product_page";
import NewUserPage from "../pages/new_user_page";

Cypress.Commands.add("acessarPagina", () => {
  HomePage.visit("/login");
});

// Cypress.Commands.add('login', (email, password) => {

//     LoginPage.login(email, password);
// })
Cypress.Commands.add("login", () => {
  cy.fixture("usuario").then((user) => {
    LoginPage.login(user.email, user.password);
  });
});

Cypress.Commands.add("verificarLogout", () => {
  LoginPage.verificarLogoutVisivel();
});

Cypress.Commands.add("addProductToCartByIndex", (index) => {
  ProductPage.addProductToCartByIndex(index);
});

Cypress.Commands.add("newUser", () => {
  cy.fixture("newUsuario").then((user) => {
    NewUserPage.newUser(
      user.nome,
      user.email,
      user.password,
      user.dia,
      user.mes,
      user.ano,
      user.primeiroNome,
      user.ultimoNome,
      user.empresa,
      user.endereco,
      user.endereco2,
      user.pais,
      user.estado,
      user.cidade,
      user.cep,
      user.celular
    );
  });
});

Cypress.Commands.add("acessarPaginaProdutos", () => {
    HomePage.visit('/products ');
});

Cypress.Commands.add("search", (nomeProduto) => {
    ProductPage.searchProduct(nomeProduto);
});