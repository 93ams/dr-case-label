/// <reference types="cypress" />
import 'cypress-dark'
import './commands'

export type HttpKey = keyof HTMLElementTagNameMap | string

declare global {
    namespace Cypress {
        interface Chainable {
            auth(): Chainable
            dataCy(value: string, ...sub: HttpKey[]): Chainable<JQuery<HttpKey | Node>>
            collection<T>(collection: string, mock: string): Chainable<T>
            insertManyFromMock<T>(collection: string, mock: string): Chainable<T>
        }
    }
}