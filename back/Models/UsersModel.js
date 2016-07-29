function getUsers(callback)
{
  var users =  [
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
  callback(users);
}


module.exports = {getUsers: getUsers};
