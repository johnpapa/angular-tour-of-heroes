import { Component } from '@angular/core';

@Component({
  selector: 'my-hero-detail-page',
  templateUrl: './hero-detail-page.component.html',
})
export class HeroDetailPageComponent {
  goBack(): void {
    window.history.back();
  }
}
