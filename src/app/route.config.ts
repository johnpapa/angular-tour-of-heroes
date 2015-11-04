import {RouteDefinition} from 'angular2/router';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {DashboardComponent} from './dashboard.component';

interface RouteConfigMap {
  [key:string] : RouteDefinition
}

export var Routes : RouteConfigMap = {
	dashboard: {
		path: '/',
    as: 'Dashboard',
		component: DashboardComponent
	},
	heroes: {
		path: '/heroes',
		as: 'Heroes',
		component: HeroesComponent
	},
	detail: {
		path: '/detail/:id',
		as: 'Detail',
		component: HeroDetailComponent
	}
};

export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);
