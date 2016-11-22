import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { BookRatingService } from './shared/book-rating.service'
import { SuiRatingComponent } from './rating/rating.component'

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpModule,
    FormsModule
  ],
  providers: [BookRatingService],
  declarations: [SuiRatingComponent],
  entryComponents: [SuiRatingComponent]
})
export class AppModule {
  ngDoBootstrap() {}
}
