class RatingDirectiveController { 
  static $inject = ['$scope'];
  current = 0;
  model: number;

  constructor($scope: angular.IScope) {
    if (!this.model) { 
      this.model = 0;
    }

    if (this.model < 1 && this.model > 5) {
      this.model = 0;
    }

    $scope.$watch('vm.model', (val: number) => {
      this.clicked(val);
    });
  }

  mouseEntered (iconIndex: number) {
    for (let i = 1; i <= iconIndex; i++) {
      document.getElementById('sui-rating-'+i).className = 'icon active';
    }
  }

  mouseLeft(iconIndex: number) {
    let firstNotRatedSymbol = this.current + 1;

    for (let i = 1; i <= this.current; i++) {
      document.getElementById('sui-rating-'+i).className = 'icon active';
    }

    for (let i = firstNotRatedSymbol; i <= 5; i++) {
      document.getElementById('sui-rating-'+i).className = 'icon';
    }
  }

  clicked(iconIndex: number) {
    for (let i = 1; i <= iconIndex; i++) {
      document.getElementById('sui-rating-'+i).className = 'icon active';
    }

    if (iconIndex) {
      this.current = iconIndex;
    } else {
      this.current = 0;
    }

    this.model = iconIndex;
  }
}

angular.module('sui-rating').controller('RatingDirectiveController', RatingDirectiveController);
