const express = require('express');
const app = express();
const bp = require('body-parser')

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())

class Items {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

var arr = [];

app.use('/',express.static(__dirname+'/public'));

app.get('/items', function (req, res) {
  console.log('get /items');
  res.send(arr);
});

app.post('/items', function (req, res) {
  console.log(req.body);
  arr.push(new Items(req.body.text, req.body.price))
  res.send(arr);
});

app.get('/items/:id',(req,res)=>{
  res.send(arr[req.params.id]);
})

app.listen(3000, () => {
  console.log('listening port 3000')
});