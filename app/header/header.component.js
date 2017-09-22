/*  This component is to show you can pass things down through bindings, should we keep it structured this way
    or would you rather I create another anonymus function for a controller and assign a `this.title`?
*/

angular.module('fourWheels').component('header', {
  templateUrl: 'app/header/header.template.html',
  bindings: {
    title: '<'
  }
});

