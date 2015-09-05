import {Component, FORM_DIRECTIVES, View} from 'angular2/angular2';
import {Hero} from './hero';

@Component({
  selector: 'my-hero-detail', properties: ['hero']
})
@View({
  templateUrl: 'app/hero-detail-component.html',
  directives: [FORM_DIRECTIVES]
})
export class HeroDetailComponent {
  hero: Hero;
}
