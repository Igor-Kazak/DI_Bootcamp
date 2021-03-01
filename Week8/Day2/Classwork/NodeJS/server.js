const express = require('express');
const app = express();
const knex = require('knex');
const cors = require('cors');

app.use(cors());

app.listen(5000, () => console.log('listening on port 5000'));

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '1',
        database: 'dvdrental'
    }
});

// db
// .select('customer_id', 'first_name', 'last_name').from('customer')
// //.where({'country_id':98})
// .then(data=>{
//     console.log(data);
// })
// .catch(err => {
//     console.log(err.message)
// });

app.set("db", db);

//Here we select only the columns ‘first_name’ and ‘last_name’ from the actors table
app.get('/', (req, res) => {
    db
        .select('customer_id', 'first_name', 'last_name').from('customer')
        //.where({'country_id':98})
        .then(data => {
            console.log('got request')
            res.send(data);
        })
        .catch(err => {
            console.log(err.message)
        });
})

// // To select all the columns, we do:
// app.get('/', (req, res) => {
//     db
//     .select().from('actors')
//     .then(actors =>
//             res.send(actors)
//     )
// })

// // select "id" from "actors" where "first_name" = 'Matt' and "last_name" = 'Damon'
// app.get('/', (req, res) => {
//     db('actors')
//     .where({ first_name: 'Matt', last_name: "Damon" })
//     .then(actors =>
//         res.send(actors)
//     )
// })

// // insert into "actors" ("first_name", "last_name", "age", "number_oscars") 
// // values ('Gal'), ('Gadot'), ('1985-04-30'), (0) 
// // returning "actor_id", "first_name", "last_name"
// app.get('/', (req, res) => {
//     db('actors')
//         .returning(['actor_id', 'first_name', 'last_name'])
//         .insert({ first_name: 'Gal', last_name: 'Gadot', age: '1985-04-30', number_oscars: 0 })
//         .then(actors =>
//             res.send(actors)
//         )
// })

// // update "actors" 
// // set "number_oscars" = 2 , "age" = '1985-04-29' 
// // where "first_name" = 'Gal' and "last_name" = "Gadot" 
// // returning "actor_id", "number_oscar"
// app.get('/', (req, res) => {
//     db('actors')
//         .where('first_name', 'Gal')
//         .andWhere('last_name', 'Gadot')
//         .update({
//             number_oscars: 2,
//             age: '1985-04-29'
//         },
//             ['actor_id', 'number_oscars'])
//         .then(actors =>
//             res.send(actors)
//         )
// })