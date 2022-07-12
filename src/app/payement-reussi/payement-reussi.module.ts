import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayementReussiPageRoutingModule } from './payement-reussi-routing.module';

import { PayementReussiPage } from './payement-reussi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayementReussiPageRoutingModule
  ],
  declarations: [PayementReussiPage]
})
export class PayementReussiPageModule {}
