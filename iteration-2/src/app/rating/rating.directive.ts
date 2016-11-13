
angular.module('sui-rating').directive('suiRating', directive);

function directive(): angular.IDirective {
  return {
    restrict: 'E',
    template: `<div class="ui rating star">
                <i id="{{vm.id + 1}}" class="icon" ng-click="vm.clicked(1)" ng-mouseenter="vm.mouseEntered(1)" ng-mouseleave="vm.mouseLeft(1)"></i>
                <i id="{{vm.id + 2}}" class="icon" ng-click="vm.clicked(2)" ng-mouseenter="vm.mouseEntered(2)" ng-mouseleave="vm.mouseLeft(2)"></i>
                <i id="{{vm.id + 3}}" class="icon" ng-click="vm.clicked(3)" ng-mouseenter="vm.mouseEntered(3)" ng-mouseleave="vm.mouseLeft(3)"></i>
                <i id="{{vm.id + 4}}" class="icon" ng-click="vm.clicked(4)" ng-mouseenter="vm.mouseEntered(4)" ng-mouseleave="vm.mouseLeft(4)"></i>
                <i id="{{vm.id + 5}}" class="icon" ng-click="vm.clicked(5)" ng-mouseenter="vm.mouseEntered(5)" ng-mouseleave="vm.mouseLeft(5)"></i>
              </div>`,
    bindToController: {
      id: '@',
      size: '@',
      type: '@',
      model: '=ngModel'
    },
    controllerAs: 'vm',
    controller: 'RatingDirectiveController'
  };
}
