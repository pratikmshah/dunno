var mainControllers = angular.module('mainControllers', ['ngAnimate']); // add animation dependency

// MAIN index page
mainControllers.controller('MainController', ['$scope', '$http', function($scope, $http) {

  $scope.select = function() {

    // query the DOM to get the selection value to use in controller and in main.html for show page
    $scope.selected = optionVal = $('#selection').val();

    if (optionVal === 'boot3') {

        $http.get("db/" + optionVal + "/data.json").success(function(data) {
          $scope.result = data;
        });

    } else if (optionVal === 'git') {

        $scope.result = null;

    } else if (optionVal === 'cli') {

        $http.get("db/" + optionVal + "/data.json").success(function(data) {
          $scope.result = data;
        });
    }

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


// CONTROLLER TEMPLATE

// } else if (optionVal === '[nameOfValue]') {
    // $http.get("db/" + optionVal + "/data.json").success(function(data) {
    //    $scope.result = data;
    // });
// }

// [Showpage Name For] show page
// mainControllers.controller('[ControllerName]', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
//   $http.get('db/[folder name]/data.json').success(function(data) {
//     $scope.result = data;
//     $scope.itemIndx = $routeParams.itemId;   // get the index number of the item
//   });


