var express = require('express');
var path = require('path');
var app = express();

app.use("/", express.static(path.join(__dirname, 'front')));

app.get('/users', function (req, res) {

  var users = [
    {name: 'admin', age:0},
    {name: 'jp', age:25},
    {name: 'jo', age:31},
    {name: 'awais', age:25},
    {name: 'diadino', age:27},
    {name: 'quentin', age:29},
    {name: 'joanna', age:23},
    {name: 'naid', age:30},
    {name: 'cyrille', age:46}
  ];

  return res.send(users);
});

var port = 3000;
app.listen(port, function () {
  console.log('Angulab server listening on port '+port+' ...');
});
