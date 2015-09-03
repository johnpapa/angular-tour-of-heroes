import {HEROES, Hero} from './heroes';

export class HeroService {
	private _heroes: Hero[];

	get heroes() {
		if (!this._heroes) {
			this._heroes = [];
			this.getAllHeroes()
		}
		return this._heroes;
	}

	getAllHeroes() {
		return Promise.resolve(HEROES);
	}
}
