import {View, Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeroesComponent} from './heroes-component';
import {HeroDetailComponent} from './hero-detail-component';
import {AboutComponent} from './about-component';
import {ROUTES} from './config';

@Component({ selector: 'my-shell' })
@View({
  template: `
    <a [router-link]="['${ROUTES.heroes}']">Heroes</a>
    <a [router-link]="['${ROUTES.about}']">About</a>
    <router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', redirectTo: ROUTES.heroes }, //TODO: Need an otherwise instead
  { path: ROUTES.about, as: 'about', component: AboutComponent },
  { path: ROUTES.heroes, as: 'heroes', component: HeroesComponent },
  { path: ROUTES.detail + '/:id', as: 'detail', component: HeroDetailComponent }
])
export class ShellComponent { }
