import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

declare var angular: angular.IAngularStatic;
import { downgradeInjectable } from '@angular/upgrade/static';

import 'rxjs/add/operator/map';

@Injectable()
export class BookRatingService {
  private api: string = 'https://book-monkey2-api.angular-buch.com';
  private headers: Headers = new Headers();

  constructor(private http: Http) {
    this.headers.append('Content-Type', 'application/json');
  }

  rateBook(isbn: string, value: number): Observable<any> {
    return this.http
      .post(`${this.api}/book/${isbn}/rate`, JSON.stringify({rating: value}), { headers: this.headers });
  }
}

angular.module('rating-app')
  .factory('rating', downgradeInjectable(BookRatingService));
