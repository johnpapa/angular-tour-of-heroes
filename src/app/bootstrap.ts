import {bootstrap} from 'angular2/angular2';
import {HeroesComponent} from './heroes-component';

import {bind, View, Component} from 'angular2/angular2';

// ROUTER_DIRECTIVES = RouterOutlet and RouterLink
/* ROUTER-BINDINGS = CONST_EXPR([RouteRegistry, Pipeline, CONST_EXPR(new Binding(LocationStrategy, {toClass: PathLocationStrategy})), Location, CONST_EXPR(new Binding(Router, {
        toFactory: routerFactory,
        deps: CONST_EXPR([RouteRegistry, Pipeline, Location, APP_COMPONENT])
      }))]);
*/
import {ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router';
import {RouteConfig, Router} from 'angular2/router';
import {LocationStrategy, Location, HashLocationStrategy,PathLocationStrategy } from 'angular2/router';

import {HeroDetailComponent } from './hero-detail-component';

@Component({
  selector: 'my-app'
})
@View({
    template: `
  <ul>
    <li><a [router-link]="['/heroes']">Heroes</a></li>
    <li><a [router-link]="['/detail',{'id':11}]">Detail</a></li>
  </ul>
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/', redirectTo: '/heroes'},
  {path: '/heroes', as: 'heroes', component: HeroesComponent},
  {path: '/detail', as: 'detail', component: HeroDetailComponent}
  // {path: '/detail/:id', as: 'orders', component: HeroDetailComponent}
])
export class AppComponent {
  constructor(private router: Router, private location: Location) {
    this.router = router;
    this.location = location;

    //Manual navigation for now
    //let url = browserLocation.path();
    //router.navigate(url);
  }
}

bootstrap(AppComponent, [
	ROUTER_BINDINGS,
	// bind(LocationStrategy).toClass(HashLocationStrategy)
	bind(LocationStrategy).toClass(PathLocationStrategy)
]);
