class LoginPage {

    elements = {

        email: () => cy.get('input[data-qa="login-email"]'),
        password: () => cy.get('input[data-qa="login-password"]'),
        button: () => cy.get('button[data-qa="login-button"]'),
        logado: () => cy.contains('Logout').should('be.visible')
    }

    login(email, password) {

        this.elements.email().type(email);
        this.elements.password().type(password);
        this.elements.button().click();
        this.elements.logado();
    }

    verificarLogoutVisivel() {
        this.elements.logado();
    } 

}

export default new LoginPage();