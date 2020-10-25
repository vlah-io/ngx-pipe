import {NgModule} from '@angular/core';
import {EURCurrencyPipe} from './currency/eur-currency.pipe';
import {GBPCurrencyPipe} from './currency/gbp-currency.pipe';
import {USDCurrencyPipe} from './currency/usd-currency.pipe';
import {VlahioDatePipe} from './date/vlahio-date.pipe';
import {NumericPipe} from './various/numeric.pipe';
import {SplitUcWordsPipe} from './various/split-uc-words.pipe';
import {TextHighlightPipe} from './various/text-highlight.pipe';

@NgModule({
  declarations: [
    EURCurrencyPipe,
    GBPCurrencyPipe,
    USDCurrencyPipe,
    VlahioDatePipe,
    NumericPipe,
    SplitUcWordsPipe,
    TextHighlightPipe
  ],
  exports: [
    EURCurrencyPipe,
    GBPCurrencyPipe,
    USDCurrencyPipe,
    VlahioDatePipe,
    NumericPipe,
    SplitUcWordsPipe,
    TextHighlightPipe
  ]
})
export class NgxPipeModule {
}
