import {View, Component} from 'angular2/angular2';
import {RouteConfig} from 'angular2/router';
import {Routes, APP_ROUTES} from './route.config';
import {COMMON_DIRECTIVES} from './constants';

@Component({ selector: 'my-app' })
@View({
  template: `
    <h1>{{title}}</h1>
    <a [router-link]="['/${Routes.dashboard.as}']">Dashboard</a>
    <a [router-link]="['/${Routes.heroes.as}']">Heroes</a>
    <router-outlet></router-outlet>
    `,
  directives: [COMMON_DIRECTIVES]
})
@RouteConfig(APP_ROUTES)
export class AppComponent {
  public title = 'Tour of Heroes';
}
