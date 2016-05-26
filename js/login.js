angular
  .module('app', ['ngMaterial','ui.router'])
  .config(function($mdThemingProvider, $stateProvider, $urlRouterProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('teal') 

$urlRouterProvider.otherwise("/vpas");    
$stateProvider.state('vpas', {
      url: "/vpas",
      templateUrl: "/vpas.html"
    })
})

  .controller('DemoCtrl', function($scope) {
    $scope.user = {
      Username: '',
      Password: ''
    };
  });

angular.module('buttonsDemo1', ['ngMaterial'])
.controller('AppCtrl', function($scope) {
});
angular.module('myApp', ['ngMaterial'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('black') // specify primary color, all
                            // other color intentions will be inherited
                            // from default
});