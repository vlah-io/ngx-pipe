import {CurrencyPipe} from '@angular/common';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'vlahioNumeric'})
export class NumericPipe implements PipeTransform {
  transform(
    value: number | string | null,
    digitsInfo?: string,
    locale?: string
  ): string | null {
    const currency: CurrencyPipe = new CurrencyPipe('en-US');

    return currency.transform(
      value,
      '',
      '',
      digitsInfo,
      locale
    );
  }
}
