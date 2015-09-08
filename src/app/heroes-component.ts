import {Component, NgClass, NgFor, NgIf, View} from 'angular2/angular2';
import {HeroDetailComponent} from './hero-detail-component';
import {HeroService} from './hero-service';
import {Hero} from './hero';
import {RouterLink} from 'angular2/router';
import {ROUTES} from './config';

@Component({
  selector: 'my-heroes'
  // bindings: [HeroService] // dont need cuz i put in bootstrap for now
})
@View({
  templateUrl: 'app/heroes-component.html',
  directives: [HeroDetailComponent, NgClass, NgFor, NgIf, RouterLink],
  styleUrls: ['app/heroes-component.css']
})
export class HeroesComponent {
  private ROUTE_DETAIL: string = '/detail';
  private _heroes: Hero[];
  currentHero: Hero;

  constructor(private _heroService: HeroService) { }

  get heroes() {
    if (this._heroes) { return this._heroes; }

    this._heroService.getAllHeroes().then(heroes => {
      this._heroes = heroes;
    });
    return this._heroes;
  }

  onSelect(hero: Hero) { this.currentHero = hero; }

  getSelectedClass(hero: Hero) {
    return { 'selected': hero === this.currentHero };
  }

  getDetailLink() {
    return [ROUTES.detail, { id: this.currentHero.id }];
  }
}
