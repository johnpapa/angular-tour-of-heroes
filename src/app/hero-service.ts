import {HEROES} from './heroes';

export class HeroService {
	getAllHeroes() { return Promise.resolve(HEROES); }

	getHero(id: number) {
		return Promise.resolve(HEROES)
			.then((heroes) => { return heroes.filter((h) => {
				return h.id === id;
			})[0]});
	}
}
