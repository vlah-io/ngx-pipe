import {CurrencyPipe} from '@angular/common';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'vlahioEUR'})
export class EURCurrencyPipe implements PipeTransform {
  transform(
    value: number | string | null,
    digitsInfo?: string,
    display?: 'code' | 'symbol' | 'symbol-narrow' | string | boolean,
    locale?: string
  ): string | null {
    const currency: CurrencyPipe = new CurrencyPipe('en-US');

    return currency.transform(
      value,
      'EUR',
      display,
      digitsInfo,
      locale
    );
  }
}
