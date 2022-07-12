import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeVolsPage } from './liste-vols.page';

const routes: Routes = [
  {
    path: '',
    component: ListeVolsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeVolsPageRoutingModule {}
