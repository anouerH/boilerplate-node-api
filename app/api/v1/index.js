'use strict'

const router = require('koa-router')()
module.exports = router

router.use('/contracts', require('./contracts').routes())