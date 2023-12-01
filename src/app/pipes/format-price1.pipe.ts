import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPrice1',
  standalone: true
})
export class FormatPrice1Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (typeof value !== 'number') {
      return value;
    }
    return `$${(value / 100).toFixed(2)}`;
  }

}
