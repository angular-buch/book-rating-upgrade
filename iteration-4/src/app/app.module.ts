import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpModule } from '@angular/http';
import { BookRatingService } from './shared/book-rating.service'

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpModule
  ],
  providers: [BookRatingService]
})
export class AppModule {
  ngDoBootstrap() {}
}
