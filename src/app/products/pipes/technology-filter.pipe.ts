import {Pipe, PipeTransform} from '@angular/core';

import {Product} from '../product';

@Pipe({name: 'technologyFilter'})
export class TechnologyFilterPipe implements PipeTransform {
  transform(values: Product[], isActive) {
    if (isActive) {
      return values.filter((value) => {
        return value.category === 'technology';
      });
    }

    return values;
  }
}
