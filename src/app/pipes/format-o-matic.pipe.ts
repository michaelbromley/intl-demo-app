import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatOMatic',
  standalone: true
})
export class FormatOMaticPipe implements PipeTransform {

  transform(value: unknown, style: string = 'currency', currencyOrUnit: string = 'USD', locale: string | undefined): unknown {
    if (typeof value !== 'number') {
      return value;
    }
    if (style === 'relative-days') {
      const rtf1 = new Intl.RelativeTimeFormat(locale, { style: 'long', numeric: 'auto' });
      return rtf1.format(value, 'day');
    }
    const options: Intl.NumberFormatOptions = style === 'currency' ? {style, currency: currencyOrUnit} : {style, unit: currencyOrUnit };
    try {
      return new Intl.NumberFormat(locale, options).format(value);
    } catch (e: any) {
      return e.message
    }
  }
}
