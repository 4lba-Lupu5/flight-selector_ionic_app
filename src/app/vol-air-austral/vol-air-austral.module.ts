import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolAirAustralPageRoutingModule } from './vol-air-austral-routing.module';

import { VolAirAustralPage } from './vol-air-austral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolAirAustralPageRoutingModule
  ],
  declarations: [VolAirAustralPage]
})
export class VolAirAustralPageModule {}
