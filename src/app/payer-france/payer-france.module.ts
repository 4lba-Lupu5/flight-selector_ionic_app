import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayerFrancePageRoutingModule } from './payer-france-routing.module';

import { PayerFrancePage } from './payer-france.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayerFrancePageRoutingModule
  ],
  declarations: [PayerFrancePage]
})
export class PayerFrancePageModule {}
