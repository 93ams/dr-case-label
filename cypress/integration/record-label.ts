import {ConditionDocument} from "../../src/server/bss/cond/condition.schema"
import {EHRDocument} from "../../dist/server/bss/ehr/ehr.schema";

describe('home page', () => {
    let conditions: ConditionDocument[], ehrs: EHRDocument[]
    before(() => {
        cy.dropCollection('ehrs').then(cy.log)
        cy.collection('ehrs', 'mockCases')
            .then((res: EHRDocument[]) => ehrs = res)
        cy.collection('conditions', 'conditionList')
            .then((res: ConditionDocument[]) => conditions = res)
    })
    it('should be able to complete the flow', () => {
        cy.visit('/')
        cy.auth()

    })
})