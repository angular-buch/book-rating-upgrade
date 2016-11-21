"use strict";
var RatingController = (function () {
    function RatingController(brs) {
        this.current = 1;
        console.log(brs);
    }
    RatingController.$inject = ['rating'];
    return RatingController;
}());
angular.module('sui-rating')
    .controller('RatingController', RatingController);
//# sourceMappingURL=rating.controller.js.map