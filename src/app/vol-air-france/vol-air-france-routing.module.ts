import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolAirFrancePage } from './vol-air-france.page';

const routes: Routes = [
  {
    path: '',
    component: VolAirFrancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolAirFrancePageRoutingModule {}
