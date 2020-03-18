var dgram = require('dgram');
const iRegIP = '127.0.0.1';
const iRegPort = 7000;
const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
var message = new Buffer.from('100'); // tutaj podpinamy wartość z suwaka
var client = dgram.createSocket('udp4'); // deklaracja clienta

server.use(middlewares)
server.get('/dimmer', (request, response) => {
    response.send("dimmer")
console.log('server get new value');
client.send(message, 0, message.length, iRegPort, iRegIP, function(err, bytes) {
  if (err) throw err;
  console.log('UDP message sent to ' + iRegIP +':'+ iRegPort);
  client.close();
});
})
server.listen(10000, () => {
  console.log('serv at 10000')
})





