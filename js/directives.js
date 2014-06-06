
myApp.directive('preloader', function() {
  return {
      restrict: 'E',
      replace: 'true',
      template: '<div class="preloader"></div>'
  };
});