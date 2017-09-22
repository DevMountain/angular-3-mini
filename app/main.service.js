angular.module('fourWheels').service('mainSrvc', function( $http ) {
  this.cars = [
    {
      id: '0',
      make: 'Ford',
      model: 'Mustang',
      color: 'Black',
      year: '2013'
    },
    {
      id: '1',
      make: 'Ford',
      model: 'F-150',
      color: 'White',
      year: '1993'
    }
  ];
});