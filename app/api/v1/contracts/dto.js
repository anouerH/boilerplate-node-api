const _ = require('lodash')

exports.contracts = contracts => {
    const _contracts = _.map(contracts, contract => {
        return {
            name: contract.name,
            countryCode: 'FR'
        }
    })

    return _contracts
}