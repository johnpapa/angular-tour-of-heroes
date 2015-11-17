import {Component, OnInit} from 'angular2/angular2';
import {RouteParams, Router} from 'angular2/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {ROUTE_NAMES} from './route.config';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  inputs: ['hero']
})
export class HeroDetailComponent implements OnInit {
  public hero: Hero;

  constructor(private _heroService: HeroService,
    private _routeParams: RouteParams, private _router: Router) {
  }

  onInit() {
    if (!this.hero) {
      let id = +this._routeParams.get('id');
      this._heroService.getHero(id).then(hero => this.hero = hero);
    }
  }

  gotoHeroes() {
    this._router.navigate([ROUTE_NAMES.heroes]);
  }
}
