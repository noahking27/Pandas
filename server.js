const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const { Client } = require('pg')
app.use(express.static(path.join(__dirname, 'build')));


 //Database Connection
// const client = new Client()

// client.connect()

// const res = client.query('Select * from States').then((res) => {
//     console.log(res.rows[0].message) // Hello world!
//     client.end()

// }).catch(err => {
//     console.log('ERR ', err)
// })

// const pg = require('pg');
// const pool = new pg.Pool({
// user: 'noah',
// host: '127.0.0.1',
// database: 'postgres',
// password: 'noah',
// port: '5432'});

// pool.query('Select * from public.States', (err, res) => {
//     console.log(err, res);
//     pool.end();
//     data = res;
//     });

// app.get('/States', function (req, res) {      
//     return res.send(res);
// });


require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(process.env.PORT || 8080);

console.log("App listening on PORT: 8080");
