import {HEROES} from './mock-heroes';

export class HeroService {
	getHeroes() { return Promise.resolve(HEROES); }

	getHero(id: number) {
		return Promise.resolve(HEROES)
			.then((heroes) => { return heroes.filter((h) => {
				return h.id === id;
			})[0]});
	}
}
