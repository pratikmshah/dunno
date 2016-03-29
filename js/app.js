var dunno = angular.module('dunno', [
  'ngRoute',                      // use angular routes
  'mainControllers',              // run main controller
  'youtube-embed'                 // add youtube embedded videos
]);

dunno.config(['$routeProvider', function($routeProvider){
  $routeProvider.
  when('/main', {
    templateUrl: 'partials/main.html',
    controller: 'MainController'                  // main controller conatains all data (bootstrap, git, rails4 etc..)
  }).
  when('/css/:itemId', {
    templateUrl: 'partials/bootstrap3/show.html',
    controller: 'CssController'                   // bootstrap 3 controller
  }).
  when('/boot3/:itemId', {
    templateUrl: 'partials/bootstrap3/show.html',
    controller: 'Boot3Controller'                 // bootstrap 3 controller
  }).
  when('/cli/:itemId', {
    templateUrl: 'partials/cli/show.html',
    controller: 'CommandLineController'           // command line controller
  }).
  when('/git/:itemId', {
    templateUrl: 'partials/git/show.html',
    controller: 'GitController'                   // git controller
  }).
  when('/html/:itemId', {
    templateUrl: 'partials/html/show.html',
    controller: 'HtmlController'                  // HTML controller
  }).
  otherwise({
    redirectTo: '/main'                           // redirect to main page
  });
}]);