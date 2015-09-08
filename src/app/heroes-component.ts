import {Component, NgClass, NgFor, NgIf, View} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {HeroService} from './hero-service';
import {Hero} from './hero';
import {ROUTES} from './config';

@Component({
  selector: 'my-heroes'
})
@View({
  templateUrl: 'app/heroes-component.html',
  directives: [NgClass, NgFor, NgIf],
  styleUrls: ['app/heroes-component.css']
})
export class HeroesComponent {
  private _heroes: Hero[];
  currentHero: Hero;

  constructor(private _heroService: HeroService, private _router: Router) { }

  get heroes() {
    if (this._heroes) { return this._heroes; }

    this._heroService.getAllHeroes().then(heroes => this._heroes = heroes);
    return this._heroes;
  }

  onSelect(hero: Hero) { this.currentHero = hero; }

  getSelectedClass(hero: Hero) {
    return { 'selected': hero === this.currentHero };
  }

  goDetail() {
    this._router.navigate(`${ROUTES.detail}/${this.currentHero.id}`);
  }
}
