import {Pipe, PipeTransform} from '@angular/core';

import {Product} from '../product';

@Pipe({name: 'freeProductsFilter'})
export class FreeProductsFilterPipe implements PipeTransform {
  transform(values: Product[], isActive) {
    if (isActive) {
      return values.filter((value) => {
        return value.price === 0;
      });
    }

    return values;
  }
}
