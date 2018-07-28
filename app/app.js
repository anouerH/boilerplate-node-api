const Koa = require('koa')
const app = new Koa()

const api = require('./api')

app.use(api.routes())

app.listen(4000)