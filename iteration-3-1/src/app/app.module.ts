import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppComponent } from './app.component';
import { RatingDirective } from './rating-ng2/rating.directive';

@NgModule({
  imports:      [BrowserModule, UpgradeModule],
  declarations: [AppComponent, RatingDirective ],
  bootstrap:    [AppComponent]
})
export class AppModule {
  ngDoBootstrap() {}
}
