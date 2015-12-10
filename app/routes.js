var heroes_component_1 = require('./heroes.component');
var hero_detail_component_1 = require('./hero-detail.component');
var dashboard_component_1 = require('./dashboard.component');
exports.ROUTE_NAMES = {
    dashboard: 'Dashboard',
    heroes: 'Heroes',
    heroDetail: 'HeroDetail'
};
exports.ROUTES = [
    { path: '/', redirectTo: [exports.ROUTE_NAMES.dashboard] },
    { path: '/dashboard', name: exports.ROUTE_NAMES.dashboard, component: dashboard_component_1.DashboardComponent },
    { path: '/heroes', name: exports.ROUTE_NAMES.heroes, component: heroes_component_1.HeroesComponent },
    { path: '/detail/:id', name: exports.ROUTE_NAMES.heroDetail, component: hero_detail_component_1.HeroDetailComponent }
];
//# sourceMappingURL=routes.js.map