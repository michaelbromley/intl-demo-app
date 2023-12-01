import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {FormatPricePipe} from "./pipes/format-price.pipe";
import {FormatPriceBetterPipe} from "./pipes/format-price-better.pipe";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, FormatPricePipe, FormatPriceBetterPipe, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected readonly FormatPriceBetterPipe = FormatPriceBetterPipe;
}
