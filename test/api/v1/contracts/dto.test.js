const chai = require('chai')
const expect = chai.expect

const dto = require('../../../../app/api/v1/contracts/dto')

describe('Feature', () => {
    it('should return tranformed object', () => {
        const expectedApiJson = [{
            name: "Rouen",
            country_code: null
        }]

        expect(dto.contracts(expectedApiJson)).to.be.eql([{
            name: "Rouen",
            countryCode: "R"
        }])
    })
})