var ws = require("nodejs-websocket");
var wserver = ws.createServer(function (conn) {
    console.log("New connection");
    conn.on("close", function (code, reason) {
        console.log("Connection closed");
    })
})

function getRandom(mn, mx) {
  min = Math.ceil(mn);
  max = Math.floor(mx);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(function(){
  broadcast(wserver, getRandom(10, 90).toString())
}, getRandom(2000, 5000));

function broadcast(server, msg) {
	server.connections.forEach(function (conn) {
    conn.sendText(msg);
	})
}

wserver.listen(8001);