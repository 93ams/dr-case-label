import {ConditionDocument} from "../../src/server/bss/cond/condition.schema"
import {EHRDocument} from "../../src/server/bss/ehr/ehr.schema"
import {aliasMutation, aliasQuery} from "../utils/graphql";

describe('home page', () => {
    let conditions: ConditionDocument[], ehrs: EHRDocument[]
    before(() => {
        cy.dropCollection('ehrs')
        cy.collection('ehrs', 'mockCases')
            .then((res: EHRDocument[]) => ehrs = res)
        cy.collection('conditions', 'mockConditions')
            .then((res: ConditionDocument[]) => conditions = res)
    })
    beforeEach(() => {
        cy.intercept('POST', 'http://localhost:3000/graphql', (req) => {
            aliasMutation(req, 'labelRecord')
        })
    })
    it('should be able to complete the flow', () => {
        cy.visit('/').auth()
            .wait('@gqllabelRecordMutation').wait(1000)
            .get('#submitButton').should('contain.text', 'Next Record').should('be.disabled')
            .get('#conditionList').children().first().children().first().children().first().click()
            .get('#submitButton').should('contain.text', 'Next Record').should('be.not.disabled').click().should('be.disabled')
            .wait('@gqllabelRecordMutation').wait(1000)
            .get('#conditionList').children().first().children().first().children().eq(2).click()
            .get('#submitButton').should('contain.text', 'Next Record').should('be.not.disabled').click().should('be.disabled')
            .wait('@gqllabelRecordMutation').wait(1000)
            .get('#conditionList').children().first().children().first().children().eq(3).click()
            .get('#submitButton').should('contain.text', 'Next Record').should('be.not.disabled').click().should('be.not.disabled')
            .wait('@gqllabelRecordMutation').wait(1000)
            .get('#submitButton').should('contain.text', 'Refresh').click().should('contain.text', 'Refresh').should('be.not.disabled')
            .get('[data-testid="AccountCircleIcon"]').click().get('.MuiList-root > [tabindex="-1"]').click()
            .get('.MuiTypography-h5').should('contain.text', 'Sign in')
    })
})