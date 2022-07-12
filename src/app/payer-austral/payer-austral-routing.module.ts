import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayerAustralPage } from './payer-austral.page';

const routes: Routes = [
  {
    path: '',
    component: PayerAustralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayerAustralPageRoutingModule {}
