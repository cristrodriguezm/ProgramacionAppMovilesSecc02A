import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampanaPageRoutingModule } from './campana-routing.module';

import { CampanaPage } from './campana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampanaPageRoutingModule
  ],
  declarations: [CampanaPage]
})
export class CampanaPageModule {}
