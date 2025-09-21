/// <reference types="cypress" />

describe('Teste de login', () => {
    it('Usuário faz login com sucesso', () => {
    cy.acessarPagina('/login');
    cy.login();
  })
})