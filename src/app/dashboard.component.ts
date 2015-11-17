import {
    Component,
    CORE_DIRECTIVES,
    OnInit
} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {Routes} from './route.config';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css'],
    directives: [CORE_DIRECTIVES]
})
export class DashboardComponent implements OnInit {

    public heroes:Hero[];

    constructor(
        private _heroService:HeroService,
        private _router:Router
    ) {
    }

    public onInit():void {
        this.heroes = this.getHeroes();
    }

    public gotoDetail(hero:Hero):void {
        this._router.navigate([Routes.detail.as, {id: hero.id}]);
    }

    public getHeroes():Hero[] {
        this.heroes = [];

        this._heroService.getHeroes()
            .then((heroes:Hero[]) => {
                this.heroes = heroes
            });

        return this.heroes;
    }
}
