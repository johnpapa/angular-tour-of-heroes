import {View, Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Routes, APP_ROUTES} from './route.config';

@Component({ selector: 'my-app' })
@View({
  template: `
    <h1>{{title}}</h1>
    <a [router-link]="['/${Routes.dashboard.as}']" [ng-class]="isRouteActive('/${Routes.dashboard.as}')">Dashboard</a>
    <a [router-link]="['/${Routes.heroes.as}']" [ng-class]="isRouteActive('/${Routes.heroes.as}')">Heroes</a>
    <router-outlet></router-outlet>
  `,
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})
@RouteConfig(APP_ROUTES)
export class AppComponent {
  public title = 'Tour of Heroes';

  constructor(private _router: Router) {  }

  isRouteActive(tuple: string) {
    return { 'active': this._router.isRouteActive(this._router.generate([tuple]))};
  }
}
