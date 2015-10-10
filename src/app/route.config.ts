import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {DashboardComponent} from './dashboard.component';

export var Routes = {
	dashboard: {
		path: '/',
    as: 'Dashboard',
		component: DashboardComponent,
    caption: 'Dashboard',
    link: ['/Dashboard']
	},
	heroes: {
		path: '/heroes',
		as: 'Heroes',
    caption: 'Heroes',
		component: HeroesComponent,
    link: ['/Heroes']
	},
	detail: {
		path: '/detail/:id',
		as: 'Detail',
    caption: 'Hero Detail',
		component: HeroDetailComponent,
    link: ['/Detail']
	}
};

export const APP_ROUTES = [this.Routes.dashboard, this.Routes.detail, this.Routes.heroes];
