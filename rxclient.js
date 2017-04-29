var RxSocketSubject = require('rx-socket-subject');

var socket = RxSocketSubject.create('ws://localhost:8001');


socket.subscribe(
  (msg) => console.log(msg)
);