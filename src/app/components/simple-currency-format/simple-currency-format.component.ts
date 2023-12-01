import { Component } from '@angular/core';
import {FormatPriceBetterPipe} from "../../pipes/format-price-better.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormatPricePipe} from "../../pipes/format-price.pipe";

@Component({
  selector: 'app-simple-currency-format',
  standalone: true,
  imports: [
    FormatPriceBetterPipe,
    ReactiveFormsModule,
    FormsModule,
    FormatPricePipe
  ],
  templateUrl: './simple-currency-format.component.html',
})
export class SimpleCurrencyFormatComponent {
  value = 12345678;
}
