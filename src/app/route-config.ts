import {HeroesComponent} from './heroes-component';
import {HeroDetailComponent} from './hero-detail-component';
import {DashboardComponent} from './dashboard-component';

export var Routes = {
	dashboard: {
		path: '/',
		as: 'dashboard',
		component: DashboardComponent
	},
	heroes: {
		path: '/heroes',
		as: 'heroes',
		component: HeroesComponent
	},
	detail: {
		path: '/detail/:id',
		as: 'detail',
		component: HeroDetailComponent
	}
};

export const APP_ROUTES = [this.Routes.dashboard, this.Routes.detail, this.Routes.heroes];
