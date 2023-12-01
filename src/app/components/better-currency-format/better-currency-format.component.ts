import { Component } from '@angular/core';
import {FormatPriceBetterPipe} from "../../pipes/format-price-better.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-better-currency-format',
  standalone: true,
  imports: [
    FormatPriceBetterPipe,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './better-currency-format.component.html',
})
export class BetterCurrencyFormatComponent {
  value = 12345678;
  locale = 'en-US';
  currency = 'USD';
}
