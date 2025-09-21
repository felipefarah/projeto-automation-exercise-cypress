<h1># Automação de Testes E2E – E-commerce</h1>

[![Cypress Version](https://img.shields.io/badge/Cypress-12.13.0-blue)](https://www.cypress.io/)
[![Node Version](https://img.shields.io/badge/Node-18.x-green)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)
[![Test Status](https://img.shields.io/badge/Testes-Passing-brightgreen)](#)

---
## Descrição
Este projeto implementa testes **end-to-end (E2E)** para um sistema web de e-commerce utilizando **Cypress**. O objetivo é validar automaticamente as funcionalidades críticas da aplicação, garantindo qualidade e confiabilidade.

Funcionalidades testadas:

- Login de usuário
- Cadastro de novos usuários
- Busca de produtos
- Adição de produtos ao carrinho

O projeto segue **boas práticas de automação**, utilizando **Page Objects**, **Fixtures** e **Custom Commands**, garantindo testes claros, reutilizáveis e fáceis de manter.

---
## Estrutura do Projeto

cypress/
├── e2e/
│ ├── login.cy.js
│ ├── new_user.cy.js
│ ├── search_product.cy.js
│ └── add_product_to_cart.cy.js
├── fixtures/
│ ├── usuario.json
│ └── newUsuario.json
├── pages/
│ ├── login_page.js
│ ├── new_user_page.js
│ ├── product_page.js
│ └── home_page.js
├── support/
│ ├── commands.js
│ └── e2e.js
cypress.config.js
package.json
README.md

## Tecnologias Utilizadas
- **[Cypress](https://www.cypress.io/)** – Framework de automação E2E
- **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** – Linguagem principal
- **JSON** – Armazenamento de dados de teste

---
## Como Executar

1. **Clonar repositório:**
git clone <URL_DO_REPOSITORIO>

2. **Instalar dependências:**
npm install

3. **Executar testes no modo interativo:**
npx cypress open

4. **Executar testes no modo headless:**
npx cypress run

## Boas Práticas Aplicadas

**Page Objects:** Abstração de seletores e ações para facilitar manutenção.
**Fixtures:** Centralização de dados de teste, garantindo consistência.
**Custom Commands:** Reuso de funcionalidades comuns entre testes.
**Testes independentes:** Cada teste valida uma funcionalidade específica.
**Relatórios e Logs:** Suporte a relatórios detalhados para análise de falhas.

