const express = require('express');
const app = express();
const fs = require("fs");

fs.writeFile('./data.txt', 'SOME DATA', err => {
  if (err) {
    console.log(err.message);
  }
});

fs.appendFile('./data.txt', ' ADDED DATA', err => {
  if (err) {
    console.log(err.message);
  }
});

fs.unlink('./data.txt', err => {
  if (err) {
    console.log(err.message);
  }
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