import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {FormatPricePipe} from "./pipes/format-price.pipe";
import {FormatPriceBetterPipe} from "./pipes/format-price-better.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, FormatPricePipe, FormatPriceBetterPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  value = 12345678;
}
