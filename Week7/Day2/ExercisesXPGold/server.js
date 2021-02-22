const express = require('express');
const app = express();

const bp = require('body-parser')

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())

//app.use('/',express.static(__dirname+'/public'));

// app.route('/login')
// .get(function (req, res) {
//   res.send('Welcome!');
//   console.log('Welcome!');
// });

app.route('/')
.post(function (req, res) {
  console.log(req.body);
  // const user = req.body.username;
  // const password = req.body.password;
  res.send(req.body);
});

// app.get('/:id',(req,res)=>{
//   console.log(req.params);
//   res.send(req.params);
// })

app.listen(3001, () => {
  console.log('listening port 3001')
});