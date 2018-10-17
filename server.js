const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(process.env.PORT || 8080);

console.log("App listening on PORT: 8080");
