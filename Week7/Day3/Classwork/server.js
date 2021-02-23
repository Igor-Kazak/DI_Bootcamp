const express = require('express');
const app = express();
const bp = require('body-parser');
const fs = require("fs");

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())

class Items {
  constructor(name) {
    this.name = name;
  }
}

app.use('/',express.static(__dirname+'/public'));

app.get('/show', function (req, res) {
  console.log('get /items');
  try {
    let syncfile = fs.readFileSync('./names.txt');
    res.send(JSON.parse(syncfile.toString()));
  }
  catch (err) {
    console.log(err.message);
  }
});

app.post('/items', function (req, res) {
  console.log(req.body);
  var arr = [];
  try {
    let syncfile = fs.readFileSync('./names.txt');
    arr = JSON.parse(syncfile);
  }
  catch (err) {
    console.log(err.message);
  }
  arr.push(new Items(req.body.text));
  fs.writeFile('./names.txt', JSON.stringify(arr), err => {
    if (err) {
      console.log(err.message);
    }
  });
  res.send('The name was added!');
});

app.listen(3000, () => {
  console.log('listening port 3000')
});

// app.get('/items/:id',(req,res)=>{
//   res.send(arr[req.params.id]);
// })

// const express = require('express');
// const app = express();
// //const bp = require('body-parser');
// //const path = require("path");

// //app.use(bp.urlencoded({ extended: false }))
// //app.use(bp.json())

// // app.get("/", (req, res) => {
// //   res.sendFile(path.join(__dirname, "public/index.html"))
// // })

// // app.listen(3000, () => {
// //   console.log("Listening on port " + 3000)
// // })

// const fs = require("fs");

// // fs.readFile('./package.json', (err, data) => {
// //   if (err) {
// //     console.log(err.message);
// //   }
// //   else {
// //     console.log(data.toString());
// //   }
// // });

// fs.appendFile('./example.txt', '123', err => {
//   if (err) {
//     console.log(err.message);
//   }
// });

// fs.writeFile('./example1.txt', 'DATA', err => {
//   if (err) {
//     console.log(err.message);
//   }
// });

// fs.unlink('./example1.txt', err => {
//   if (err) {
//     console.log(err.message);
//   }
// });

// try {
//   const syncfile = fs.readFileSync('./example.txt');
//   console.log(syncfile.toString());
// }
// catch (err) {
//   console.log(err.message);
// }

// fs.copyFile('./example.txt', './example2.txt', err => {
//   if (err) {
//     console.log(err.message);
//   }
// });