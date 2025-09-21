/// <reference types="cypress" />

describe('Cadastro de novo usuário', () => {
    it('Usuário cadastrado com sucesso', () => {
    cy.acessarPagina('/login');
    cy.newUser();
  })
})