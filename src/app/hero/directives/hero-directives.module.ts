import { NgModule } from '@angular/core';
import { HeroUpdaterDirective } from './hero-updater.directive';

const PUBLIC_DECLARATIONS = [
  HeroUpdaterDirective,
];

@NgModule({
  declarations: PUBLIC_DECLARATIONS,
  exports: PUBLIC_DECLARATIONS,
})
export class HeroDirectivesModule {}
