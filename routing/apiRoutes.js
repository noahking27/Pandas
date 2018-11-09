const pg = require('pg');
const pool = new pg.Pool({
  user: 'noah',
  host: '127.0.0.1',
  database: 'postgres',
  password: 'noah',
  port: '5432'
});

module.exports = function (app) {
  app.get('/states', function (req, res) {
    pool.query('Select * from public.States order by States ASC').then(function({ rows }) {
      console.log(rows);
      res.json(rows);
      pool.end();
    });

    // pool.query('Select * from public.cities_extended order by States ASC').then(function({ rows }) {
    //   console.log(rows);
    //   res.json(rows);
    //   pool.end();
    // });
  });

  app.get('/cities', function (req, res) {
    //console.log(req.params.state_code);
    // pool.query('Select * from public.cities_extended where state_code = 'PR' order by city ASC', [req.params.state_code]).then(function({ rows }) {
    //   console.log(rows);
    //   res.json(rows);
    //   pool.end();
    // });

    pool.query('SELECT city, state_code, zip, county, "ID", "Latitude", "Longitude" FROM public.cities_extended where state_code = "PR"').then(function({ rows }) {
      console.log(rows);
      res.json(rows);
      pool.end();
    })

    // pool.query('Select * from public.cities_extended order by States ASC').then(function({ rows }) {
    //   console.log(rows);
    //   res.json(rows);
    //   pool.end();
    // });
  });
};
