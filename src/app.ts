import {bootstrap, Component, View} from 'angular2/angular2';
import {HeroDataservice} from 'hero.dataservice';
import {HeroesComponent} from 'heroes.component';

@Component({
  selector: 'app',
  bindings: [HeroDataservice]
})
@View({
  template: '<heroes></heroes>',
  directives: [HeroesComponent]
})
export class AppComponent { }

bootstrap(AppComponent);
