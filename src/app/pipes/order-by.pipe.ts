import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform<T>(array: T[] = [], compareFn?: ((a: T, b: T) => number)): T[] {
    return array.sort(compareFn);
  }

}
