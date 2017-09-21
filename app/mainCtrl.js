angular.module('fourWheels').controller('mainCtrl', function( $scope, mainSrvc ) {
  $scope.cars = mainSrvc.cars;

  $scope.onBuy = function( id ) {
    console.log('ONBUY HIT:', id);

    mainSrvc.buyCar( id );

    $scope.cars = mainSrvc.cars;
  };
});