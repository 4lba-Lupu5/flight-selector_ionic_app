import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolLufthansaAirlinesPageRoutingModule } from './vol-lufthansa-airlines-routing.module';

import { VolLufthansaAirlinesPage } from './vol-lufthansa-airlines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolLufthansaAirlinesPageRoutingModule
  ],
  declarations: [VolLufthansaAirlinesPage]
})
export class VolLufthansaAirlinesPageModule {}
