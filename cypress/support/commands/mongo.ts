import * as mongo from "cypress-mongodb"

mongo.addCommands().catch(console.error)
Cypress.Commands.add('insertManyFromMock', (collection, mock) =>
    cy.insertMany(Cypress.env(mock), {
        forceObjectId: false,
        database: 'nest',
        collection,
    }))
Cypress.Commands.add('collection', <T>(collection, mock) =>
    cy.findMany({}, {collection}).then((vals:T[]) => {
        if (!vals || !vals.length) return cy.insertManyFromMock(collection, mock)
        return vals
    }))