angular.module('zeroApp', [])
.controller('UsersController', function($scope, UsersFactory){

    $scope.users = UsersFactory.getUsers().then(function(users){
      $scope.users = users;
    });

})
.factory('UsersFactory', function ($http, $q){

  var factory = {

    /* INITIALIZATION */
    users: false,

    getUsers : function(){
      var defered = $q.defer();
      $http.get('/users')
                  .success(function (data, status){
                    factory.users = data;
                    defered.resolve(factory.users);
                  })
                  .error(function (data, status){
                    defered.reject('Impossible de récupérer les données')
                  })

      return defered.promise;
     },

    getUser : function(id){ return factory.users[0] }
  };

  return factory;

})
