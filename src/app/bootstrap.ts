import {bootstrap} from 'angular2/angular2';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app.component';
import {HeroService} from './hero.service';

bootstrap(AppComponent, [ROUTER_PROVIDERS, HeroService]);
