import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Hero } from './hero';

@Injectable()
export class HeroService {
  private heroesUrl = 'app/heroes'; // URL to web api

  constructor(private http: HttpClient) {}

  getHeroes() {
    return this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(map(data => data), catchError(this.handleError));
  }

  getHero(id: number): Observable<Hero> {
    return this.getHeroes().pipe(
      map(heroes => heroes.find(hero => hero.id === id))
    );
  }

  save(hero: Hero) {
    if (hero.id) {
      return this.put(hero);
    }
    return this.post(hero);
  }

  delete(hero: Hero) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.heroesUrl}/${hero.id}`;

    return this.http.delete<Hero>(url).pipe(catchError(this.handleError));
  }

  // Add new Hero
  private post(hero: Hero) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post<Hero>(this.heroesUrl, hero)
      .pipe(catchError(this.handleError));
  }

  // Update existing Hero
  private put(hero: Hero) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.heroesUrl}/${hero.id}`;

    return this.http.put<Hero>(url, hero).pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
