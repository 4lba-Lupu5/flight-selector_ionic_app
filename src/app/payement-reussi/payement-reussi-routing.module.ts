import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayementReussiPage } from './payement-reussi.page';

const routes: Routes = [
  {
    path: '',
    component: PayementReussiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayementReussiPageRoutingModule {}
