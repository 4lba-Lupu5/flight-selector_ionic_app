import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayerMoldovaPageRoutingModule } from './payer-moldova-routing.module';

import { PayerMoldovaPage } from './payer-moldova.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayerMoldovaPageRoutingModule
  ],
  declarations: [PayerMoldovaPage]
})
export class PayerMoldovaPageModule {}
