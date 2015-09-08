import {bootstrap} from 'angular2/angular2';
import {HeroesComponent} from './heroes-component';
import { HeroService } from './hero-service';
import {ROUTES} from './config';

import {bind, View, Component} from 'angular2/angular2';

// ROUTER_DIRECTIVES = RouterOutlet and RouterLink
/* ROUTER-BINDINGS = CONST_EXPR([RouteRegistry, Pipeline, CONST_EXPR(new Binding(LocationStrategy, {toClass: PathLocationStrategy})), Location, CONST_EXPR(new Binding(Router, {
        toFactory: routerFactory,
        deps: CONST_EXPR([RouteRegistry, Pipeline, Location, APP_COMPONENT])
      }))]);
*/
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router'; // Router
import {LocationStrategy, HashLocationStrategy, PathLocationStrategy } from 'angular2/router'; // Location

import {HeroDetailComponent } from './hero-detail-component';
import { AboutComponent } from './about-component';

@Component({
  selector: 'my-app'
})
@View({
    template: `
    <a [router-link]="['${ROUTES.heroes}']">Heroes</a>
    <a [router-link]="['${ROUTES.about}']">About</a>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/', redirectTo: ROUTES.heroes},
  {path: ROUTES.about, as: 'about', component: AboutComponent},
  {path: ROUTES.heroes, as: 'heroes', component: HeroesComponent},
  {path: ROUTES.detail + '/:id', as: 'detail', component: HeroDetailComponent}
])
export class AppComponent { }

bootstrap(AppComponent, [
  ROUTER_BINDINGS,
  HeroService, // gives this to everyone
	bind(LocationStrategy).toClass(HashLocationStrategy)
	// bind(LocationStrategy).toClass(PathLocationStrategy)
]);
