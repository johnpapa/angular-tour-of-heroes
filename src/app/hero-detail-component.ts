import {Component, FORM_DIRECTIVES, NgIf, View} from 'angular2/angular2';
import {RouteParams, RouterLink} from 'angular2/router';
import {Hero} from './hero';
import {HeroService} from './hero-service';
import {ROUTES} from './config';

@Component({
  selector: 'my-hero-detail', properties: ['hero']
})
@View({
  templateUrl: 'app/hero-detail-component.html',
  styles: [`h2 { color: #444; font-weight: lighter; }
            input, button{font-family:inherit;} `],
  directives: [FORM_DIRECTIVES, NgIf, RouterLink]
})
export class HeroDetailComponent {
  hero: Hero  ;
  id: number;
  showDetail = false;

  constructor(private _heroService: HeroService, private _routeParams: RouteParams) {
    let paramId = _routeParams.params && _routeParams.get('id');
    this.showDetail = !!paramId;
    if (paramId) {
      this.id = +(paramId);
      this._heroService.getHero(this.id).then((hero) => {
        this.hero = hero[0];
      });
    }
  }

  getDetailLink(hero: Hero) {
    return [ROUTES.detail, { id: hero.id }];
  }
}
