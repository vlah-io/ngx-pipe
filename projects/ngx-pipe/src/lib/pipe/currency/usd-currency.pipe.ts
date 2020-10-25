import {CurrencyPipe} from '@angular/common';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'vlahioUSD'})
export class USDCurrencyPipe implements PipeTransform {
  transform(
    value: number | string | null,
    digitsInfo?: string,
    display?: 'code' | 'symbol' | 'symbol-narrow' | string | boolean,
    locale?: string
  ): string | null {
    const currency: CurrencyPipe = new CurrencyPipe('en-US');

    return currency.transform(
      value,
      'USD',
      display,
      digitsInfo,
      locale
    );
  }
}
