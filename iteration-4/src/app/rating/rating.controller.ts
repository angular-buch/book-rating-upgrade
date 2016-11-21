import { downgradeInjectable } from '@angular/upgrade/static';
import { BookRatingService } from '../shared/book-rating.service';

declare var angular: angular.IAngularStatic;

class RatingController {
  current = 1;

  static $inject = ['rating'];

  constructor(brs: BookRatingService) {
    console.log(brs);
  }
}

angular.module('sui-rating')
  .controller('RatingController', RatingController);
