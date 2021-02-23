const express = require('express');
const app = express();
const fs = require("fs");

fs.readFile('./text.txt', (err, data) => {
  if (err) {
    console.log(err.message);
  }
  else {
    console.log(data.toString());
  }
});

app.listen(3000, () => {
  console.log('listening port 3000')
});

