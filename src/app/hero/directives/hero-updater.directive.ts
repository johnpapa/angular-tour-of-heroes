import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from 'app/hero';
import { HeroService } from 'app/hero.service';
import { tap } from 'rxjs/operators';

@Directive({
  selector: '[heroUpdater]',
  exportAs: 'heroUpdater',
})
export class HeroUpdaterDirective {
  @Input() hero: Hero;

  @Output() heroSaved = new EventEmitter<Hero>();

  constructor(private heroService: HeroService) {}

  save(): void {
    this.heroService
      .save(this.hero)
      .pipe(tap((hero) => this.heroSaved.emit(hero)))
      .subscribe();
  }
}
