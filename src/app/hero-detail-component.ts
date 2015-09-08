import {Component, FORM_DIRECTIVES, View} from 'angular2/angular2';
import {RouteParams} from 'angular2/router';
import {Hero} from './hero';
import {HeroService} from './hero-service';

@Component({selector: 'my-hero-detail'})
@View({
  templateUrl: 'app/hero-detail-component.html',
  directives: [FORM_DIRECTIVES]
})
export class HeroDetailComponent {
  hero: Hero;

  constructor(private _heroService: HeroService, private _routeParams: RouteParams) {
    let id = +_routeParams.get('id');
    this._heroService.getHero(id).then(hero => this.hero = hero);
  }
}
