function headerController() {

}

angular.module('fourWheels').component('header', {
  templateUrl: 'app/header/headerTmpl.html',
  controller: headerController,
  bindings: {
    title: '<'
  }
});