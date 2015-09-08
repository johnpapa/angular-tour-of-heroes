import {bootstrap} from 'angular2/angular2';
import {HeroesComponent} from './heroes-component';

import {bind, View, Component} from 'angular2/angular2';
import {ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router';
import {RouteConfig, RouterOutlet, Router} from 'angular2/router';
import {LocationStrategy, Location, HashLocationStrategy } from 'angular2/router';

import { HeroDetailComponent } from './hero-detail-component';

@Component({
  selector: 'my-app'
})
@View({
  template: `<router-outlet></router-outlet>`,
  directives: [RouterOutlet]
})
@RouteConfig([
  { path: '/', redirectTo: '/heroes' },
  { path: '/heroes', as: 'heroes', component: HeroesComponent },
  { path: '/detail', as: 'detail', component: HeroDetailComponent }
  // { path: '/detail/:id',    as: 'orders',     component: HeroDetailComponent    }
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
	ROUTER_DIRECTIVES,
	ROUTER_BINDINGS,
	bind(LocationStrategy).toClass(HashLocationStrategy)
]);
