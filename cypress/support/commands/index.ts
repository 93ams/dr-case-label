import './mongo'

Cypress.Commands.add("dataCy", (value, ...sub) =>
    cy.get(`[data-cy=${value}]` + (sub ? " " + sub.join(" ") : "")))


Cypress.Commands.add('auth', () => {
    cy.get('#username').clear()
    cy.get('#username').type('Dr Oetker')
    cy.get('#password').clear()
    cy.get('#password').type('not my password')
    return cy.get('#login').click()
})
