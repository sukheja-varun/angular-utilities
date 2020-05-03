import { Pipe, PipeTransform } from '@angular/core';
import get from 'lodash.get';

@Pipe({
  name: 'lodashGet'
})
export class LodashGetPipe implements PipeTransform {

  /**
  * @description it will get the value from the item based on the key
  *
  * @param {object} item
  * @param {string | string[]} key
  * @param {string} defaultValue
  *
  * @memberof LodashGetPipe
  */
  transform(
    item: object,
    key: string | string[],
    defaultValue: string = ''
  ): string {
    return get(item, key, defaultValue);
  }

}
