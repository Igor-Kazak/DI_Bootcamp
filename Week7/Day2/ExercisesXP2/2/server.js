const express = require('express');
const app = express();

app.route('/')
.get(function (req, res) {
  res.send('Welcome!');
  console.log('Welcome!');
});

app.get('/:id',(req,res)=>{
  console.log(req.params);
  res.send(req.params);
})

app.listen(3000, () => {
  console.log('listening port 3000')
});