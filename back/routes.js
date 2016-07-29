var UsersController = require('./Controllers/UsersController');



module.exports = function (app)
{

  app.get('/users', function (req, res) {

    UsersController.get(function (users){

      return res.send(users);

    });

  });


}
