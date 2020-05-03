import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCaseToWords'
})
export class CamelCaseToWordsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return (
      value
        // insert a space before all caps
        .replace(/([A-Z])/g, ' $1')
        // uppercase the first character
        .replace(/^./, function (str) {
          return str.toUpperCase();
        })
    );
  }

}
