import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayerDeltaPage } from './payer-delta.page';

const routes: Routes = [
  {
    path: '',
    component: PayerDeltaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayerDeltaPageRoutingModule {}
