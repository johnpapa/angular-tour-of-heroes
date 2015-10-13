import {HEROES} from './mock-heroes';
import {Hero} from './hero';

export class HeroService {
	getHeroes() {
		return Promise.resolve(HEROES);
	}

	getHero(id: number) {
		return Promise.resolve(HEROES)
			.then((heroes: Hero[]) => { return heroes.filter((h) => {
				return h.id === id;
			})[0]});
	}
}
