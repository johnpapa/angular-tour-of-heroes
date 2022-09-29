import { NgModule } from '@angular/core';
import { ActivatedRouteParamPipe } from './activated-route-param.pipe';

const PUBLIC_DECLARATIONS = [
  ActivatedRouteParamPipe,
];

@NgModule({
  declarations: PUBLIC_DECLARATIONS,
  exports: PUBLIC_DECLARATIONS,
})
export class AppCommonPipesModule {}
