const express = require('express');
const app = express();
const bp = require('body-parser');
const knex = require('knex');

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())
app.use('/',express.static(__dirname+'/public'));

const db = knex({
  client: 'pg',
  connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: '1',
      database: 'public'
  }
});

db.schema.hasTable('shoppinglist').then(function(exists) {
  if (!exists) {
    return db.schema.createTable('shoppinglist', function(table) {
      table.increments();
      table.string('name');
      table.string('quantity');
      table.timestamps();
    });
  }
});

app.get('/items', function (req, res) {
  console.log('get /items');
  db
    .select('name', 'quantity').from('shoppinglist')
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err.message)
    });
});

app.post('/items', function (req, res) {
  console.log(req.body);
      db('shoppinglist')
        .returning('*')
        .insert(req.body)
        .then(data =>
          res.send({"message":"item was added"})
        )
});

app.get('/items/:id',(req,res)=>{
  db('shoppinglist')
  .where('id', req.params.id)
  .del()
  .then(data => {
    res.send({"message":"item was deleted"})
  })
  .catch(err => {
    console.log(err.message)
  });
})

app.listen(3000, () => {
  console.log('listening port 3000')
});
