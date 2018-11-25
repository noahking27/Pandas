const express = require('express');
// const bodyParser = require('body-parser')
const path = require('path');
const app = express();
// const { Client } = require('pg')
app.use(express.static(path.join(__dirname, 'build')));

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/build/index.html'));
  });

app.listen(process.env.PORT || 8080);

console.log("App listening on PORT: 8080");
