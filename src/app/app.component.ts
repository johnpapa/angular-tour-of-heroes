import {View, Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Routes, APP_ROUTES} from './route.config';

@Component({ selector: 'my-app' })
@View({
  template: `
    <h1>{{title}}</h1>
    <a [router-link]="['/${Routes.dashboard.as}']">Dashboard</a>
    <a [router-link]="['/${Routes.heroes.as}']">Heroes</a>
    <router-outlet></router-outlet>
  `,
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})
@RouteConfig(APP_ROUTES)
export class AppComponent {
  public title = 'Tour of Heroes';
}
