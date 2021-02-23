const express = require('express');
const app = express();
const bp = require('body-parser');
const fs = require("fs");

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())

class Items {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

app.use('/',express.static(__dirname+'/public'));

app.get('/items', function (req, res) {
  console.log('get /items');
  try {
    let syncfile = fs.readFileSync('./items.txt');
    res.send(JSON.parse(syncfile));
  }
  catch (err) {
    console.log(err.message);
  }
});

app.post('/items', function (req, res) {
  console.log(req.body);
  var arr = [];
  try {
    let syncfile = fs.readFileSync('./items.txt');
    arr = JSON.parse(syncfile);
  }
  catch (err) {
    console.log(err.message);
  }
  arr.push(new Items(req.body.text, req.body.price))
  fs.writeFile('./items.txt', JSON.stringify(arr), err => {
    if (err) {
      console.log(err.message);
    }
  });
  res.send('The item was added!');
});

app.get('/items/:id',(req,res)=>{
  try {
    let syncfile = fs.readFileSync('./items.txt');
    res.send(JSON.parse(syncfile)[req.params.id]);
  }
  catch (err) {
    console.log(err.message);
  }
})

app.listen(3000, () => {
  console.log('listening port 3000')
});

