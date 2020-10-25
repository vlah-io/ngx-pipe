import {TestBed} from '@angular/core/testing';
import {EURCurrencyPipe} from './eur-currency.pipe';
import {USDCurrencyPipe} from './usd-currency.pipe';
import {GBPCurrencyPipe} from './gbp-currency.pipe';
import {VlahioDatePipe} from '../date/vlahio-date.pipe';
import {NumericPipe} from '../various/numeric.pipe';
import {SplitUcWordsPipe} from '../various/split-uc-words.pipe';
import {TextHighlightPipe} from '../various/text-highlight.pipe';
import {DomSanitizer} from '@angular/platform-browser';

describe('Currency Pipes', () => {
  let vlahioEUR: EURCurrencyPipe;
  let vlahioUSD: USDCurrencyPipe;
  let vlahioGBP: GBPCurrencyPipe;
  let vlahioDate: VlahioDatePipe;
  let vlahioNumeric: NumericPipe;
  let vlahioSplitUcWordsPipe: SplitUcWordsPipe;
  let vlahioTextHighlightPipe: TextHighlightPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    vlahioEUR = new EURCurrencyPipe();
    vlahioUSD = new USDCurrencyPipe();
    vlahioGBP = new GBPCurrencyPipe();
    vlahioDate = new VlahioDatePipe({date_format: 'dd-MM-yyyy', date_timezone: '+0200'});
    vlahioNumeric = new NumericPipe();
    vlahioSplitUcWordsPipe = new SplitUcWordsPipe();
    vlahioTextHighlightPipe = new TextHighlightPipe(TestBed.inject(DomSanitizer));
  });

  it(
    'it should return €1,125.64',
    () => {
      expect(vlahioEUR.transform(1125.64)).toBe('€1,125.64');
    }
  );

  it(
    'it should return $1,125.64',
    () => {
      expect(vlahioUSD.transform(1125.64)).toBe('$1,125.64');
    }
  );

  it(
    'it should return £1,125.64',
    () => {
      expect(vlahioGBP.transform(1125.64)).toBe('£1,125.64');
    }
  );

  it(
    'it should return 20-03-2020',
    () => {
      expect(vlahioDate.transform(new Date('2020-03-20'))).toBe('20-03-2020');
    }
  );

  it(
    'it should return 1,125.64',
    () => {
      expect(vlahioNumeric.transform(1125.64)).toBe('1,125.64');
    }
  );

  it(
    'it should return `Some Text`',
    () => {
      expect(vlahioSplitUcWordsPipe.transform('someText')).toBe('Some Text');
    }
  );

  it(
    'it should return `Some <span style="background-color: #ffc107; padding: 0 3px;">text</span>`',
    () => {
      expect(
        (vlahioTextHighlightPipe.transform('Some text', 'text') as any).changingThisBreaksApplicationSecurity
      ).toBe(
        'Some <span style="background-color: #ffc107; padding: 0 3px;">text</span>'
      );
    }
  );
});
