import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input() hero: Hero;
  @Output() close = new EventEmitter<Hero | null>();
}
