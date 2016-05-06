var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("hero", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Hero;
    return {
        setters:[],
        execute: function() {
            Hero = (function () {
                function Hero() {
                }
                return Hero;
            }());
            exports_1("Hero", Hero);
        }
    }
});
System.register("mock-heroes", [], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var HEROES;
    return {
        setters:[],
        execute: function() {
            exports_2("HEROES", HEROES = [
                { 'id': 11, 'name': 'Mr. Nice' },
                { 'id': 12, 'name': 'Narco' },
                { 'id': 13, 'name': 'Bombasto' },
                { 'id': 14, 'name': 'Celeritas' },
                { 'id': 15, 'name': 'Magneta' },
                { 'id': 16, 'name': 'RubberMan' },
                { 'id': 17, 'name': 'Dynama' },
                { 'id': 18, 'name': 'Dr IQ' },
                { 'id': 19, 'name': 'Magma' },
                { 'id': 20, 'name': 'Tornado' }
            ]);
        }
    }
});
System.register("hero.service", ['angular2/core', "mock-heroes"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_1, mock_heroes_1;
    var HeroService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_heroes_1_1) {
                mock_heroes_1 = mock_heroes_1_1;
            }],
        execute: function() {
            HeroService = (function () {
                function HeroService() {
                }
                HeroService.prototype.getHeroes = function () {
                    return Promise.resolve(mock_heroes_1.HEROES);
                };
                HeroService.prototype.getHeroesSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_heroes_1.HEROES); }, 2000);
                    } // 2 seconds
                     // 2 seconds
                    );
                };
                HeroService.prototype.getHero = function (id) {
                    return Promise.resolve(mock_heroes_1.HEROES).then(function (heroes) { return heroes.filter(function (hero) { return hero.id === id; })[0]; });
                };
                HeroService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], HeroService);
                return HeroService;
            }());
            exports_3("HeroService", HeroService);
        }
    }
});
System.register("dashboard.component", ['angular2/core', 'angular2/router', "hero.service"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_2, router_1, hero_service_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(_router, _heroService) {
                    this._router = _router;
                    this._heroService = _heroService;
                    this.heroes = [];
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._heroService.getHeroes()
                        .then(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
                };
                DashboardComponent.prototype.gotoDetail = function (hero) {
                    var link = ['HeroDetail', { id: hero.id }];
                    this._router.navigate(link);
                };
                DashboardComponent = __decorate([
                    core_2.Component({
                        selector: 'my-dashboard',
                        templateUrl: 'app/dashboard.component.html',
                        styleUrls: ['app/dashboard.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_4("DashboardComponent", DashboardComponent);
        }
    }
});
System.register("hero-detail.component", ['angular2/core', 'angular2/router', "hero", "hero.service"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_3, router_2, hero_1, hero_service_2;
    var HeroDetailComponent;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            },
            function (hero_1_1) {
                hero_1 = hero_1_1;
            },
            function (hero_service_2_1) {
                hero_service_2 = hero_service_2_1;
            }],
        execute: function() {
            HeroDetailComponent = (function () {
                function HeroDetailComponent(_heroService, _routeParams) {
                    this._heroService = _heroService;
                    this._routeParams = _routeParams;
                }
                HeroDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._heroService.getHero(id)
                        .then(function (hero) { return _this.hero = hero; });
                };
                HeroDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                __decorate([
                    core_3.Input(), 
                    __metadata('design:type', hero_1.Hero)
                ], HeroDetailComponent.prototype, "hero", void 0);
                HeroDetailComponent = __decorate([
                    core_3.Component({
                        selector: 'my-hero-detail',
                        templateUrl: 'app/hero-detail.component.html',
                        styleUrls: ['app/hero-detail.component.css']
                    }), 
                    __metadata('design:paramtypes', [hero_service_2.HeroService, router_2.RouteParams])
                ], HeroDetailComponent);
                return HeroDetailComponent;
            }());
            exports_5("HeroDetailComponent", HeroDetailComponent);
        }
    }
});
System.register("heroes.component", ['angular2/core', 'angular2/router', "hero-detail.component", "hero.service"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_4, router_3, hero_detail_component_1, hero_service_3;
    var HeroesComponent;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (router_3_1) {
                router_3 = router_3_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (hero_service_3_1) {
                hero_service_3 = hero_service_3_1;
            }],
        execute: function() {
            HeroesComponent = (function () {
                function HeroesComponent(_router, _heroService) {
                    this._router = _router;
                    this._heroService = _heroService;
                }
                HeroesComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this._heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
                };
                HeroesComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                HeroesComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
                HeroesComponent.prototype.gotoDetail = function () {
                    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
                };
                HeroesComponent = __decorate([
                    core_4.Component({
                        selector: 'my-heroes',
                        templateUrl: 'app/heroes.component.html',
                        styleUrls: ['app/heroes.component.css'],
                        directives: [hero_detail_component_1.HeroDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [router_3.Router, hero_service_3.HeroService])
                ], HeroesComponent);
                return HeroesComponent;
            }());
            exports_6("HeroesComponent", HeroesComponent);
        }
    }
});
System.register("app.component", ['angular2/core', 'angular2/router', "dashboard.component", "heroes.component", "hero-detail.component", "hero.service"], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_5, router_4, dashboard_component_1, heroes_component_1, hero_detail_component_2, hero_service_4;
    var AppComponent;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (router_4_1) {
                router_4 = router_4_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (heroes_component_1_1) {
                heroes_component_1 = heroes_component_1_1;
            },
            function (hero_detail_component_2_1) {
                hero_detail_component_2 = hero_detail_component_2_1;
            },
            function (hero_service_4_1) {
                hero_service_4 = hero_service_4_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Tour of Heroes';
                }
                AppComponent = __decorate([
                    core_5.Component({
                        selector: 'my-app',
                        template: "\n    <h1>{{title}}</h1>\n    <nav>\n      <a [routerLink]=\"['Dashboard']\">Dashboard</a>\n      <a [routerLink]=\"['Heroes']\">Heroes</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
                        styleUrls: ['app/app.component.css'],
                        directives: [router_4.ROUTER_DIRECTIVES],
                        providers: [
                            router_4.ROUTER_PROVIDERS,
                            hero_service_4.HeroService
                        ]
                    }),
                    router_4.RouteConfig([
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/detail/:id',
                            name: 'HeroDetail',
                            component: hero_detail_component_2.HeroDetailComponent
                        },
                        {
                            path: '/heroes',
                            name: 'Heroes',
                            component: heroes_component_1.HeroesComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_7("AppComponent", AppComponent);
        }
    }
});
/// <reference path="../node_modules/angular2/typings/browser.d.ts" />
System.register("main", ['angular2/platform/browser', "app.component", 'angular2/router', 'angular2/core'], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var browser_1, app_component_1, router_5, core_6;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (router_5_1) {
                router_5 = router_5_1;
            },
            function (core_6_1) {
                core_6 = core_6_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_5.ROUTER_PROVIDERS,
                core_6.provide(router_5.LocationStrategy, { useClass: router_5.HashLocationStrategy })
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm8udHMiLCJtb2NrLWhlcm9lcy50cyIsImhlcm8uc2VydmljZS50cyIsImRhc2hib2FyZC5jb21wb25lbnQudHMiLCJoZXJvLWRldGFpbC5jb21wb25lbnQudHMiLCJoZXJvZXMuY29tcG9uZW50LnRzIiwiYXBwLmNvbXBvbmVudC50cyIsIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztZQUFBO2dCQUFBO2dCQUdBLENBQUM7Z0JBQUQsV0FBQztZQUFELENBSEEsQUFHQyxJQUFBO1lBSEQsdUJBR0MsQ0FBQTs7Ozs7OztRQ0RVLE1BQU07Ozs7WUFBTixvQkFBQSxNQUFNLEdBQVc7Z0JBQzFCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFO2dCQUNoQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRTtnQkFDN0IsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUU7Z0JBQ2hDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO2dCQUNqQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRTtnQkFDL0IsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7Z0JBQ2pDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFO2dCQUM5QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRTtnQkFDN0IsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUU7Z0JBQzdCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFO2FBQ2hDLENBQUEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDUEY7Z0JBQUE7Z0JBZ0JBLENBQUM7Z0JB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNTRDtnQkFBQTtvQkFDRSxVQUFLLEdBQUcsZ0JBQWdCLENBQUM7Z0JBQzNCLENBQUM7Z0JBckNEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSxrTUFPVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzt3QkFDcEMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7d0JBQy9CLFNBQVMsRUFBRTs0QkFDVCx5QkFBZ0I7NEJBQ2hCLDBCQUFXO3lCQUNaO3FCQUNGLENBQUM7b0JBQ0Qsb0JBQVcsQ0FBQzt3QkFDWDs0QkFDRSxJQUFJLEVBQUUsWUFBWTs0QkFDbEIsSUFBSSxFQUFFLFdBQVc7NEJBQ2pCLFNBQVMsRUFBRSx3Q0FBa0I7NEJBQzdCLFlBQVksRUFBRSxJQUFJO3lCQUNuQjt3QkFDRDs0QkFDRSxJQUFJLEVBQUUsYUFBYTs0QkFDbkIsSUFBSSxFQUFFLFlBQVk7NEJBQ2xCLFNBQVMsRUFBRSwyQ0FBbUI7eUJBQy9CO3dCQUNEOzRCQUNFLElBQUksRUFBRSxTQUFTOzRCQUNmLElBQUksRUFBRSxRQUFROzRCQUNkLFNBQVMsRUFBRSxrQ0FBZTt5QkFDM0I7cUJBQ0YsQ0FBQzs7Z0NBQUE7Z0JBR0YsbUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVDQUVDLENBQUE7Ozs7QUM3Q0Qsc0VBQXNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU90RSxtQkFBUyxDQUFDLDRCQUFZLEVBQUU7Z0JBQ3BCLHlCQUFnQjtnQkFDaEIsY0FBTyxDQUFDLHlCQUFnQixFQUFFLEVBQUMsUUFBUSxFQUFFLDZCQUFvQixFQUFDLENBQUM7YUFDOUQsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC5ndWxwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEhlcm8ge1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBIZXJvIH0gZnJvbSAnLi9oZXJvJztcblxuZXhwb3J0IHZhciBIRVJPRVM6IEhlcm9bXSA9IFtcbiAgeyAnaWQnOiAxMSwgJ25hbWUnOiAnTXIuIE5pY2UnIH0sXG4gIHsgJ2lkJzogMTIsICduYW1lJzogJ05hcmNvJyB9LFxuICB7ICdpZCc6IDEzLCAnbmFtZSc6ICdCb21iYXN0bycgfSxcbiAgeyAnaWQnOiAxNCwgJ25hbWUnOiAnQ2VsZXJpdGFzJyB9LFxuICB7ICdpZCc6IDE1LCAnbmFtZSc6ICdNYWduZXRhJyB9LFxuICB7ICdpZCc6IDE2LCAnbmFtZSc6ICdSdWJiZXJNYW4nIH0sXG4gIHsgJ2lkJzogMTcsICduYW1lJzogJ0R5bmFtYScgfSxcbiAgeyAnaWQnOiAxOCwgJ25hbWUnOiAnRHIgSVEnIH0sXG4gIHsgJ2lkJzogMTksICduYW1lJzogJ01hZ21hJyB9LFxuICB7ICdpZCc6IDIwLCAnbmFtZSc6ICdUb3JuYWRvJyB9XG5dO1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSAnLi9oZXJvJztcbmltcG9ydCB7IEhFUk9FUyB9IGZyb20gJy4vbW9jay1oZXJvZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSGVyb1NlcnZpY2Uge1xuICBnZXRIZXJvZXMoKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShIRVJPRVMpO1xuICB9XG5cbiAgZ2V0SGVyb2VzU2xvd2x5KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxIZXJvW10+KHJlc29sdmUgPT5cbiAgICAgIHNldFRpbWVvdXQoKCk9PnJlc29sdmUoSEVST0VTKSwgMjAwMCkgLy8gMiBzZWNvbmRzXG4gICAgKTtcbiAgfVxuXG4gIGdldEhlcm8oaWQ6IG51bWJlcikge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoSEVST0VTKS50aGVuKFxuICAgICAgaGVyb2VzID0+IGhlcm9lcy5maWx0ZXIoaGVybyA9PiBoZXJvLmlkID09PSBpZClbMF1cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuaW1wb3J0IHsgSGVybyB9IGZyb20gJy4vaGVybyc7XG5pbXBvcnQgeyBIZXJvU2VydmljZSB9IGZyb20gJy4vaGVyby5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktZGFzaGJvYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICdhcHAvZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2FwcC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgaGVyb2VzOiBIZXJvW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIF9oZXJvU2VydmljZTogSGVyb1NlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2hlcm9TZXJ2aWNlLmdldEhlcm9lcygpXG4gICAgICAudGhlbihoZXJvZXMgPT4gdGhpcy5oZXJvZXMgPSBoZXJvZXMuc2xpY2UoMSw1KSk7XG4gIH1cblxuICBnb3RvRGV0YWlsKGhlcm86IEhlcm8pIHtcbiAgICBsZXQgbGluayA9IFsnSGVyb0RldGFpbCcsIHsgaWQ6IGhlcm8uaWQgfV07XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKGxpbmspO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IFJvdXRlUGFyYW1zIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuaW1wb3J0IHsgSGVybyB9IGZyb20gJy4vaGVybyc7XG5pbXBvcnQgeyBIZXJvU2VydmljZSB9IGZyb20gJy4vaGVyby5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktaGVyby1kZXRhaWwnLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC9oZXJvLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydhcHAvaGVyby1kZXRhaWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhlcm9EZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBoZXJvOiBIZXJvO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2hlcm9TZXJ2aWNlOiBIZXJvU2VydmljZSxcbiAgICBwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBpZCA9ICt0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2lkJyk7XG4gICAgdGhpcy5faGVyb1NlcnZpY2UuZ2V0SGVybyhpZClcbiAgICAgIC50aGVuKGhlcm8gPT4gdGhpcy5oZXJvID0gaGVybyk7XG4gIH1cblxuICBnb0JhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuaW1wb3J0IHsgSGVybyB9IGZyb20gJy4vaGVybyc7XG5pbXBvcnQgeyBIZXJvRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9oZXJvLWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSGVyb1NlcnZpY2UgfSBmcm9tICcuL2hlcm8uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LWhlcm9lcycsXG4gIHRlbXBsYXRlVXJsOiAnYXBwL2hlcm9lcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogIFsnYXBwL2hlcm9lcy5jb21wb25lbnQuY3NzJ10sXG4gIGRpcmVjdGl2ZXM6IFtIZXJvRGV0YWlsQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBIZXJvZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBoZXJvZXM6IEhlcm9bXTtcbiAgc2VsZWN0ZWRIZXJvOiBIZXJvO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgX2hlcm9TZXJ2aWNlOiBIZXJvU2VydmljZSkgeyB9XG5cbiAgZ2V0SGVyb2VzKCkge1xuICAgIHRoaXMuX2hlcm9TZXJ2aWNlLmdldEhlcm9lcygpLnRoZW4oaGVyb2VzID0+IHRoaXMuaGVyb2VzID0gaGVyb2VzKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZ2V0SGVyb2VzKCk7XG4gIH1cblxuICBvblNlbGVjdChoZXJvOiBIZXJvKSB7IHRoaXMuc2VsZWN0ZWRIZXJvID0gaGVybzsgfVxuXG4gIGdvdG9EZXRhaWwoKSB7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnSGVyb0RldGFpbCcsIHsgaWQ6IHRoaXMuc2VsZWN0ZWRIZXJvLmlkIH1dKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMsIFJPVVRFUl9QUk9WSURFUlMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2Rhc2hib2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSGVyb2VzQ29tcG9uZW50IH0gZnJvbSAnLi9oZXJvZXMuY29tcG9uZW50JztcbmltcG9ydCB7IEhlcm9EZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2hlcm8tZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZXJvU2VydmljZSB9IGZyb20gJy4vaGVyby5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aDE+e3t0aXRsZX19PC9oMT5cbiAgICA8bmF2PlxuICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydEYXNoYm9hcmQnXVwiPkRhc2hib2FyZDwvYT5cbiAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnSGVyb2VzJ11cIj5IZXJvZXM8L2E+XG4gICAgPC9uYXY+XG4gICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICBgLFxuICBzdHlsZVVybHM6IFsnYXBwL2FwcC5jb21wb25lbnQuY3NzJ10sXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gIHByb3ZpZGVyczogW1xuICAgIFJPVVRFUl9QUk9WSURFUlMsXG4gICAgSGVyb1NlcnZpY2VcbiAgXVxufSlcbkBSb3V0ZUNvbmZpZyhbXG4gIHtcbiAgICBwYXRoOiAnL2Rhc2hib2FyZCcsXG4gICAgbmFtZTogJ0Rhc2hib2FyZCcsXG4gICAgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnQsXG4gICAgdXNlQXNEZWZhdWx0OiB0cnVlXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL2RldGFpbC86aWQnLFxuICAgIG5hbWU6ICdIZXJvRGV0YWlsJyxcbiAgICBjb21wb25lbnQ6IEhlcm9EZXRhaWxDb21wb25lbnRcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvaGVyb2VzJyxcbiAgICBuYW1lOiAnSGVyb2VzJyxcbiAgICBjb21wb25lbnQ6IEhlcm9lc0NvbXBvbmVudFxuICB9XG5dKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIHRpdGxlID0gJ1RvdXIgb2YgSGVyb2VzJztcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9ub2RlX21vZHVsZXMvYW5ndWxhcjIvdHlwaW5ncy9icm93c2VyLmQudHNcIiAvPlxuXG5pbXBvcnQgeyBib290c3RyYXAgfSAgICBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBST1VURVJfUFJPVklERVJTLCBST1VURVJfRElSRUNUSVZFUywgTG9jYXRpb24sIExvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJ1xuaW1wb3J0IHsgcHJvdmlkZSB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnXG5cbmJvb3RzdHJhcChBcHBDb21wb25lbnQsIFtcbiAgICBST1VURVJfUFJPVklERVJTLCBcbiAgICBwcm92aWRlKExvY2F0aW9uU3RyYXRlZ3ksIHt1c2VDbGFzczogSGFzaExvY2F0aW9uU3RyYXRlZ3l9KVxuXSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
