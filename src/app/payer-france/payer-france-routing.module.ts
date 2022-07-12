import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayerFrancePage } from './payer-france.page';

const routes: Routes = [
  {
    path: '',
    component: PayerFrancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayerFrancePageRoutingModule {}
