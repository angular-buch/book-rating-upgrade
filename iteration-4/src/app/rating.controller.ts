import { downgradeInjectable } from '@angular/upgrade/static';
import { BookRatingService } from './shared/book-rating.service';

declare var angular: angular.IAngularStatic;

class RatingController {
  current = 1;

  static $inject = ['$scope','rating'];

  constructor(private $scope: any, private brs: BookRatingService) {
    let isbn = '9783864903571';

    $scope.$watch(() => this.current, function (value) {
      brs.rateBook(isbn, value).subscribe(res => res);
    });
  }
}

angular.module('rating-app')
  .controller('RatingController', RatingController);
