import { NgModule } from '@angular/core';
import { HeroPipe } from './hero.pipe';

const PUBLIC_DECLARATIONS = [
  HeroPipe,
];

@NgModule({
  declarations: PUBLIC_DECLARATIONS,
  exports: PUBLIC_DECLARATIONS,
})
export class HeroPipesModule {}
