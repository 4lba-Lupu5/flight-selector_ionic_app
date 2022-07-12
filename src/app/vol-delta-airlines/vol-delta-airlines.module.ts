import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolDeltaAirlinesPageRoutingModule } from './vol-delta-airlines-routing.module';

import { VolDeltaAirlinesPage } from './vol-delta-airlines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolDeltaAirlinesPageRoutingModule
  ],
  declarations: [VolDeltaAirlinesPage]
})
export class VolDeltaAirlinesPageModule {}
