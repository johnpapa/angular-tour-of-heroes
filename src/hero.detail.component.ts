import {Component, FORM_DIRECTIVES, View} from 'angular2/angular2';
import {Hero} from 'heroes';

@Component({
  selector: 'hero-detail', properties: ['hero']
})
@View({
  templateUrl: 'hero.detail.component.html',
  directives: [FORM_DIRECTIVES]
})
export class HeroDetailComponent {
  hero: Hero;
}
