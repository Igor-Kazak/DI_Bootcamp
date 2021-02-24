const express = require('express');
const app = express();
const bp = require('body-parser');
const fs = require("fs");

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())

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
  let arr = [];
  try {
    let syncfile = fs.readFileSync('./items.txt');
    arr = JSON.parse(syncfile);
  }
  catch (err) {
    console.log(err.message);
  }
  arr.push(req.body);
  fs.writeFile('./items.txt', JSON.stringify(arr), err => {
    if (err) {
      console.log(err.message);
    }
  });
  res.send({"message":"item was added"});
});

app.get('/items/:id',(req,res)=>{
  try {
    let syncfile = fs.readFileSync('./items.txt');
    let arr = [];
    arr = JSON.parse(syncfile);
    arr.splice(req.params.id, 1);
  fs.writeFile('./items.txt', JSON.stringify(arr), err => {
    if (err) {
      console.log(err.message);
    }
  });
  res.send({"message":"item was deleted"});
  }
  catch (err) {
    console.log(err.message);
  }
})

app.listen(3000, () => {
  console.log('listening port 3000')
});

