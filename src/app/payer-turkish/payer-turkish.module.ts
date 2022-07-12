import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayerTurkishPageRoutingModule } from './payer-turkish-routing.module';

import { PayerTurkishPage } from './payer-turkish.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayerTurkishPageRoutingModule
  ],
  declarations: [PayerTurkishPage]
})
export class PayerTurkishPageModule {}
