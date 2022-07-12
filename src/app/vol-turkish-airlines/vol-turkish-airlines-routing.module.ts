import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolTurkishAirlinesPage } from './vol-turkish-airlines.page';

const routes: Routes = [
  {
    path: '',
    component: VolTurkishAirlinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolTurkishAirlinesPageRoutingModule {}
