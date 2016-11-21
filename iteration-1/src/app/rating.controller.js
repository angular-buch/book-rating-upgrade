(function() {
  angular.module('rating-app').controller('RatingController', RatingController);

  function RatingController() {
    this.current = 1;
  }
})();
