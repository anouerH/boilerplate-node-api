const Koa = require('koa')
const app = new Koa()

const config = require('@ekino/config')

const api = require('./api')

app.use(api.routes())

app.listen(config.get('port'))