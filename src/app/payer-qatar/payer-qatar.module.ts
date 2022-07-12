import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayerQatarPageRoutingModule } from './payer-qatar-routing.module';

import { PayerQatarPage } from './payer-qatar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayerQatarPageRoutingModule
  ],
  declarations: [PayerQatarPage]
})
export class PayerQatarPageModule {}
