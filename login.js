angular
  .module('app', ['ngMaterial'])
  .controller('DemoCtrl', function($scope) {
    $scope.user = {
      name: 'John Doe',
      email: '',
      phone: '',
      address: 'Mountain View, CA',
      donation: 19.99
    };
  });

