const {dateTime} = require("./main");

let http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end('Now: ' + dateTime());
});

server.listen(8080);