import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {DashboardComponent} from './dashboard.component';
import {Route, Router, RouteDefinition} from 'angular2/router';

export const ROUTE_NAMES = {
  dashboard: 'Dashboard',
  heroes:   'Heroes',
  heroDetail: 'HeroDetail'
}

export const ROUTES: RouteDefinition[] = [
  // {path: '/', redirectTo: '/dashboard' },
  {path: '/', name: ROUTE_NAMES.dashboard, component: DashboardComponent},
  {path: '/heroes', name: ROUTE_NAMES.heroes, component: HeroesComponent},
  {path: '/detail/:id', name: ROUTE_NAMES.heroDetail, component: HeroDetailComponent}
];
