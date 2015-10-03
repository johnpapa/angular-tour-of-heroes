import {bootstrap} from 'angular2/angular2';
import {routerBindings} from 'angular2/router';
import {HeroService} from './hero.service';
import {AppComponent} from './app.component';

bootstrap(AppComponent, [routerBindings(AppComponent), HeroService]);
