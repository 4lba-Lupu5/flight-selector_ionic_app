import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayerBurkinaPage } from './payer-burkina.page';

const routes: Routes = [
  {
    path: '',
    component: PayerBurkinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayerBurkinaPageRoutingModule {}
