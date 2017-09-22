angular.module('fourWheels').component('footer', {
  templateUrl: 'app/footer/footer.template.html',
  controllerAs: 'footerCtrl',

  controller: function() {
    this.name = "Bob Joe";
    this.email = "bobjoe@gmail.com";
    this.contacted = false;
    
    this.contact = function() {
      this.contacted = true;
      this.name = "";
      this.email = "";
    };
  },
});