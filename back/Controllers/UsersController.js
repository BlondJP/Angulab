var UsersModel = require(__dirname + '/../Models/UsersModel');

function get(callback)
{
  UsersModel.getUsers(function (users){
    callback(users);
  });
}

module.exports = {get: get};
