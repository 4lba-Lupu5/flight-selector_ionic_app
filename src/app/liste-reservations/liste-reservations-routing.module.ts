import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeReservationsPage } from './liste-reservations.page';

const routes: Routes = [
  {
    path: '',
    component: ListeReservationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeReservationsPageRoutingModule {}
