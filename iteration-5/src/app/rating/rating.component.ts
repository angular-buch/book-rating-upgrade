declare var angular: angular.IAngularStatic;
import { downgradeComponent } from '@angular/upgrade/static';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sui-rating',
  template: `
    <div class="ui rating star">
      <i id="sui-rating-1" class="icon" (click)="clicked(1)" (mouseover)="mouseEntered(1)" (mouseleave)="mouseLeft(1)"></i>
      <i id="sui-rating-2" class="icon" (click)="clicked(2)" (mouseover)="mouseEntered(2)" (mouseleave)="mouseLeft(2)"></i>
      <i id="sui-rating-3" class="icon" (click)="clicked(3)" (mouseover)="mouseEntered(3)" (mouseleave)="mouseLeft(3)"></i>
      <i id="sui-rating-4" class="icon" (click)="clicked(4)" (mouseover)="mouseEntered(4)" (mouseleave)="mouseLeft(4)"></i>
      <i id="sui-rating-5" class="icon" (click)="clicked(5)" (mouseover)="mouseEntered(5)" (mouseleave)="mouseLeft(5)"></i>
    </div>
  `
})
export class SuiRatingComponent implements OnInit {
  @Input() size: string;
  @Input() type: string;
  current = 0;
  model: number = 1;

  constructor() { }

  ngOnInit(){
    if (!this.model) { 
      this.model = 0;
    }

    if (this.model < 1 && this.model > 5) {
      this.model = 0;
    }
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

angular.module('sui-rating')
  .directive(
    'suiRating',
    downgradeComponent({component: SuiRatingComponent}) as angular.IDirectiveFactory
  );
