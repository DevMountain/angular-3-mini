angular.module('fourWheels').controller('mainCtrl', function( $scope ) {
  $scope.name = "Bob Joe";
  $scope.email = "bobjoe@gmail.com";

  $scope.contact = function() {
    $scope.name = "";
    $scope.email = "";
  };
});