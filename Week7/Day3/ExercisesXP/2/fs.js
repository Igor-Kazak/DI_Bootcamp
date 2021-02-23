const express = require('express');
const app = express();
const fs = require("fs");

fs.writeFile('./data.txt', 'SOME DATA', err => {
  if (err) {
    console.log(err.message);
  }
});

app.listen(3000, () => {
  console.log('listening port 3000')
});

