import {
    Component,
    CORE_DIRECTIVES,
    FORM_DIRECTIVES,
    OnInit
} from 'angular2/angular2';
import {RouteParams, Router} from 'angular2/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {Routes} from './route.config';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    inputs: ['hero']
})
export class HeroDetailComponent implements OnInit {

    public hero:Hero;

    constructor(private _heroService:HeroService,
                private _routeParams:RouteParams,
                private _router:Router) {
    }

    public onInit():void {
        if (!this.hero) {
            let id = +this._routeParams.get('id');
            this._heroService.getHero(id)
                .then((hero:Hero) => {
                    this.hero = hero;
                });
        }
    }

    public gotoHeroes():void {
        this._router.navigate([Routes.heroes.as]);
    }
}
