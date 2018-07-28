const { defineSupportCode } = require('cucumber')
const { state, fixtures, httpApi, cli } = require('@ekino/veggies')

defineSupportCode(({ setWorldConstructor }) => {
    setWorldConstructor(function() {
        state.extendWorld(this)
        fixtures.extendWorld(this)
        httpApi.extendWorld(this)
        cli.extendWorld(this)
    })
})

state.install(defineSupportCode)
fixtures.install(defineSupportCode)
httpApi.install({
    baseUrl: 'http://localhost:4000',
})(defineSupportCode)