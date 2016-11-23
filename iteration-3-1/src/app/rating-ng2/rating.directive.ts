import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'ng2sui-rating'
})
export class RatingDirective extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('suiRating', elementRef, injector);
  }
}
