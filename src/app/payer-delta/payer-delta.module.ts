import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayerDeltaPageRoutingModule } from './payer-delta-routing.module';

import { PayerDeltaPage } from './payer-delta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayerDeltaPageRoutingModule
  ],
  declarations: [PayerDeltaPage]
})
export class PayerDeltaPageModule {}
