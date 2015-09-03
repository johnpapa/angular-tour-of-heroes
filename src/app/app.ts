import {bootstrap, Component, View} from 'angular2/angular2';
import {HeroService} from './hero-service';
import {HeroesComponent} from './heroes-component';

@Component({
  selector: 'app',
  bindings: [HeroService]
})
@View({
  template: '<heroes></heroes>',
  directives: [HeroesComponent]
})
export class AppComponent { }

bootstrap(AppComponent);
