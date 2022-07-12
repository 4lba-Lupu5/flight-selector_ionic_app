import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolAirFrancePageRoutingModule } from './vol-air-france-routing.module';

import { VolAirFrancePage } from './vol-air-france.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolAirFrancePageRoutingModule
  ],
  declarations: [VolAirFrancePage]
})
export class VolAirFrancePageModule {}
