const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('../data/data.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
console.log(middlewares)
server.use(router)
console.log(router)
server.listen(3000, () => {
  console.log('serv at 3000')
})
