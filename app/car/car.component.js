function carController() {
  this.buy = function( id ) {
    console.log('CarController buy:', id);
    this.onBuy({ id: id });
  };
}

angular.module('fourWheels').component('car', {
  templateUrl: 'app/car/carTmpl.html',
  controller: carController,
  bindings: {
    car: '<',
    onBuy: '&'
  }
});