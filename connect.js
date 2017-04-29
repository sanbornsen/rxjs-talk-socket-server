var WebSocket = require("websocket")

// Scream server example: "hi" -> "HI!!!"
// var connection = ws.connect('ws://localhost:8001', {}, (msg) => console.log('Message coming up', msg));


// connection.sendText('try', (whatever) => {
//   console.log(whatever);
// })

// connection.beginBinary();
// connection.send('hello');

connection = new WebSocket("ws://localhost:8081");

connection.onopen = () => {
  connection.send('Hello');
}