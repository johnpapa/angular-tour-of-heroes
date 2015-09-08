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

@Component({
  selector: 'my-app'
})
@View({
    template: `
    <a [router-link]="['${ROUTES.heroes}']">Heroes</a>
    <a [router-link]="['${ROUTES.detail}',{'id':11}]">Detail</a>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/', redirectTo: ROUTES.heroes},
  {path: ROUTES.heroes, as: 'heroes', component: HeroesComponent},
  {path: ROUTES.detail + '/:id', as: 'detail', component: HeroDetailComponent}
  // {path: '/detail/:id', as: 'orders', component: HeroDetailComponent}
])
export class AppComponent {
  // constructor(private router: Router, private location: Location) {
  //   // this.router = router;
  //   // this.location = location;

  //   //Manual navigation for now
  //   // let url = browserLocation.path();
  //   // router.navigate(url);
  // }
}

bootstrap(AppComponent, [
  ROUTER_BINDINGS,
  HeroService, // gives this everyone
	bind(LocationStrategy).toClass(HashLocationStrategy)
	// bind(LocationStrategy).toClass(PathLocationStrategy)
]);
