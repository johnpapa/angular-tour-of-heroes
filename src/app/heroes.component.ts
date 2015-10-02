import {Component, OnInit, View, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {HeroService} from './hero.service';
import {Hero} from './hero';
import {Routes} from './route.config';

@Component({ selector: 'my-heroes' })
@View({
  templateUrl: 'app/heroes.component.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  styleUrls: ['app/heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  currentHero: Hero;

  constructor(private _heroService: HeroService, private _router: Router) { }

  onInit() {
    this.heroes = this.getHeroes();
  }

  getHeroes() {
    this.currentHero = undefined;
    this.heroes = [];

    this._heroService.getHeroes()
      .then(heroes => this.heroes = heroes);

    return this.heroes;
  }

  getSelectedClass(hero: Hero) {
    return { 'selected': hero === this.currentHero };
  }

  goDetail() {
    this._router.navigate(`${Routes.detail.as}/${this.currentHero.id}`);
  }

  onSelect(hero: Hero) { this.currentHero = hero; }
}
