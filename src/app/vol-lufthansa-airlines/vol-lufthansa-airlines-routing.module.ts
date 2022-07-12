import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolLufthansaAirlinesPage } from './vol-lufthansa-airlines.page';

const routes: Routes = [
  {
    path: '',
    component: VolLufthansaAirlinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolLufthansaAirlinesPageRoutingModule {}
