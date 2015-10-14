import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Routes, APP_ROUTES} from './route.config';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a [router-link]="['/' + routes.dashboard.as]" class="router-link">{{routes.dashboard.caption}}</a>
    <a [router-link]="['/' + routes.heroes.as]" class="router-link">{{routes.heroes.caption}}</a>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .router-link {padding: 5px;text-decoration: none;}
    .router-link:visited, .router-link:link {color: #444;}
    .router-link:hover {color: white; background-color: #1171a3; text-decoration: none;}
    .router-link.router-link-active {color: white; background-color: #52b9e9; text-decoration: none;}
  `],
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})
@RouteConfig(APP_ROUTES)
export class AppComponent {
  public title = 'Tour of Heroes';
  public routes = Routes;
}
