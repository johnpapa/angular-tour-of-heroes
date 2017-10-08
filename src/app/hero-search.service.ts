import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Hero } from './hero';

@Injectable()
export class HeroSearchService {
  constructor(private client: HttpClient) { }

  search(term: string): Observable<Hero[]> {
    return this.client
      .get<Hero[]>(`app/heroes/?name=${term}`)
      .map((r) => r as Hero[])
      .catch((error: any) => {
          console.error('An friendly error occurred', error);
          return Observable.throw(error.message || error);
      });
  }
}
