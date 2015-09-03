import {Component, NgFor, NgIf, View} from 'angular2/angular2';
import {HeroDetailComponent} from './hero-detail-component';
import {HeroDataservice} from './hero-dataservice';
import {Hero} from './heroes';

@Component({
  selector: 'heroes'
})
@View({
  templateUrl: 'app/heroes-component.html',
  directives: [HeroDetailComponent, NgFor, NgIf],
  styleUrls: ['app/heroes-component.css']
})
export class HeroesComponent {
  private _heroes: Hero[];

  constructor(private _heroDataService: HeroDataservice) { }

  currentHero: Hero;

  get heroes() {
    if (!this._heroes) { this._getAllHeroes(); }
    return this._heroes;
  }

  onSelect(hero: Hero) {
    this.currentHero = hero;
  }

  /////////////

  private _getAllHeroes() {
    this._heroDataService.getAllHeroes().then(heroes => {
      this._heroes = heroes;
      this.currentHero = heroes[0];
    });
  }
}
