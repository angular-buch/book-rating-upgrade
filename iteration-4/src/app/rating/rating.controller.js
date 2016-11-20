"use strict";
var RatingController = (function () {
    function RatingController(brs) {
        this.current = 1;
        console.log(brs);
    }
    RatingController.prototype.rateBook = function (value) {
        console.log(value);
    };
    RatingController.$inject = ['rating'];
    return RatingController;
}());
angular.module('sui-rating')
    .controller('RatingController', RatingController);
//# sourceMappingURL=rating.controller.js.map