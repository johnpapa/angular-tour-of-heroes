import {View, Component} from 'angular2/angular2';
import {RouteConfig} from 'angular2/router';
import {HeroesComponent} from './heroes-component';
import {HeroDetailComponent} from './hero-detail-component';
import {AboutComponent} from './about-component';
import {ROUTES} from './config';
import {HERO_DIRECTIVES} from './hero-directives';

@Component({ selector: 'my-app' })
  @View({
  template: `
    <a [router-link]="['${ROUTES.heroes}']">Heroes</a>
    <a [router-link]="['${ROUTES.about}']">About</a>
    <router-outlet></router-outlet>
    `,
  directives: [HERO_DIRECTIVES]
})
@RouteConfig([
  { path: '/', redirectTo: ROUTES.heroes }, //TODO: Need an otherwise instead
  { path: ROUTES.about, as: 'about', component: AboutComponent },
  { path: ROUTES.heroes, as: 'heroes', component: HeroesComponent },
  { path: ROUTES.detail + '/:id', as: 'detail', component: HeroDetailComponent }
])
export class AppComponent { }
