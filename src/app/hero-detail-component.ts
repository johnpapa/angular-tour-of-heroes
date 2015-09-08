import {Component, FORM_DIRECTIVES, View} from 'angular2/angular2';
import {RouteParams} from 'angular2/router';
import {Hero} from './hero';
import {HeroService} from './hero-service';

@Component({
  selector: 'my-hero-detail', properties: ['hero']
  // bindings: [HeroService] // dont need cuz i put in bootstrap for now
})
@View({
  templateUrl: 'app/hero-detail-component.html',
  styles: [`h2 { color: #444; font-weight: lighter; }
            input, button{font-family:inherit;} `],
  directives: [FORM_DIRECTIVES]
})
export class HeroDetailComponent {
  hero: Hero;
  id: number;

  constructor(private _heroService: HeroService, routeParams: RouteParams) {
    this.id = +(routeParams.get('id'));
    this._heroService.getHero(this.id).then((hero) => {
      this.hero = hero[0];
    });
  }
}
