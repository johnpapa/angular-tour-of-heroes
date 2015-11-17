import {bootstrap, provide} from 'angular2/angular2';
import {HashLocationStrategy, LocationStrategy, ROUTER_PROVIDERS} from 'angular2/router';
import {HeroService} from './hero.service';
import {AppComponent} from './app.component';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  HeroService,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
  // provide(APP_BASE_HREF, {useValue: '/app/'})
]);
