import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayerTurkishPage } from './payer-turkish.page';

const routes: Routes = [
  {
    path: '',
    component: PayerTurkishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayerTurkishPageRoutingModule {}
