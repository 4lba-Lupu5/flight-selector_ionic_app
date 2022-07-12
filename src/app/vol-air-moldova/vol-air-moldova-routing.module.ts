import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolAirMoldovaPage } from './vol-air-moldova.page';

const routes: Routes = [
  {
    path: '',
    component: VolAirMoldovaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolAirMoldovaPageRoutingModule {}
