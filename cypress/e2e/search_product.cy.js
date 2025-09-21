/// <reference types="cypress" />

describe('Buscar por um produto', () => {
    it('Buscar por um produto com sucesso', () => {
        cy.acessarPagina('/login');
        cy.login();
        cy.acessarPaginaProdutos();
        cy.search('Blue Top');
        
    });
});