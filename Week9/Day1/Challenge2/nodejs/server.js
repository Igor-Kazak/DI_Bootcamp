const express = require('express');
const app = express();
const bp = require('body-parser');
const knex = require('knex');
const cors = require('cors');

app.use(cors());
app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())


app.listen(5000, () => console.log('listening on port 5000'));

app.post('/input', (req, res) => {
    console.log('got data: '+req.body.message)
    res.send({answer: `We got your message: ${req.body.message}`});
})
