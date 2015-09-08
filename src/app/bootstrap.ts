import {bind, bootstrap} from 'angular2/angular2';
import {ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HeroService} from './hero-service';
import {ShellComponent} from './shell-component';

bootstrap(ShellComponent, [
  ROUTER_BINDINGS,
  HeroService,
	bind(LocationStrategy).toClass(HashLocationStrategy)
]);
