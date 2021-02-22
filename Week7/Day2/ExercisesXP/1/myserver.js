let http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end('first line<br>second line<br>third line');
});

server.listen(3000, () => {
    console.log('listening port 3000')
});