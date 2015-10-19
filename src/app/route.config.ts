import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {DashboardComponent} from './dashboard.component';

export var Routes = {
	dashboard: {
		path: '/',
    as: 'Dashboard',
		component: DashboardComponent,
    caption: 'Dashboard'
	},
	heroes: {
		path: '/heroes',
		as: 'Heroes',
    caption: 'Heroes',
		component: HeroesComponent
	},
	detail: {
		path: '/detail/:id',
		as: 'Detail',
    caption: 'Hero Detail',
		component: HeroDetailComponent
	}
};

export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);
