var ws = require("nodejs-websocket")
var Observable = require("rxjs/Observable");
var Rx = require("rxjs");


var sub = new Rx.Subject();

var conn = ws.connect('ws://localhost:8001');


conn.on("text", function (msg) {
  sub.next(msg);
})

conn.on("close", function (code, reason) {
  sub.complete();
})

conn.on("error", function (err) {
  sub.error(err);
})



sub.subscribe(
  (msg) => console.log(msg),
  (err) => console.log(err),
  () => console.log('complete')
);