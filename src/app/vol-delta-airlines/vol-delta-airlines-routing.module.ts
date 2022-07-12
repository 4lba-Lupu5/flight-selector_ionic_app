import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolDeltaAirlinesPage } from './vol-delta-airlines.page';

const routes: Routes = [
  {
    path: '',
    component: VolDeltaAirlinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolDeltaAirlinesPageRoutingModule {}
