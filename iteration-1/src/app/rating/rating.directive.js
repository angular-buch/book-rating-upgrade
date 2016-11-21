(function () {
  angular.module('sui-rating').directive('suiRating', directive);

  function directive() {
    return {
      restrict: 'E',
      template: '<div class="ui rating star">' +
                  '<i id="sui-rating-1" class="icon" ng-click="vm.clicked(1)" ng-mouseenter="vm.mouseEntered(1)" ng-mouseleave="vm.mouseLeft(1)"></i>' +
                  '<i id="sui-rating-2" class="icon" ng-click="vm.clicked(2)" ng-mouseenter="vm.mouseEntered(2)" ng-mouseleave="vm.mouseLeft(2)"></i>' +
                  '<i id="sui-rating-3" class="icon" ng-click="vm.clicked(3)" ng-mouseenter="vm.mouseEntered(3)" ng-mouseleave="vm.mouseLeft(3)"></i>' +
                  '<i id="sui-rating-4" class="icon" ng-click="vm.clicked(4)" ng-mouseenter="vm.mouseEntered(4)" ng-mouseleave="vm.mouseLeft(4)"></i>' +
                  '<i id="sui-rating-5" class="icon" ng-click="vm.clicked(5)" ng-mouseenter="vm.mouseEntered(5)" ng-mouseleave="vm.mouseLeft(5)"></i>' +
                '</div>',
      bindToController: {
        size: '@',
        type: '@',
        model: '=ngModel'
      },
      controllerAs: 'vm',
      controller: ctrl
    };
  }
})();

ctrl.$inject = ['$scope'];
function ctrl($scope){
  var vm = this;
  vm.current = 0;        
  vm.init = init;
  vm.mouseEntered = mouseEntered;
  vm.mouseLeft = mouseLeft;
  vm.clicked = clicked;
  
  function init() {
    if (!vm.model) { 
      vm.model = 0;
    }

    if (vm.model < 1 && vm.model > 5) {
      vm.model = 0;
    }

    $scope.$watch('vm.model', function (val) {
      vm.clicked(val);
    });
  }


  function mouseEntered (iconIndex) {
    for (var i = 1; i <= iconIndex; i++) {
      document.getElementById('sui-rating-'+i).className = 'icon active';
    }
  };

  function mouseLeft(iconIndex) {
    var firstNotRatedSymbol = vm.current + 1;

    for (var i = 1; i <= vm.current; i++) {
      document.getElementById('sui-rating-'+i).className = 'icon active';
    }

    for (var i = firstNotRatedSymbol; i <= 5; i++) {
      document.getElementById('sui-rating-'+i).className = 'icon';
    }
  };

  function clicked(iconIndex) {
    for (var i = 1; i <= iconIndex; i++) {
      document.getElementById('sui-rating-'+i).className = 'icon active';
    }

    if (iconIndex) {
      vm.current = iconIndex;
    } else {
      vm.current = 0;
    }

    this.model = iconIndex;
  };

  init();

}
