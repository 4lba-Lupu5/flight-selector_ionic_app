import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolAirMoldovaPageRoutingModule } from './vol-air-moldova-routing.module';

import { VolAirMoldovaPage } from './vol-air-moldova.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolAirMoldovaPageRoutingModule
  ],
  declarations: [VolAirMoldovaPage]
})
export class VolAirMoldovaPageModule {}
