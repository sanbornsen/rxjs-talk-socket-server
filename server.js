var ws = require("nodejs-websocket");
var wserver = ws.createServer(function (conn) {
    console.log("New connection");
    conn.on("close", function (code, reason) {
        console.log("Connection closed");
    })
})

setInterval(function(){
  broadcast(wserver)
}, 2000);

function broadcast(server) {
	server.connections.forEach(function (conn) {
		d = new Date();
    conn.sendText(d.getSeconds().toString());
	})
}

wserver.listen(8001);