function headerController() {

}

angular.module('fourWheels').component('header', {
  templateUrl: 'app/header/header.template.html',
  controller: headerController,
  bindings: {
    title: '<'
  }
});