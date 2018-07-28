'use strict'

const router = require('koa-router')()
module.exports = router

router.use('/api/v1', require('./v1').routes())
