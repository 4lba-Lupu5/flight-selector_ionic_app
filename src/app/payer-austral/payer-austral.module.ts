import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayerAustralPageRoutingModule } from './payer-austral-routing.module';

import { PayerAustralPage } from './payer-austral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayerAustralPageRoutingModule
  ],
  declarations: [PayerAustralPage]
})
export class PayerAustralPageModule {}
