let app = angular.module('app', [
  require('./controller'), require('./service'), require('./directive'), require('./filter'),
  require('./app.route.js'), require('./app.constant.js'),
  'ngMaterial'
]);

app.config(($mdThemingProvider) => {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
})
  .run(($rootScope, CONST) => {
    $rootScope.CONST = CONST;
  });