import {HEROES} from './heroes';

export class HeroService {
	getAllHeroes() {
		return Promise.resolve(HEROES);
	}
}
