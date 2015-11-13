var app = angular.module('mstest', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {


    $routeProvider.when("/poll/:id?", {
        templateUrl: "views/poll.html",
        controller: 'pollCtrl'
  });

}]);

angular.module('mstest').controller("MasterController", ['$rootScope', '$location', '$scope', function ($rootScope, $location, $scope) {

}]);








