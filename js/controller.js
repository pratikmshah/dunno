var mainControllers = angular.module('mainControllers', ['ngAnimate']); // add animation dependency

// NEED TO BREAK UP Bootstrap and main later

// MAIN index page
mainControllers.controller('MainController', ['$scope', '$http', function($scope, $http) {

  // in main index page retrieve json data for bootstrap 3
  $http.get('db/boot3/data.json').success(function(data) {
    $scope.boot3 = data;
  });
}]);

// Bootstrap 3 show page
mainControllers.controller('Boot3Controller', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('db/boot3/data.json').success(function(data) {
    $scope.boot3 = data;
    $scope.itemNum = $routeParams.itemId;   // get the index number of the item
  });

}]);