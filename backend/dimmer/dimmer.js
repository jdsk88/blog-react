var PORT = 59119; // port na którym odbieramy dane
var HOST = '127.0.0.1'; // adres serwera
var dgram = require('dgram'); // modul datagram
var server = dgram.createSocket('udp4'); //deklaracja servera

//nasłuchiwanie serwera
server.on('listening', function() {
  var address = server.address(); // podłączenie adresu serwera
 console.log('UDP Server listening on ' + address.address + ':' + address.port); //
});
// odbieranie wiadomości
server.on('message', function(message, remote) {
 console.log(remote.address + ':' + remote.port +' - ' + message);
});
server.bind(PORT, HOST);