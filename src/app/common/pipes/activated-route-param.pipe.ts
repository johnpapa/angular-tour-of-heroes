import { Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'activatedRouteParam'
})
export class ActivatedRouteParamPipe implements PipeTransform {
  constructor(private readonly activatedRoute: ActivatedRoute) {}

  transform(paramName: string, options: { type: 'number'}): number;

  transform(paramName: string, options?: { type?: 'number' | 'string'}): any {
    return this.activatedRoute.params
      .pipe(
        map(params => params[paramName]),
        map(param => {
          const { type } = options || { type: 'string' };

          switch (type) {
            case 'number':
              return +param;

            default:
              return param;
          }
        }),
      );
  }
}
