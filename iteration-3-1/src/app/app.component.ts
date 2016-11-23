import { Component } from '@angular/core';

@Component({
  selector: 'ng2-rating-app',
  template: `<ng2sui-rating size="large" type="star" model="current"></ng2sui-rating>`
})
export class AppComponent {
  current = 1;
}
