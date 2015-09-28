import {Component, View} from 'angular2/angular2';
import {RouteParams, Router} from 'angular2/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {COMMON_DIRECTIVES} from './constants';
import {Routes} from './route.config';

@Component({selector: 'my-hero-detail'})
@View({
  templateUrl: 'app/hero-detail.component.html',
  directives: [COMMON_DIRECTIVES]
})
export class HeroDetailComponent {
  hero: Hero;

  constructor(private _heroService: HeroService,
    private _routeParams: RouteParams, private _router: Router) {

    let id = +_routeParams.get('id');
    this._heroService.getHero(id).then(hero => this.hero = hero);
  }

  gotoHeroes() {
    this._router.navigate(`${Routes.heroes.as}`);
  }
}
