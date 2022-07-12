import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeReservationsPageRoutingModule } from './liste-reservations-routing.module';

import { ListeReservationsPage } from './liste-reservations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeReservationsPageRoutingModule
  ],
  declarations: [ListeReservationsPage]
})
export class ListeReservationsPageModule {}
