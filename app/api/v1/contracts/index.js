const router = require('koa-router')()
module.exports = router

const axios = require('axios')

const dto = require('./dto')

const config = require('@ekino/config')

router.get('/', async ctx => {
    try {
        const contracts  = await axios.get(`${config.get('services.jcdecaux.url')}/vls/v1/contracts`, {
            params: {
                apiKey: 'bda72541b51a36ea36a15f9c0e5c498000a889d1'
            }
        })

        ctx.status = 200
        ctx.body = dto.contracts(contracts.data)
    } catch(error) {
        console.log(error)
        
        ctx.status = 500
        ctx.body = error
    }
})