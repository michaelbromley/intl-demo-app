import {Routes} from '@angular/router';
import {SimpleCurrencyFormatComponent} from "./components/simple-currency-format/simple-currency-format.component";
import {BetterCurrencyFormatComponent} from "./components/better-currency-format/better-currency-format.component";

export const routes: Routes = [{
  path: 'simple-currency-format',
  component: SimpleCurrencyFormatComponent,
}, {
  path: 'better-currency-format',
  component: BetterCurrencyFormatComponent,
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'simple-currency-format'
}];
