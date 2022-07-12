import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConInsPageRoutingModule } from './con-ins-routing.module';

import { ConInsPage } from './con-ins.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConInsPageRoutingModule
  ],
  declarations: [ConInsPage]
})
export class ConInsPageModule {}
