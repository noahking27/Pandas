const pg = require('pg');
var fs = require('fs');
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

// OLD CONFIG MIGHT NOT NEED NOW
// const pool = new pg.Pool({
//   user: process.env.AWS_USERNAME,
//   host: process.env.AWS_HOST,
//   database: process.env.AWS_DATABASE,
//   password: process.env.AWS_PWD,
//   port: process.env.AWS_PORT,
//   ssl  : {
//     ca : fs.readFileSync(__dirname + '/config/rds-combined-ca-bundle.pem')
//   }
// });

module.exports = function (app) {
  app.get('/api/states', function (req, res) {
    client.query('Select * from public.States order by States ASC').then(function({ rows }) {
      console.log(rows);
      res.json(rows);
      client.end();
    });

    // pool.query('Select * from public.cities_extended order by States ASC').then(function({ rows }) {
    //   console.log(rows);
    //   res.json(rows);
    //   pool.end();
    // });
  });

  app.get('/api/cities', function (req, res) {
    //console.log(req.params.state_code);
    // pool.query('Select * from public.cities_extended where state_code = 'PR' order by city ASC', [req.params.state_code]).then(function({ rows }) {
    //   console.log(rows);
    //   res.json(rows);
    //   pool.end();
    // });

    client.query('SELECT city, state_code, zip, county, "ID", "Latitude", "Longitude" FROM public.cities_extended where state_code = "PR"').then(function({ rows }) {
      console.log(rows);
      res.json(rows);
      client.end();
    })

    // pool.query('Select * from public.cities_extended order by States ASC').then(function({ rows }) {
    //   console.log(rows);
    //   res.json(rows);
    //   pool.end();
    // });
  });
};
