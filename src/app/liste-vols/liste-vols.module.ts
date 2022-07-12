import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeVolsPageRoutingModule } from './liste-vols-routing.module';

import { ListeVolsPage } from './liste-vols.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeVolsPageRoutingModule
  ],
  declarations: [ListeVolsPage]
})
export class ListeVolsPageModule {}
