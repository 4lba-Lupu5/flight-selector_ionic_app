import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConInsPage } from './con-ins.page';

const routes: Routes = [
  {
    path: '',
    component: ConInsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConInsPageRoutingModule {}
