/// <reference types="cypress" />

const {readFileSync, readdirSync} = require('fs')
const mongo = require('cypress-mongodb')
const {join} = require('path')

const mockDir = join(__dirname, '../../mock/')
const readMock = (file) => readFileSync(join(mockDir, file), 'utf8')

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
    mongo.configurePlugin(on).then(() => {
        let cases = []
        readdirSync(mockDir).forEach((file) => {
            if (file.includes('case')) {
                cases = [...cases, { description: readFileSync(join(mockDir, file), 'utf-8').toString() }]
            }
        })
        config.env.mockCases = cases
        import('neat-csv').then((neatCsv) => neatCsv.default(readMock('conditions.csv'))
            .then((list) => config.env.mockConditions = list))
    })
    return config
}
