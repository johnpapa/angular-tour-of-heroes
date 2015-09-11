import {View, Component} from 'angular2/angular2';
import {RouteConfig} from 'angular2/router';
import {Routes} from './route-config';
import {HERO_DIRECTIVES} from './hero-directives';

@Component({ selector: 'my-app' })
@View({
  template: `
    <a [router-link]="['/${Routes.dashboard.as}']">Dashboard</a>
    <a [router-link]="['/${Routes.heroes.as}']">Heroes</a>
    <router-outlet></router-outlet>
    `,
  directives: [HERO_DIRECTIVES]
})
@RouteConfig([Routes.dashboard, Routes.detail, Routes.heroes])
export class AppComponent { }
