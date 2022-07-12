import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolAirAustralPage } from './vol-air-austral.page';

const routes: Routes = [
  {
    path: '',
    component: VolAirAustralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolAirAustralPageRoutingModule {}
