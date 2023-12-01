import { Component } from '@angular/core';
import {FormatPriceBetterPipe} from "../../pipes/format-price-better.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormatOMaticPipe} from "../../pipes/format-o-matic.pipe";

@Component({
  selector: 'app-format-o-matic',
  standalone: true,
  imports: [
    FormatPriceBetterPipe,
    ReactiveFormsModule,
    FormsModule,
    FormatOMaticPipe
  ],
  templateUrl: './format-o-matic.component.html',
})
export class FormatOMaticComponent {
  value = 12345678;
  locale = 'en-US';
  currencyOrUnit = 'USD';
  get style(): string {
    return this.currencyOrUnit === 'relative-days' ? 'relative-days' : /[A-Z]{3}/.test(this.currencyOrUnit) ? 'currency' : 'unit';
  }
}
