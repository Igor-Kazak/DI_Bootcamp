const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('<h2>Some data...</h2>')
});

app.listen(3000, () => {
  console.log('listening port 3000')
});