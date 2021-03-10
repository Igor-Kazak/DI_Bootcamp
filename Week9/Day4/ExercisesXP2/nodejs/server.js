const express = require('express');
const app = express();
//const bp = require('body-parser');
//const knex = require('knex');
const cors = require('cors');

app.use(cors());
//app.use(bp.urlencoded({ extended: false }))
//app.use(bp.json())


app.listen(5000, () => console.log('listening on port 5000'));

app.get('/input', (req, res) => {
    console.log('got request')
    res.send({customers: customers});
})

const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Ziv', lastName: 'Chen'},
    {id: 3, firstName: 'Isaac', lastName: 'Groisman'},
];