import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from 'app/hero';
import { HeroService } from 'app/hero.service';
import { Observable } from 'rxjs';

@Pipe({
  name: 'hero',
})
export class HeroPipe implements PipeTransform {
  constructor(private readonly heroService: HeroService) {}

  transform(id: number): Observable<Hero> {
    return this.heroService.getHero(id);
  }
}
