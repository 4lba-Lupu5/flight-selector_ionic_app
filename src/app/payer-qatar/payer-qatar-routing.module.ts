import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayerQatarPage } from './payer-qatar.page';

const routes: Routes = [
  {
    path: '',
    component: PayerQatarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayerQatarPageRoutingModule {}
