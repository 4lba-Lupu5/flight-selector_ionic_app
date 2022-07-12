import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayerBurkinaPageRoutingModule } from './payer-burkina-routing.module';

import { PayerBurkinaPage } from './payer-burkina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayerBurkinaPageRoutingModule
  ],
  declarations: [PayerBurkinaPage]
})
export class PayerBurkinaPageModule {}
