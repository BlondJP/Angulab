var express = require('express');
var path = require('path');
var app = express();

/* Inclusion du Front */
app.use("/", express.static(path.join(__dirname, 'front')));

/* Inclusion du Back */
require('./back/routes')(app);

var port = 3000;
app.listen(port, function () {
  console.log('Angulab server listening on port '+port+' ...');
});
