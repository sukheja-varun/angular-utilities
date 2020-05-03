import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceCharacter'
})
export class ReplaceCharacterPipe implements PipeTransform {

  /**
     * @description it is used to replace a character with any other character
     * @param {string} value
     * @param {string} [toReplace='_'] the character to be replaced // default replaces '_' (underscore)
     * @param {string} [replaceWith=' '] the character to be replaced with // by-default it is replaced with blank space
     * @returns {string}
     * @memberof ReplaceCharacterPipe
     */
  transform(value: string, toReplace: string = '_', replaceWith: string = ' '): string {
    // construct RegExp using toReplace variable
    let regExpString = new RegExp(toReplace, 'g');

    //   replace the RegExp using replaceWith character
    return value.replace(regExpString, replaceWith);
  }

}
