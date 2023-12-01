import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPriceBetter',
  standalone: true
})
export class FormatPriceBetterPipe implements PipeTransform {

  transform(value: unknown, currency: string = 'USD', locale: string | undefined): unknown {
    if (typeof value !== 'number') {
      return value;
    }
    try {
      return new Intl.NumberFormat(locale, {style: 'currency', currency}).format(value / 100);
    } catch (e: any) {
      return e.message
    }
  }
}
