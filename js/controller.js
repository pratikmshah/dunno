var mainControllers = angular.module('mainControllers', ['ngAnimate']); // add animation dependency

// NEED TO BREAK UP Bootstrap and main later

// MAIN index page
mainControllers.controller('MainController', ['$scope', '$http', function($scope, $http) {

  $scope.select = function() {

    // query the DOM to get the selection value
    optionVal = $('#selection').val();

    if (optionVal === 'boot3') {
      // bootstrap 3 data
      $http.get("db/" + optionVal + "/data.json").success(function(data) {
        $scope.boot3 = data;
      });
    } else if (optionVal === 'git') {
      $scope.boot3 = null;
    }

  };

}]);

// Bootstrap 3 show page
mainControllers.controller('Boot3Controller', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('db/boot3/data.json').success(function(data) {
    $scope.boot3 = data;
    $scope.itemIndx = $routeParams.itemId;   // get the index number of the item
  });

}]);