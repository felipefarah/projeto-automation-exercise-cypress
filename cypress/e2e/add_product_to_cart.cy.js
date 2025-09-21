/// <reference types="cypress" />

describe('Adiciona produto no carrinho', () => {
    it('Adicionar produto no carrinho com sucesso', () => {
        cy.acessarPagina('/login');
        cy.login();
        cy.addProductToCartByIndex(0);
        
    });
});