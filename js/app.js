var dunno = angular.module('dunno', [
  'ngRoute',                      // use angular routes
  'mainControllers'               // run main controller
]);

dunno.config(['$routeProvider', function($routeProvider){
  $routeProvider.
  when('/main', {
    templateUrl: 'partials/main.html',
    controller: 'MainController'                  // main controller conatains all data (bootstrap, git, rails4 etc..)
  }).
  when('/boot3/:itemId', {
    templateUrl: 'partials/bootstrap3/boot3.html',
    controller: 'Boot3Controller'                 // bootstrap 3 controller
  }).
  when('/cli/:itemId', {
    templateUrl: 'partials/cli/cli.html',
    controller: 'CommandLineController'           // command line controller
  }).
  otherwise({
    redirectTo: '/main'                           // redirect to main page
  });
}]);

// TEMPLATE FOR NEW SHOW ROUTE
// when('/[selectName]/:itemId', {
//   templateUrl: 'partials/[folderName]/[fileName].html',
//   controller: '[ControllerName]'       // [Name] controller
// }).

