class ProductPage {

    addProductToCartByIndex (index) {

        cy.get('.product-image-wrapper').eq(index).find('.add-to-cart:visible').click();


    }

    elements = {
        productsButton: () => cy.get('a[herf="/products"]'),
        search: () => cy.get('#search_product'), 
        searchButton: () => cy.get('#submit_search')
        
    }

    acessarPaginaProdutos() {

        this.elements.productsButton().click();
    }

    searchProduct (nomeProduto) {
        this.elements.search().clear().type(nomeProduto);
        this.elements.searchButton().click();

    }
}

export default new ProductPage();