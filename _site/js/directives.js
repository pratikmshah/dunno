// return partials without creating new scope
dunno.directive('partial', function() {
  return {
      restrict: 'AE',
      templateUrl: function(el, attrs) {
        return attrs.templatePath
      }
  };
});