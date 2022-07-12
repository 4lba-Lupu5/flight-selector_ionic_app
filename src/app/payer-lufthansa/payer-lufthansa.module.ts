import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayerLufthansaPageRoutingModule } from './payer-lufthansa-routing.module';

import { PayerLufthansaPage } from './payer-lufthansa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayerLufthansaPageRoutingModule
  ],
  declarations: [PayerLufthansaPage]
})
export class PayerLufthansaPageModule {}
