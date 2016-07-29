var express = require('express');
var path = require('path');
var app = express();

app.use("/", express.static(path.join(__dirname, 'front')));

console.log(1);


require('./back/routes')(app);

console.log(2);

var port = 3000;
app.listen(port, function () {
  console.log('Angulab server listening on port '+port+' ...');
});
