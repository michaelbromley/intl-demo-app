import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPriceBetter',
  standalone: true
})
export class FormatPriceBetterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (typeof value !== 'number') {
      return value;
    }
    return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'USD' }).format(value / 100);
  }
}
