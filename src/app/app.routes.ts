import {Routes} from '@angular/router';
import {SimpleCurrencyFormatComponent} from "./components/simple-currency-format/simple-currency-format.component";
import {BetterCurrencyFormatComponent} from "./components/better-currency-format/better-currency-format.component";
import {FormatOMaticComponent} from "./components/format-o-matic/format-o-matic.component";

export const routes: Routes = [{
  path: 'simple-currency-format',
  component: SimpleCurrencyFormatComponent,
}, {
  path: 'better-currency-format',
  component: BetterCurrencyFormatComponent,
}, {
  path: 'format-o-matic',
  component: FormatOMaticComponent,
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'simple-currency-format'
}];
