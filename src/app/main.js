(function() {
  'use strict';

  angular.module('bookRatingApp', ['bookRatingApp.rating'])
    .controller('MainController', function($scope) {
        $scope.rating = 1;
        // controller
    });

  angular.bootstrap(document, ['bookRatingApp'], {strictDI: true});

})();
