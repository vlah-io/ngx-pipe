import {CurrencyPipe} from '@angular/common';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'vlahioGBP'})
export class GBPCurrencyPipe implements PipeTransform {
  transform(
    value: number | string | null,
    digitsInfo?: string,
    display?: 'code' | 'symbol' | 'symbol-narrow' | string | boolean,
    locale?: string
  ): string | null {
    const currency: CurrencyPipe = new CurrencyPipe('en-US');

    return currency.transform(
      value,
      'GBP',
      display,
      digitsInfo,
      locale
    );
  }
}
