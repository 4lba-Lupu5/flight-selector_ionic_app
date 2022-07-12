import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolQatarAirwaysPage } from './vol-qatar-airways.page';

const routes: Routes = [
  {
    path: '',
    component: VolQatarAirwaysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolQatarAirwaysPageRoutingModule {}
