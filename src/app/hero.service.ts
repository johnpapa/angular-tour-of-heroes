import {HEROES} from './mock-heroes';
import {Hero} from './hero';

export class HeroService {

	public getHeroes():Promise<Hero[]> {
		return Promise.resolve(HEROES);
	}

	public getHero(id:number):Promise<Hero> {
		return Promise.resolve(HEROES)
			.then((heroes:Hero[]) => {
				return heroes.filter((h) => {
					return h.id === id;
				})[0];
			});
	}
}
