import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayerMoldovaPage } from './payer-moldova.page';

const routes: Routes = [
  {
    path: '',
    component: PayerMoldovaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayerMoldovaPageRoutingModule {}
