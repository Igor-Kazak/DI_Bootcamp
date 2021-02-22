const { largeNumber } = require("./main");
const b = 5;

let http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end('Number is: ' + (largeNumber + b) + '<br><h3>Hi there at the frontend!</h3>');
});

server.listen(3000);