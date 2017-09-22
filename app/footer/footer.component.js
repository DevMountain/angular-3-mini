function footerController() {
  this.contacted = false;

  this.contact = function() {
    this.onContact();
    this.contacted = true;
  }
}

angular.module('fourWheels').component('footer', {
  templateUrl: 'app/footer/footer.template.html',
  controller: footerController,
  bindings: {
    name: '=',
    email: '=',
    onContact: '&'
  }
});