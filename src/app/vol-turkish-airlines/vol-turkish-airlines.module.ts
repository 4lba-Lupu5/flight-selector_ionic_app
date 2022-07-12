import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolTurkishAirlinesPageRoutingModule } from './vol-turkish-airlines-routing.module';

import { VolTurkishAirlinesPage } from './vol-turkish-airlines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolTurkishAirlinesPageRoutingModule
  ],
  declarations: [VolTurkishAirlinesPage]
})
export class VolTurkishAirlinesPageModule {}
