import {
    Component,
    CORE_DIRECTIVES,
    FORM_DIRECTIVES,
    OnInit
} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {HeroService} from './hero.service';
import {HeroDetailComponent} from './hero-detail.component';
import {Hero} from './hero';
import {Routes} from './route.config';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, HeroDetailComponent]
})
export class HeroesComponent implements OnInit {

    public heroes:Hero[];
    public selectedHero:Hero;

    constructor(private _heroService:HeroService,
                private _router:Router) {
    }

    public onInit():void {
        this.heroes = this._getHeroes();
    }

    private _getHeroes():Hero[] {
        this.selectedHero = undefined;
        this.heroes = [];

        this._heroService.getHeroes()
            .then((heroes:Hero[]) => {
                this.heroes = heroes
            });

        return this.heroes;
    }

    public onSelect(hero:Hero):void {
        this.selectedHero = hero;
    }

    public gotoDetail():void {
        this._router.navigate([Routes.detail.as, {id: this.selectedHero.id}]);
    }

}
