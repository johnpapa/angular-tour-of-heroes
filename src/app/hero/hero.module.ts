import { NgModule } from '@angular/core';
import { HeroPipesModule } from './pipes';
import { HeroDirectivesModule } from './directives';

@NgModule({
  imports: [
    HeroPipesModule,
    HeroDirectivesModule,
  ],
  exports: [
    HeroPipesModule,
    HeroDirectivesModule,
  ],
})
export class HeroModule {}
