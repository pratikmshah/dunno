var dunno = angular.module('dunno', [
  'ngRoute',                      // use angular routes
  'bootstrap3Controllers'         // use bootstrap 3 controllers
]);

dunno.config(['$routeProvider', function($routeProvider){
  $routeProvider.
  when('/main', {
    templateUrl: 'partials/main.html',
    controller: 'MainController'        // main controller conatains all data (bootstrap, git, rails4 etc..)
  }).
  when('/boot3/:itemId', {
    templateUrl: 'partials/bootstrap3/boot3.html',
    controller: 'Boot3Controller'       // bootstrap 3 controller
  }).
  otherwise({
    redirectTo: '/main'                 // redirect to main page
  });
}]);