let http = require("http");

const car = {
  brand: 'Bentley',
  model: 'Azure'
};

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end(JSON.stringify(car));
});

server.listen(8080, () => {
    console.log('listening port 8080')
});