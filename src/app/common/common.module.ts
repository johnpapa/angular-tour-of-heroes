import { NgModule } from '@angular/core';
import { AppCommonPipesModule } from './pipes';

@NgModule({
  imports: [
    AppCommonPipesModule,
  ],
  exports: [
    AppCommonPipesModule,
  ],
})
export class AppCommonModule {}
