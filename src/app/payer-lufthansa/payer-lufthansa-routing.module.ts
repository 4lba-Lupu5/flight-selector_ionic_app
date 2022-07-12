import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayerLufthansaPage } from './payer-lufthansa.page';

const routes: Routes = [
  {
    path: '',
    component: PayerLufthansaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayerLufthansaPageRoutingModule {}
