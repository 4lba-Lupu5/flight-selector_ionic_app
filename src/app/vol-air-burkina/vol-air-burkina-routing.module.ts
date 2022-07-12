import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolAirBurkinaPage } from './vol-air-burkina.page';

const routes: Routes = [
  {
    path: '',
    component: VolAirBurkinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolAirBurkinaPageRoutingModule {}
