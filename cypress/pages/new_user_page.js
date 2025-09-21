class NewUserPage {

    elements = {

        nome: () => cy.get('input[data-qa="signup-name"]'),
        email: () => cy.get('input[data-qa="signup-email"]'),
        button: () => cy.get('button[data-qa="signup-button"]'),
        radioButton: () => cy.get('#id_gender1'),
        password: () => cy.get('input[data-qa="password"]'),
        date: () => cy.get('select[data-qa="days"]'),
        month: () => cy.get('select[data-qa="months"]'),
        year: () => cy.get('select[data-qa="years"]'),
        checkBoxNews: () => cy.get('#newsletter'),
        checkBoxReceive: () => cy.get('#optin'),
        firstName: () => cy.get('input[data-qa="first_name"]'),
        lastName: () => cy.get('input[data-qa="last_name"]'),
        company: () => cy.get('input[data-qa="company"]'),
        address: () => cy.get('input[data-qa="address"]'),
        address2: () => cy.get('input[data-qa="address2"]'),
        country: () => cy.get('select[data-qa="country"]'),
        state: () => cy.get('input[data-qa="state"]'),
        city: () => cy.get('input[data-qa="city"]'),
        zipCode: () => cy.get('input[data-qa="zipcode"]'),
        mobileNumber: () => cy.get('input[data-qa="mobile_number"]'),
        createAccount: () => cy.get('button[data-qa="create-account"]')

    }

    newUser(nome, email, password, dia, mes, ano, primeiroNome, ultimoNome, empresa, endereço, endereço2, pais, estado, cidade, cep, celular) {

        this.elements.nome().type(nome);
        this.elements.email().type(email);
        this.elements.button().click();
        this.elements.radioButton().check();
        this.elements.password().type(password);
        this.elements.date().select(dia);
        this.elements.month().select(mes);
        this.elements.year().select(ano);
        this.elements.checkBoxNews().check();
        this.elements.checkBoxReceive().check();
        this.elements.firstName().type(primeiroNome);
        this.elements.lastName().type(ultimoNome);
        this.elements.company().type(empresa);
        this.elements.address().type(endereço);
        this.elements.address2().type(endereço2);
        this.elements.country().select(pais);
        this.elements.state().type(estado);
        this.elements.city().type(cidade);
        this.elements.zipCode().type(cep);
        this.elements.mobileNumber().type(celular);
        this.elements.createAccount().click();
    }
}

export default new NewUserPage();