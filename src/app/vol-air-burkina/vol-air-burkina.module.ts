import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolAirBurkinaPageRoutingModule } from './vol-air-burkina-routing.module';

import { VolAirBurkinaPage } from './vol-air-burkina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolAirBurkinaPageRoutingModule
  ],
  declarations: [VolAirBurkinaPage]
})
export class VolAirBurkinaPageModule {}
