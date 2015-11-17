import {Route, Router} from 'angular2/router';
import {DashboardComponent} from './dashboard.component';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';

export var Routes = {
    dashboard: new Route({
        path: '/',
        as: 'Dashboard',
        component: DashboardComponent
    }),
    heroes: new Route({
        path: '/heroes',
        as: 'Heroes',
        component: HeroesComponent
    }),
    detail: new Route({
        path: '/detail/:id',
        as: 'Detail',
        component: HeroDetailComponent
    })
};

export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);
