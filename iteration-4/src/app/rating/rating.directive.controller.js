var RatingDirectiveController = (function () {
    function RatingDirectiveController($scope) {
        var _this = this;
        this.current = 0;
        if (!this.model) {
            this.model = 0;
        }
        if (this.model < 1 && this.model > 5) {
            this.model = 0;
        }
        $scope.$watch('vm.model', function (val) {
            _this.clicked(val);
        });
    }
    RatingDirectiveController.prototype.mouseEntered = function (iconIndex) {
        for (var i = 1; i <= iconIndex; i++) {
            document.getElementById('sui-rating-' + i).className = 'icon active';
        }
    };
    RatingDirectiveController.prototype.mouseLeft = function (iconIndex) {
        var firstNotRatedSymbol = this.current + 1;
        for (var i = 1; i <= this.current; i++) {
            document.getElementById('sui-rating-' + i).className = 'icon active';
        }
        for (var i = firstNotRatedSymbol; i <= 5; i++) {
            document.getElementById('sui-rating-' + i).className = 'icon';
        }
    };
    RatingDirectiveController.prototype.clicked = function (iconIndex) {
        for (var i = 1; i <= iconIndex; i++) {
            document.getElementById('sui-rating-' + i).className = 'icon active';
        }
        if (iconIndex) {
            this.current = iconIndex;
        }
        else {
            this.current = 0;
        }
    };
    RatingDirectiveController.$inject = ['$scope'];
    return RatingDirectiveController;
}());
angular.module('sui-rating').controller('RatingDirectiveController', RatingDirectiveController);
//# sourceMappingURL=rating.directive.controller.js.map