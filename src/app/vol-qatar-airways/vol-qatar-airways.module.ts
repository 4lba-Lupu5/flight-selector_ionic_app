import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolQatarAirwaysPageRoutingModule } from './vol-qatar-airways-routing.module';

import { VolQatarAirwaysPage } from './vol-qatar-airways.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolQatarAirwaysPageRoutingModule
  ],
  declarations: [VolQatarAirwaysPage]
})
export class VolQatarAirwaysPageModule {}
