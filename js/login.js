angular
  .module('app', ['ngMaterial'])
  .controller('DemoCtrl', function($scope) {
    $scope.user = {
      Username: '',
      Password: ''
    };
  });

angular.module('buttonsDemo1', ['ngMaterial'])
.controller('AppCtrl', function($scope) {
  $scope.title1 = 'Button';
  $scope.title4 = 'Warn';
  $scope.isDisabled = true;
  $scope.googleUrl = 'http://google.com';
});
