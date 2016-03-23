var mainControllers = angular.module('mainControllers', ['ngAnimate']); // add animation dependency

// MAIN index page
mainControllers.controller('MainController', ['$scope', '$http', function($scope, $http) {

  $scope.select = function() {

    // query the DOM to get the selection value to use in controller and in main.html for show page
    $scope.selected = optionVal = $('#selection').val();

    // method to retrieve data
    $http.get("db/" + optionVal + "/data.json").success(function(data) {
      $scope.result = data;
    });

  };

}]);

// Bootstrap 3 show page
mainControllers.controller('Boot3Controller', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('db/boot3/data.json').success(function(data) {
    $scope.result = data;
    $scope.itemIndx = $routeParams.itemId;   // get the index number of the item
  });
}]);

// Command line show page
mainControllers.controller('CommandLineController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('db/cli/data.json').success(function(data) {
    $scope.result = data;
    $scope.itemIndx = $routeParams.itemId;   // get the index number of the item
  });
}]);

// Git show page
mainControllers.controller('GitController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('db/git/data.json').success(function(data) {
    $scope.result = data;
    $scope.itemIndx = $routeParams.itemId;   // get the index number of the item
  });
}]);

