const express = require('express');
const app = express();

const car = {
  brand: 'Bentley',
  model: 'Azure'
};

app.use('/',express.static(__dirname+'/public'));
app.route('/login')
.get(function (req, res) {
  res.send(car)
  console.log(car)
});

app.listen(3000, () => {
  console.log('listening port 3000')
});