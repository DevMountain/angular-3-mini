function carController( mainSrvc ) {
  this.cars = mainSrvc.cars;

  this.buyCar = function( id ) {
    mainSrvc.buyCar( id );
    this.cars = mainSrvc.cars;
  };
}

angular.module('fourWheels').component('cars', {
  templateUrl: 'app/cars/cars.template.html',
  controller: carController
});