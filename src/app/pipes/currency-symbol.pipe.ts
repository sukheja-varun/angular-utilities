import { Pipe, PipeTransform } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Pipe({
  name: 'currencySymbol'
})
export class CurrencySymbolPipe implements PipeTransform {

  /**
   * @description it gives the currency symbol for the given currency code
   * like ₹ for INR and $ for USD
   *
   * @param {string} code
   * @param {('wide' | 'narrow')} [format='narrow']
   * @param {string} [locale]
   * @returns {*}
   * @memberof CurrencySymbolPipe
   */
  transform(
    code: string,
    format: 'wide' | 'narrow' = 'narrow',
    locale?: string
  ): string {
    return getCurrencySymbol(code, format, locale);
  }

}
